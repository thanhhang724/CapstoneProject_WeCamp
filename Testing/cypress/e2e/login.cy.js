import { login } from '../pages/login';

describe('User register successfully', () => {
  beforeEach(() => {
    cy.fixture("login.json").as("login");
    cy.visit('/login');
  });
  it.only("User registers successfully with valid data", () => {
    cy.get("@login").then((data) => {
      login
      .typeUsername(data[0].username)
      .typePassword(data[0].password)
      .clickLogin()
      .isNavigateToHomepage()
    })
});
})
describe('User register usuccessfully', () => {
  beforeEach(() => {
    cy.fixture("login.json").as("login");
    cy.visit('/login');
  });
it.only("User registers unsuccessfully with missing password and username", () => {
  cy.get("@login").then((data) => {
    cy.get("input[formcontrolname='username']").click()
    cy.get("input[formcontrolname='password']").click()
    login
    .clickLogin()
    .isNavigateToHomepage()
  })
  cy.get('mat-error').should('be.visible').contains('Username is required');
  cy.get('mat-error').should('be.visible').contains('Password is required');
});

it.only("User registers unsuccessfully with missing password", () => {
  cy.get("@login").then((data) => {
    cy.get("input[formcontrolname='password']").click()
    login
    .typeUsername(data[1].username)
    .clickLogin()
    .isNavigateToHomepage()
  })
  cy.get('mat-error').should('be.visible').contains('Password is required');
});
it.only("User registers unsuccessfully with missing username", () => {
  cy.get("@login").then((data) => {
    cy.get("input[formcontrolname='username']").click()
    login
    .typePassword(data[2].password)
    .clickLogin()
    .isNavigateToHomepage()
  })
  cy.get('mat-error').should('be.visible').contains('Username is required');
});
it.only("User registers unsuccessfully with wrong password", () => {
  cy.get("@login").then((data) => {
    login
    .typeUsername(data[3].username)
    .typePassword(data[3].password)
    .clickLogin()
    .isNavigateToHomepage()
  })
  cy.get('mat-error').should('be.visible').contains('Username or Password is incorrect.');
});

it.only("User registers unsuccessfully with wrong username", () => {
  cy.get("@login").then((data) => {
    login
    .typeUsername(data[4].username)
    .typePassword(data[4].password)
    .clickLogin()
    .isNavigateToHomepage()
  })
  cy.get('mat-error').should('be.visible').contains('Username or Password is incorrect.');
});
})




