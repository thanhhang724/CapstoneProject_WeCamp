export const register = {
    TXT_FIRSTNAME: "input[formcontrolname='firstname']",
    TXT_LASTNAME: "input[formcontrolname='lastname']",
    TXT_USERNAME: "input[formcontrolname='username']",
    TXT_PASSWORD: "input[formcontrolname='password']",
    TXT_CONFIRMPASSWORD: "input[formcontrolname='confirmPassword']",
    RDO_GENDER: "mat-radio-group[formcontrolname='gender']",
    BTN_REGISTER: ".mat-button-wrapper",
    DIAL_LOGIN: ".docs-example-viewer-title-spacer h3",
  
    //First name
    typeFirstName(firstname) {
    cy.get(this.TXT_FIRSTNAME).type(firstname).should('have.value', firstname); 
    cy.get(this.TXT_FIRSTNAME).should('be.visible'); 
      return this;
    },
    //Last name 
    typeLastName(lastname) {
      cy.get(this.TXT_LASTNAME).type(lastname).should('have.value', lastname);
      cy.get(this.TXT_LASTNAME).should('be.visible');
      return this;
    },
    //Username
    typeUserName(username) {
      cy.get(this.TXT_USERNAME).type(username).should('have.value', username);
      cy.get(this.TXT_USERNAME).should('be.visible');
      return this;
    },
    //password
    typePassword(password) {
      cy.get(this.TXT_PASSWORD).type(password).should('have.value', password);
      cy.get(this.TXT_PASSWORD).should('be.visible');
      return this;
    },
    //confirmpassword
    typeConfirmPassword(confirmpassword) {
      cy.get(this.TXT_CONFIRMPASSWORD).type(confirmpassword).should('have.value', confirmpassword);
      cy.get(this.TXT_CONFIRMPASSWORD).should('be.visible');
      return this;
    },
    //gender
    selectGender(gender) {
      cy.get(this.RDO_GENDER).contains(gender).click().should('be.visible');;
      //cy.get(this.RDO_GENDER).contains(gender).should('exist').should('be.checked');
      return this;
    },
    clickRegister() {
      cy.get(this.BTN_REGISTER).contains('Register').should('be.visible').click({ force: true });
      return this;
    },
    isNavigateToLogin() {
      cy.url().should('include', '/login');
      cy.get(this.DIAL_LOGIN).should('contain', 'Login');
    },
  };
  