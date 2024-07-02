// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (username, password) => {
  //starts a new session with the given username and password
  //sends a POST request to the login endpoint with the given email and password
  cy.request({
    method: "POST",
    url: `http://localhost:3001/login`,
    body: {
      username,
      password,
    },
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property("player");
    expect(response.body).to.have.property("status");

    window.localStorage.setItem(
      "--cached-profile--",
      JSON.stringify(response.body)
    );
  });
});

Cypress.Commands.add("initialInterceptContext", () => {
  //starts a new session with the given username and password
  //sends a POST request to the login endpoint with the given email and password

  cy.fixture("case1_1_B").then((data) => {
    cy.intercept("GET", "**/games", {
      statusCode: 200,
      body: data.games,
    });

    cy.intercept("GET", "**/categories", {
      statusCode: 200,
      body: data.categories,
    });
  });
});

//cypress command for localstorage assertion
Cypress.Commands.add("getLocalStorage", (key) => {
  cy.window().then((window) => {
    return JSON.parse(window.localStorage.getItem(key));
  });
});

//cypress command for remove variable inside localstorage
Cypress.Commands.add("removeFromLocalstorage", (key) => {
  cy.window().then((window) => {
    window.localStorage.removeItem(key);
  });
});

Cypress.Commands.add("sleep", (milliseconds) => {
  return new Cypress.Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
});
