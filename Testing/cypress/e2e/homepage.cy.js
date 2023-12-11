import { homepage } from '../pages/homepage';

describe('User searches a book', () => {
  beforeEach(() => {
    cy.fixture("homepage.json").as("homepage");
    cy.visit('/');
  });
  it.only("Search a valid book title", () => {
    cy.get("@homepage").then((data) => {
        homepage
        .searchBook(data[0].bookname)
    });
  })
    it.only("Search with valid author name", () => {
      cy.get("@homepage").then((data) => {
          homepage
          .searchAuthor(data[1].author)
      }); 
    });
   it.only("Search with category filter", () => {
      cy.get("@homepage").then((data) => {
          homepage
          .selectCatergory(data[2].category)
      }); 
    });
    it.only("Search with invalid book title", () => {
      cy.get("@homepage").then((data) => {
          homepage
          .typeInValidBook(data[3].bookname)
      }); 
    });
    it.only("Navigate to book details", () => {
      cy.get("@homepage").then((data) => {
          homepage
          .isNavigatetoBookDetail()
      }); 
    })

})
