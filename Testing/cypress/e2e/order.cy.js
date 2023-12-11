describe('my orders', () => {
  beforeEach(() => {
    cy.visit('/myorders');

  });

  it("Verify that user can get list of orders.", () => {
    cy.get('[formcontrolname="username"]').type('vnphuong');
    cy.get('[formcontrolname="password"]').type('Qqaazzz123');
    cy.get('button.mat-raised-button').contains('Login').click();
    cy.wait(6000)
    cy.get('.example-element-detail').should('exist');

  });

  it("Verify that user can navigate to the home page ", () => {
    cy.get('[formcontrolname="username"]').type('vnp');
    cy.get('[formcontrolname="password"]').type('vnp301');
    cy.get('button.mat-raised-button').contains('Login').click();

    cy.wait(2000)
    cy.get('button.mat-raised-button').should('be.visible').contains('Start shopping').click();
    cy.url().should('include', '');
  });



  it("Get the order list of users who have no orders.", () => {
    cy.get('[formcontrolname="username"]').type('vnp');
    cy.get('[formcontrolname="password"]').type('vnp301');
    cy.get('button.mat-raised-button').contains('Login').click();
    cy.get('.mat-card-title').should('be.visible').and('contain', 'Looks like you have not placed any orders !!!');
    cy.get('button.mat-raised-button').should('be.visible').contains('Start shopping')
  });

})