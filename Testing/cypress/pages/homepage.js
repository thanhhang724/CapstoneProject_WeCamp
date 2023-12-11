export const homepage ={
    TXT_SEARCH: "[placeholder='Search books or authors']",
    TB_BOOK: ".mat-card-content",
    BOOK_TITLE:"div[class='card-title'] a strong",
    BOOK_DETAILAUTHOR: "tr:nth-child(2) td:nth-child(2)",
    MENU_FILTER: ".mat-nav-list",
    BOOK_DETAILCATE:"tr:nth-child(3) td:nth-child(2)",
    MESSAGE: ".col.mb-3",
    BOOKDETAIL:".docs-example-viewer-wrapper",
   
    searchBook(bookname) {
        cy.get(this.TXT_SEARCH).type(bookname).type('{enter}');
        cy.get(this.TB_BOOK).should('be.visible').contains(bookname)
    },
    searchAuthor(author) {
        cy.get(this.TXT_SEARCH).type(author).type('{enter}');  
        cy.get(this.BOOK_TITLE).click({force:true});
        cy.get(this.BOOK_DETAILAUTHOR).should('be.visible').contains(author);
    },
    selectCatergory(catergory){
        cy.get(this.MENU_FILTER).contains(catergory).click();
        cy.get(this.BOOK_TITLE).first().click();
        cy.get(this.BOOK_DETAILCATE).should('be.visible').contains(catergory);
    },
    typeInValidBook(bookname) {
        cy.get(this.TXT_SEARCH).type(bookname).type('{enter}');
        cy.get(this.MESSAGE).should('be.visible').contains("No books found.")
    },
    isNavigatetoBookDetail(){
        cy.get(this.BOOK_TITLE).first().click();
        cy.url().should('include', '/books/details')
        cy.get(this.BOOKDETAIL).should('be.visible').contains('Book Details')
    }
    
}