import React from "react";
import { Card, Image, Button, Icon } from "semantic-ui-react";

const GameCard = ({ name, description, code, play }) => {
  const [gameImg, setGameImg] = React.useState(null);

  React.useEffect(() => {
    const loadGameImage = async () => {
      try {
        let gameImage;
        switch (code) {
          case "bookofinferno94":
            gameImage = await import(
              "../assets/images/game-icon/book_of_inferno_logo.png"
            );
            break;
          case "feastingfox":
            gameImage = await import(
              "../assets/images/game-icon/feasting_fox.png"
            );
            break;
          case "warpwreckers":
            gameImage = await import(
              "../assets/images/game-icon/warp_wreckers_powerglyph_logo.png"
            );
            break;
          case "renosevens":
            gameImage = await import(
              "../assets/images/game-icon/renoseverns_logo_one_line_shadow.png"
            );
            break;
          case "scattermonsters":
            gameImage = await import(
              "../assets/images/game-icon/scatter-monster-logo.png"
            );
            break;
          default:
            gameImage = await import(
              "../assets/images/game-icon/scatter-monster-logo.png"
            );
        }
        setGameImg(gameImage.default);
      } catch (error) {
        console.error("Error loading game image:", error);
      }
    };

    loadGameImage();
  }, [code]);
  return (
    <Card fluid>
      <Card.Content>
        <Image floated="left" size="small" src={gameImg} />

        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Card.Header as={"h3"}>{name}</Card.Header>
            <Card.Description>{description}</Card.Description>
          </div>
        </div>
        <Button
          onClick={play}
          floated="right"
          color="black"
          style={{ marginTop: 8 }}
        >
          Play <Icon name="chevron right" />
        </Button>
      </Card.Content>
    </Card>
  );
};

export default GameCard;
