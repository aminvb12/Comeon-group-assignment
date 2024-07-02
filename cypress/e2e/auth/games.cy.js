describe("Games Test Suite", () => {
  beforeEach(() => {
    cy.login(Cypress.env("CYPRESS_USER"), Cypress.env("CYPRESS_PASS"));
    cy.initialInterceptContext();
    cy.visit("/games-view");

    cy.get('[data-test-id="categories-list"]')
      .should("exist")
      .children()
      .as("categoriesItemList");
  });
  /*****************/
  it("should have categories list", () => {
    cy.fixture("case1_1_B").then((_data) => {
      cy.get("@categoriesItemList")
        .its("length")
        .should("eq", _data.categories.length);
    });
  });

  /*******************/
  it("should be able to click on category and filter games by category click", () => {
    cy.fixture("case1_1_B").then((_data) => {
      cy.get("@categoriesItemList").last().click();

      cy.get('[data-test-id="games-list"]')
        .should("exist")
        .children()
        .as("gamesItemList")
        .its("length")
        .should("eq", _data.gamesFilterResultByCategory.length);

      cy.get("@gamesItemList")
        .first()
        .find(".header")
        .should("have.text", _data.gamesFilterResultByCategory[0].name);

      cy.get("@gamesItemList")
        .last()
        .find(".header")
        .should(
          "have.text",
          _data.gamesFilterResultByCategory[
            _data.gamesFilterResultByCategory.length - 1
          ].name
        );
    });
  });

  /*******************/
  it("should be able to search among games by name query", () => {
    cy.fixture("case1_1_B").then((_data) => {
      cy.get('[data-test-id="search-field"]').type("Warp Wreckers");
      cy.get('[data-test-id="games-list"]')
        .should("exist")
        .children()
        .as("gamesItemList")
        .its("length")
        .should("eq", _data.gamesSearchResultByName.length);

      cy.get("@gamesItemList")
        .first()
        .find(".header")
        .should("have.text", _data.gamesSearchResultByName[0].name);
    });
  });

  it("should be able to play a game", () => {
    cy.fixture("case1_1_B").then((_data) => {
      cy.get('[data-test-id="games-list"]')
        .should("exist")
        .children()
        .as("gamesItemList")
        .first()
        .find(".button")
        .click();

      cy.get('[data-test-id="modal"]')
        .should("exist")
        .as("gameModal")
        .find(".header")
        .should("have.text", _data.games[0].name);

      cy.get("@gameModal")
        .find(".content")
        .find("#game-launch")
        .find("iframe")
        .should("exist");
    });
  });
});
