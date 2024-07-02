import React from "react";
import SearchBar from "../components/SearchBar";
import {
  Image,
  Button,
  Icon,
  Grid,
  GridColumn,
  GridRow,
} from "semantic-ui-react";

const UserProfile = ({ user, logout, search }) => {
  const fullName = React.useMemo(() => user.name, [user]);
  const event = React.useMemo(() => user.event, [user]);
  const avatarPath = React.useMemo(() => user.avatar, [user]);

  return (
    <div style={{ padding: "20px" }}>
      <Grid columns={2}>
        <GridRow>
          <GridColumn width={12}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image src={avatarPath} avatar />

              <span data-test-id="fullname" style={{ paddingLeft: 8 }}>
                <strong>{fullName}</strong>
                <br />
                {event}
              </span>
            </div>

            <Button
              floated="left"
              color="black"
              style={{ marginTop: 24 }}
              onClick={logout}
              data-test-id="logout-button"
            >
              <Icon name="log out" />
              Log Out
            </Button>
          </GridColumn>

          <GridColumn width={4}>
            <SearchBar search={search} />
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
};

export default React.memo(UserProfile);
