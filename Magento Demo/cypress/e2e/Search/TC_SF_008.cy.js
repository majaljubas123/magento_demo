import search from '../../pages/Search/search'


describe('register', () => {
    beforeEach(() => {
      cy.visit('https://magento.softwaretestingboard.com/')
      cy.get('.panel > .header > .authorization-link > a').click()
      cy.get('#email').type('proba@email.com')
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Sifra123###')
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()

    })
    
    it('passes', () => {
        search.inputSearch('Tank')
        search.clickOnSearch()


    })
  })