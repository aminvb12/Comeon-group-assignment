describe("Logout", () => {
  /*****************/
  it("should find signout button", () => {
    cy.login(Cypress.env("CYPRESS_USER"), Cypress.env("CYPRESS_PASS"));

    cy.initialInterceptContext();

    cy.intercept("POST", "**/logout", {
      statusCode: 200,
    }).as("logout");

    cy.visit("/games-view");
    cy.get("[data-test-id='logout-button']").as("signoutBtn").click();

    cy.location("pathname").should("eq", "/");
    cy.getLocalStorage("--cached-profile--").then((user) => {
      console.log(user);
      expect(user).to.equal(null);
    });
  });
});
