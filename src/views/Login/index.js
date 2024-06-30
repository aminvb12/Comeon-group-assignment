import React, { useState } from "react";
import { Message } from "semantic-ui-react";

import { withNavigate } from "../../hoc/navigation";
import { loginApiService } from "../../service/auth";
import { useUserProfile } from "../../context/userProfileContext";

import { assets } from "../../assets";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const [formError, setFormError] = useState("");

  const { setUserProfile } = useUserProfile();

  const findUserAvatar = (username) => {
    const name = username.toLowerCase();

    if (name.includes("eric")) return assets.EricAvatar;
    else if (name.includes("rebecka")) return assets.RebeckaAvatar;
    else return assets.StoffeAvatar;
  };

  const handleValidation = () => {
    let formIsValid = true;
    let errors = {};

    if (!username) {
      formIsValid = false;
      errors["username"] = "Username cannot be empty";
    }

    if (!password) {
      formIsValid = false;
      errors["password"] = "Password cannot be empty";
    }

    setErrors(errors);
    return formIsValid;
  };

  const doLogin = async () => {
    try {
      const user = await loginApiService(username, password);
      setUserProfile({
        username,
        name: user.player.name,
        avatar: findUserAvatar(user.player.name),
        event: user.player.event,
      });
      props.navigate("games");
    } catch (error) {
      setFormError(error.error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (handleValidation()) {
      doLogin();
    }
  };
  return (
    <div className="login" style={{ display: "block" }}>
      {formError && (
        <div className="ui grid centered">
          <Message error style={{ maxWidth: 450 }}>
            <Message.Header>Error</Message.Header>
            <p>{formError}</p>
          </Message>
        </div>
      )}

      <div className="ui grid centered">
        <form onSubmit={handleSubmit}>
          <div className="fields">
            <div
              className={`required field ${errors["username"] ? "error" : ""}`}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div className="ui icon input">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <i className="user icon"></i>
              </div>
              {errors["username"] && (
                <div className="ui pointing red basic label">
                  {errors["username"]}
                </div>
              )}
            </div>
            <div
              className={`required field ${errors["password"] ? "error" : ""}`}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div className="ui icon input">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i className="lock icon"></i>
              </div>
              {errors["password"] && (
                <div className="ui pointing red basic label">
                  {errors["password"]}
                </div>
              )}
            </div>
            <div className="field">
              <div className="ui icon input">
                <input type="submit" value="Login" />
                <i className="right chevron icon"></i>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default withNavigate(Login);
