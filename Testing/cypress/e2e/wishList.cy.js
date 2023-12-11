describe('my orders', () => {
    beforeEach(() => {
        cy.visit('/login');
        cy.get('[formcontrolname="username"]').type('vnphuong');
        cy.get('[formcontrolname="password"]').type('QQaazzz123');
        cy.get('button.mat-raised-button').contains('Login').click();
      
    });
    it("Check for a notification or message when the wishlist is empty", () => {
        cy.wait(2000)
        cy.get('span.mat-button-wrapper mat-icon[matbadgecolor="warn"]').first().click();
        cy.get('.mat-card-title').should('be.visible').and('contain', 'Your wishlist is empty');
        cy.get('button.mat-raised-button').should('be.visible').contains('Continue shopping')

    });

    it("Verify that user can navigate to the home page ", () => {
        cy.get('span.mat-button-wrapper mat-icon[matbadgecolor="warn"]').first().click();
        cy.get('button.mat-raised-button').should('be.visible').contains('Continue shopping').click();
        cy.url().should('include', '');
      });

    it("Get a list of wishlist.", () => {
        cy.get('span.material-icons.favourite-unselected').first().click();   
        cy.wait(2000) 
        cy.get('span.mat-button-wrapper mat-icon[matbadgecolor="warn"]').first().click();
        cy.wait(2000) 
        cy.get('mat-card-content.mat-card-content table.table').should('exist')

    });
    it("Test removal of a product from the wishlist", () => {
        cy.get('span.material-icons.favourite-unselected').first().click();   
        cy.wait(2000) 
        cy.get('span.mat-button-wrapper mat-icon[matbadgecolor="warn"]').first().click();
        cy.wait(2000) 
        cy.get('button.mat-raised-button').contains('Remove from Wishlist').click();
        cy.wait(2000) 
        cy.get('.mat-card-title').should('be.visible').and('contain', 'Your wishlist is empty');

    });

    it("Verify adding items to the cart from the wishlist", () => {
        cy.get('span.material-icons.favourite-unselected').first().click();   
        cy.wait(2000) 
        cy.get('span.mat-button-wrapper mat-icon[matbadgecolor="warn"]').first().click();
        cy.wait(2000) 
        cy.get('button.mat-raised-button').contains('Add to Cart').click();
        cy.wait(2000) 
        cy.get('span.mat-button-wrapper mat-icon[matbadgecolor="warn"]:contains("shopping_cart")').click();
        cy.get('mat-card-content.mat-card-content table.table').should('exist')

    });

   
    
  
    
    
})