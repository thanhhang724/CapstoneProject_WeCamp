export const checkOut ={
    TXT_NAME: 'input[formcontrolname="name"]',
    TXT_ADD1: 'input[formcontrolname="addressLine1"]',
    TXT_ADD2: 'input[formcontrolname="addressLine2"]',
    TXT_PIN: 'input[formcontrolname="pincode"]',
    TXT_STATE: 'input[formcontrolname="state"]',

    typeName(userName){
        cy.get(this.TXT_NAME).type(userName);
        return this;
    },

    typeAddress1(userAddress1){
        cy.get(this.TXT_ADD1).type(userAddress1);
        return this;
    },

    typeAddress2(userAddress2){
        cy.get(this.TXT_ADD2).type(userAddress2);
        return this;
    },


    typePin(userPincode){
        cy.get(this.TXT_PIN).type(userPincode);
        return this;
    },

    typeState(userState){
        cy.get(this.TXT_STATE).type(userState);
        return this;
    }
};


