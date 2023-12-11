import { checkOut } from "../pages/checkOut";

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/checkout');
    cy.fixture('testData.json').as('testData')
    cy.get('[formcontrolname="username"]').type('vnphuong');
    cy.get('[formcontrolname="password"]').type('QQaazzz123');
    cy.get('button.mat-raised-button').contains('Login').click();
  });

  it("Test the normal checkout process with items in the cart.", () => {
    cy.get('@testData').then((users) => {
      checkOut
        .typeName(users[4].name)
        .typeAddress1(users[4].addressLine1)
        .typeAddress2(users[4].addressLine2)
        .typePin(users[4].pincode)
        .typeState(users[4].state);
    })
    cy.get('button.mat-raised-button').contains('Place Order').click();


    //assertion
    cy.url().should('include', '/myorders'); // Check if the URL contains a specific path
    cy.get('h2').should('contain', 'My Orders');

  });

  it("Test the checkout process with an empty cart.", () => {
    cy.visit('/shopping-cart')
    cy.get('.mat-card-title').should('be.visible').and('contain', 'Shopping cart is empty');
  });

  it("Test the Checkout process with item's quantity 0", () => {
    cy.visit('');
    cy.get('button.mat-raised-button').contains('Add to Cart ').click();
    cy.wait(2000)
    cy.get('span.mat-button-wrapper mat-icon[matbadgecolor="warn"]:contains("shopping_cart")').click();
    cy.get('mat-icon.notranslate.material-icons.mat-icon-no-color[data-mat-icon-type="font"]:contains("add_circle")').click();
    cy.wait(2000)
    cy.get('mat-icon.notranslate.material-icons.mat-icon-no-color[data-mat-icon-type="font"]:contains("add_circle")').click();
    cy.get('mat-icon.notranslate.material-icons.mat-icon-no-color[data-mat-icon-type="font"]:contains("remove_circle")').click();
    cy.wait(2000)
    cy.get('mat-icon[data-mat-icon-type="font"]').contains('remove_circle').should('be.disabled');
    

    


    
    // cy.get('.mat-card-title').should('be.visible').and('contain', 'Shopping cart is empty');
  });



  const userInfor = require('../fixtures/testData.json');
  const invalidUserName = userInfor[0].invalidName;

  invalidUserName.forEach(invalidData => {
    it("Invalid Input for Name" + JSON.stringify(invalidData), () => {
      // Access the 'name' property from invalidData
      const userName = invalidData.name;

      checkOut
        .typeName(userName)
        .typeAddress1(userInfor[0].addressLine1)
        .typeAddress2(userInfor[0].addressLine2)
        .typePin(userInfor[0].pincode)
        .typeState(userInfor[0].state);

      //assertion
      cy.get('.mat-error[role="alert"]').should('be.visible').and('contain', 'Name is required');

    });

  });

  it("Enter an address with excessive white spaces at the beginning, end, or within the text.", () => {

    checkOut
      .typeName("      ")
      .typeAddress1(userInfor[0].addressLine1)
      .typeAddress2(userInfor[0].addressLine2)
      .typePin(userInfor[0].pincode)
      .typeState(userInfor[0].state);

    //assertion
    cy.get('.mat-error[role="alert"]').should('be.visible').and('contain', 'Name is required');
  });

  it("Input an empty value for the name field.", () => {
    cy.get('input[formcontrolname="name"]').click()
    checkOut

      .typeAddress1(userInfor[0].addressLine1)
      .typeAddress2(userInfor[0].addressLine2)
      .typePin(userInfor[0].pincode)
      .typeState(userInfor[0].state);

    //assertion
    cy.get('.mat-error[role="alert"]').should('be.visible').and('contain', 'Name is required');
  });
  ///////////////////////////////////////////////////////////////////////////////////////
  const invalidUserAddress = userInfor[1].invalidAddressLine;

  invalidUserAddress.forEach(invalidData => {
    it("Invalid Input for Address" + JSON.stringify(invalidData), () => {
      // Access the 'addressLine1' property from invalidData
      const userAddress = invalidData;

      checkOut
        .typeName(userInfor[1].name)
        .typeAddress1(userAddress.addressLine1)
        .typeAddress2(userAddress.addressLine2)
        .typePin(userInfor[1].pincode)
        .typeState(userInfor[1].state);

      // assertion
      cy.get('.mat-error[role="alert"]').should('be.visible').and('contain', 'Address is required');
    });
  });

  it("Enter an address with excessive white spaces at the beginning, end, or within the text.", () => {

    checkOut
      .typeName(userInfor[1].name)
      .typeAddress1('     ')
      .typeAddress2('     ')
      .typePin(userInfor[1].pincode)
      .typeState(userInfor[1].state);

    //assertion
    cy.get('.mat-error[role="alert"]').should('be.visible').and('contain', 'Address is required');
  });

  it("Input an empty value for the Address field.", () => {
    cy.get('input[formcontrolname="addressLine1"]').click()
    cy.get('input[formcontrolname="addressLine2"]').click()

    checkOut
      .typeName(userInfor[1].name)
      .typePin(userInfor[1].pincode)
      .typeState(userInfor[1].state);

    //assertion
    cy.get('.mat-error[role="alert"]').should('be.visible').and('contain', 'Address is required');
  });

  ///////////////////////////////////////////////////////////////////////////////////////
  const invalidUserPincode = userInfor[2].invalidPincode;

  invalidUserPincode.forEach(invalidData => {
    it("Invalid Input for Pincode" + JSON.stringify(invalidData), () => {
      // Access the 'addressLine1' property from invalidData
      const userPincode = invalidData;

      checkOut
        .typeName(userInfor[2].name)
        .typeAddress1(userInfor[2].addressLine1)
        .typeAddress2(userInfor[2].addressLine2)
        .typePin(userPincode.pincode)
        .typeState(userInfor[2].state);

      // assertion
      cy.get('.mat-error[role="alert"]').should('be.visible').and('contain', 'Pincode must have 6 digits only and cannot start with 0');
    });
  });

  it("Input an empty value for the Pincode field.", () => {
    cy.get('input[formcontrolname="pincode"]').click()

    checkOut
      .typeName(userInfor[2].name)
      .typeAddress1(userInfor[2].addressLine1)
      .typeAddress2(userInfor[2].addressLine2)
      .typeState(userInfor[2].state);

    //assertion
    cy.get('.mat-error[role="alert"]').should('be.visible').and('contain', 'Pincode is required');
  });

  ///////////////////////////////////////////////////////////////////////////////////////
  const invalidUserState = userInfor[3].invalidState;

  invalidUserState.forEach(invalidData => {
    it("Invalid Input for State" + JSON.stringify(invalidData), () => {
      // Access the 'addressLine1' property from invalidData
      const userState = invalidData;

      checkOut
        .typeName(userInfor[3].name)
        .typeAddress1(userInfor[3].addressLine1)
        .typeAddress2(userInfor[3].addressLine2)
        .typePin(userInfor[3].pincode)
        .typeState(userState.state);

      // assertion
      cy.get('.mat-error[role="alert"]').should('be.visible').and('contain', 'State is required');
    });
  });

  it("Enter an address with excessive white spaces at the beginning, end, or within the text.", () => {
    checkOut
      .typeName(userInfor[3].name)
      .typeAddress1(userInfor[3].addressLine1)
      .typeAddress2(userInfor[3].addressLine2)
      .typePin(userInfor[3].pincode)
      .typeState("    ");


    //assertion
    cy.get('.mat-error[role="alert"]').should('be.visible').and('contain', 'State is required');
  });

  it("Input an empty value for the State field.", () => {
    cy.get('input[formcontrolname="state"]').click()

    checkOut
      .typeName(userInfor[3].name)
      .typeAddress1(userInfor[3].addressLine1)
      .typeAddress2(userInfor[3].addressLine2)
      .typePin(userInfor[3].pincode)

    //assertion
    cy.get('.mat-error[role="alert"]').should('be.visible').and('contain', 'State is required');
  });


});
