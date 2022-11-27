import search from '../../pages/Search/search'


describe('register', () => {
    beforeEach(() => {
      cy.visit('https://magento.softwaretestingboard.com/')
    //   cy.get('.panel > .header > .authorization-link > a').click()
    //   cy.get('#email').type('proba@email.com')
    //   cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Sifra123###')
    //   cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
    //   cy.get(':nth-child(2) > .greet > .logged-in').should('contain', 'Welcome')
    })
    
    it('passes', () => {
        search.inputSearch('Zing Jump Rope')
        search.clickOnSearch()
        cy.get('.products > .item').click()
        cy.get('#product-addtocart-button > span').click()
        cy.get('.message-success > div').should('contain', 'Zing Jump Rope')


    })
  })