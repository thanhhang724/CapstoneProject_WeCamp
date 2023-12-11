export const login = {
    TXT_USERNAME: "input[formcontrolname='username']",
    TXT_PASSWORD: "input[formcontrolname='password']",
    BTB_LOGIN: "button.mat-raised-button",
    MENU: "button.mat-menu-trigger",
    EYE_ICON:".mat-icon.notranslate.material-icons.mat-icon-no-color.ng-tns-c50-2",

//username
typeUsername(username){
    cy.get(this.TXT_USERNAME).type(username).should('have.value', username)
    cy.get(this.TXT_USERNAME).should('be.visible'); 
    return this; 
},
//password
typePassword(password){
    cy.get(this.TXT_PASSWORD).type(password).should('have.value', password).should('be.visible'); 
    return this;
},

//sumbit
clickLogin(){
    cy.get(this.BTB_LOGIN).contains('Login').click();
    return this;
},
isNavigateToHomepage (){
    cy.url().should('include', '/')
},


}
