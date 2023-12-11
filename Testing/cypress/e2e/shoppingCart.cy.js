describe('my orders', () => {
    beforeEach(() => {
        cy.visit('');
       

    });
    it("Verify that the quantity of items in the cart can be updated", () => {
        cy.get('button.mat-raised-button').contains('Add to Cart ').click();
        cy.wait(2000)
        cy.get('span.mat-button-wrapper mat-icon[matbadgecolor="warn"]:contains("shopping_cart")').click();
        cy.get('mat-icon.notranslate.material-icons.mat-icon-no-color[data-mat-icon-type="font"]:contains("add_circle")').click();
        cy.wait(2000)
        cy.get('div.div-quantity').should('contain',2)

        cy.get('mat-icon.notranslate.material-icons.mat-icon-no-color[data-mat-icon-type="font"]:contains("remove")').click();
        cy.get('div.div-quantity').should('contain',1)

    });

    it("Verify that items can be added to the shopping cart", () => {

        cy.get('button.mat-raised-button').contains('Add to Cart ').click();
        cy.wait(2000)
        cy.get('span.mat-button-wrapper mat-icon[matbadgecolor="warn"]:contains("shopping_cart")').click();
        cy.get('mat-card-content.mat-card-content table.table').should('exist')

    });
    it("Verify that items can be removed to the shopping cart", () => {

        cy.get('button.mat-raised-button').contains('Add to Cart ').click();
        cy.wait(2000)
        cy.get('span.mat-button-wrapper mat-icon[matbadgecolor="warn"]:contains("shopping_cart")').click();
        cy.get('mat-card-content.mat-card-content table.table').should('exist')
        cy.wait(2000)
        cy.get('button.mat-icon-button[color="accent"][mattooltip="Delete item"]').click();
        cy.get('.mat-card-title').should('be.visible').and('contain', 'Shopping cart is empty');
        cy.get('button.mat-raised-button').should('be.visible').contains('Continue shopping')

    });

    it("Verify that all items can be remove from the shopping cart", () => {

        cy.get('button.mat-raised-button').contains('Add to Cart ').click();
        cy.wait(2000)
        cy.get('span.mat-button-wrapper mat-icon[matbadgecolor="warn"]:contains("shopping_cart")').click();
        cy.get('mat-card-content.mat-card-content table.table').should('exist')
        cy.wait(2000)

        cy.get('button.mat-raised-button.mat-button-base').contains('Clear cart').click();

        cy.get('.mat-card-title').should('be.visible').and('contain', 'Shopping cart is empty');
        cy.get('button.mat-raised-button').should('be.visible').contains('Continue shopping')

    });

    it("Verify that user can navigate to the home page ", () => {
        cy.visit('/login')
        cy.get('[formcontrolname="username"]').type('vnp');
        cy.get('[formcontrolname="password"]').type('vnp301');
        cy.get('button.mat-raised-button').contains('Login').click();
        cy.get('span.mat-button-wrapper mat-icon[matbadgecolor="warn"]:contains("shopping_cart")').click();

        cy.get('button.mat-raised-button').should('be.visible').contains('Continue shopping').click();
        cy.url().should('include', '');
      });

    it("Verify that the continue shopping button and message display when user doesn't have any item in cart", () => {
        cy.get('button.mat-raised-button').contains('Add to Cart ').click();
        cy.wait(2000)
        cy.get('span.mat-button-wrapper mat-icon[matbadgecolor="warn"]:contains("shopping_cart")').click();
        cy.get('button.mat-raised-button').contains('Clear cart').click();
        cy.get('span.mat-button-wrapper mat-icon[matbadgecolor="warn"]:contains("shopping_cart")').click();
        cy.get('.mat-card-title').should('be.visible').and('contain', 'Shopping cart is empty');
        cy.get('button.mat-raised-button').should('be.visible').contains('Continue shopping')
    });
   

})