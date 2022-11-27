import search from '../../pages/Search/search'


describe('register', () => {
    beforeEach(() => {
      cy.visit('https://magento.softwaretestingboard.com/')
    //   cy.get('.panel > .header > .authorization-link > a').click()
    //   cy.get('#email').type('proba@email.com')
    //   cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Sifra123###')
    //   cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
    //   cy.get(':nth-child(2) > .greet > .logged-in').should('contain', 'Welcome')
    search.inputSearch('Zing Jump Rope')
    search.clickOnSearch()
    cy.get('.action.tocompare').should('be.hidden').invoke('show').click({force: true});
    cy.get('.item > .action').should('contain', 'Compare')
    })
    
    it('passes', () => {


    })
  })