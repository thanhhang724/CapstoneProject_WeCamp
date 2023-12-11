import { login, register } from '../pages/register';

describe('User register successfully', () => {
  beforeEach(() => {
    cy.fixture("register.json").as("register");
    cy.visit('/register');
  });
  /*it.only("User registers successfully with valid data", () => {
    cy.get("@register").then((data) => {
      register
      .typeFirstName(data[0].firstname)
      .typeLastName(data[0].lastname)
      .typeUserName(data[0].username)
      .typePassword(data[0].password)
      .typeConfirmPassword(data[0].confirmpassword)
      .selectGender(data[0].gender)
      .clickRegister()
      .isNavigateToLogin()
    })
  })
})*/

   it.only("User registers unsuccessfully with an existing username", () => {
        cy.get("@register").then((data) => {
          register
          .typeFirstName(data[1].firstname)
          .typeLastName(data[1].lastname)
          .typeUserName(data[1].username)
          .typePassword(data[1].password)
          .typeConfirmPassword(data[1].confirmpassword)
          .selectGender(data[1].gender)
          .clickRegister()
        })
        cy.get('mat-error').should('be.visible').contains('User Name is not available');
});
it.only("User registers unsuccessfully with missing field", () => {
    cy.get("@register").then((data) => {
      register
      .typeFirstName(data[2].firstname)
      .typeLastName(data[2].lastname)
      .typePassword(data[2].password)
      .typeConfirmPassword(data[2].confirmpassword)
      .selectGender(data[2].gender)
      .clickRegister()
    })
    cy.get('[formcontrolname="username"]').should('have.attr', 'aria-invalid', 'true');
});
it.only("User registers unsuccessfully with password less then 8 characters", () => {
    cy.get("@register").then((data) => {
      register
      .typeFirstName(data[3].firstname)
      .typeLastName(data[3].lastname)
      .typeUserName(data[3].username)
      .typePassword(data[3].password)
      .typeConfirmPassword(data[3].confirmpassword)
      .selectGender(data[3].gender)
      .clickRegister()
    })
    cy.get('mat-error').should('be.visible').contains(' Password should have minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number ');
});
it.only("Confirmpassword not match passwword", () => {
    cy.get("@register").then((data) => {
      register
      .typeFirstName(data[4].firstname)
      .typeLastName(data[4].lastname)
      .typeUserName(data[4].username)
      .typePassword(data[4].password)
      .typeConfirmPassword(data[4].confirmpassword)
      .selectGender(data[4].gender)
      .clickRegister()
    })
    cy.get('mat-error').should('be.visible').contains('Password do not match');
});
it.only("Password does not contain lowercase", () => {
    cy.get("@register").then((data) => {
      register
      .typeFirstName(data[5].firstname)
      .typeLastName(data[5].lastname)
      .typeUserName(data[5].username)
      .typePassword(data[5].password)
      .typeConfirmPassword(data[5].confirmpassword)
      .selectGender(data[5].gender)
      .clickRegister()
    })
    cy.get('mat-error').should('be.visible').contains(' Password should have minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number ');
});
it.only("Password does not contain uppercase", () => {
    cy.get("@register").then((data) => {
      register
      .typeFirstName(data[6].firstname)
      .typeLastName(data[6].lastname)
      .typeUserName(data[6].username)
      .typePassword(data[6].password)
      .typeConfirmPassword(data[6].confirmpassword)
      .selectGender(data[6].gender)
      .clickRegister()
    })
    cy.get('mat-error').should('be.visible').contains(' Password should have minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number ');
});
it.only("Password contain all number", () => {
    cy.get("@register").then((data) => {
      register
      .typeFirstName(data[7].firstname)
      .typeLastName(data[7].lastname)
      .typeUserName(data[7].username)
      .typePassword(data[7].password)
      .typeConfirmPassword(data[7].confirmpassword)
      .selectGender(data[7].gender)
      .clickRegister()
    })
    cy.get('mat-error').should('be.visible').contains(' Password should have minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number ');
});
it.only("Password does not contain number", () => {
  cy.get("@register").then((data) => {
    register
    .typeFirstName(data[8].firstname)
    .typeLastName(data[8].lastname)
    .typeUserName(data[8].username)
    .typePassword(data[8].password)
    .typeConfirmPassword(data[8].confirmpassword)
    .selectGender(data[8].gender)
    .clickRegister()
  })
  cy.get('mat-error').should('be.visible').contains(' Password should have minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number ');
});
})


