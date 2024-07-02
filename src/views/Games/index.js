import React, { useState } from "react";
import { Container, Grid, Header } from "semantic-ui-react";
import UserProfile from "../../organism/userProfile";
import GameList from "../../organism/gameList";
import CategoryList from "../../organism/categories";

import { withNavigate } from "../../hoc/navigation";

import useGameHook from "../../hooks/game-hook";
import { useUserProfile } from "../../context/userProfileContext";

import { logoutApiService } from "../../service/auth";

import { ModalComponent as Modal } from "../../components/modal";

function Games(props) {
  const { games, categories, doFilterByCategory, doSearchGameByName } =
    useGameHook();
  const [selectedGame, setSelectedGame] = useState({}); //selected game for play
  const [gameModal, setGameModal] = useState(false);

  const { userProfile, setUserProfile } = useUserProfile();

  const doLogout = React.useCallback(async () => {
    try {
      await logoutApiService(userProfile.username);
      await setUserProfile({});

      props.navigate("/", { replace: true });
    } catch (error) {}
  }, []);
  return (
    <Container>
      <UserProfile
        search={(e) => {
          doSearchGameByName(e.target.value);
        }}
        user={userProfile}
        logout={doLogout}
      />
      <Grid>
        <Grid.Row>
          <Grid.Column width={12}>
            <Header style={{ marginLeft: "20px" }} as="h3">
              Games
            </Header>

            <GameList
              games={games}
              openGameModal={(gameplay) => {
                setSelectedGame(gameplay);
                setGameModal(true);
              }}
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <Header as="h3">Categories</Header>
            <CategoryList
              categories={categories}
              onCategoryClick={doFilterByCategory}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Modal
        title={selectedGame.name}
        open={gameModal}
        onClose={() => setGameModal(false)}
        content={<div id="game-launch"></div>}
      />
    </Container>
  );
}

export default withNavigate(Games);
