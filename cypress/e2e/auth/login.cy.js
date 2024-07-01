describe("Login Page", () => {
  beforeEach(() => {
    //visit the main page (in this example is login page)
    cy.visit("/");

    //get the username and password fields and store them in variables.
    cy.get("[data-test-id='username-field']").as("username");
    cy.get("[data-test-id='password-field']").as("password");
    cy.get("[data-test-id='sign-in-btn']").as("signin");
  });

  /*****************/
  it("should not login with empty username/password", () => {
    //intercepts

    cy.get("@signin").click();

    cy.get("[data-test-id='username-required']").should("exist");
    cy.get("[data-test-id='password-required']").should("exist");
  });

  /*****************/
  it("should not login with invalid credentials", () => {
    cy.fixture("login/case1_1_A").then((_authResponseBody) => {
      //intercepts

      cy.intercept("POST", "**/login", {
        statusCode: 400,
        body: _authResponseBody,
      }).as("getLogin");

      //out test
      cy.get("@username").clear().type("invalid");
      cy.get("@password").clear().type("0000000");
      cy.get("@signin").click();

      cy.wait("@getLogin", { timeout: 60000 });

      cy.get("[data-test-id='error-prompt']").should("exist");
      cy.location("pathname").should("eq", "/");
    });
  });

  it("should login successfully with valid credentials", () => {
    //intercepts

    cy.fixture("login/case1_1_B").then((data) => {
      cy.intercept("POST", "**/login", {
        statusCode: 200,
        body: data.authResponse,
      }).as("getLogin");

      cy.intercept("GET", "**/games", {
        statusCode: 200,
        body: data.games,
      });

      cy.intercept("GET", "**/categories", {
        statusCode: 200,
        body: data.categories,
      });

      //out test
      cy.get("@username").clear().type(Cypress.env("CYPRESS_USER"));
      cy.get("@password").clear().type(Cypress.env("CYPRESS_PASS"));
      cy.get("@signin").click();

      cy.wait("@getLogin", { timeout: 60000 });

      cy.location("pathname").should("eq", "/games");

      cy.get('[data-test-id="fullname"] strong').should(
        "have.text",
        data.authResponse.player.name
      );
    });
  });
});
