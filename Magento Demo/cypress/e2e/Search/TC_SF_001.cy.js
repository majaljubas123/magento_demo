
import search from '../../pages/Search/search'
import login from '../../pages/Login/login'

describe('register', () => {
    beforeEach(() => {
      cy.visit('https://magento.softwaretestingboard.com/')
    })
    
    it('passes', () => {
      login.clickSignIn()
      login.inputEmail('roni_cost@example.com')
      login.inputPassword('roni_cost3@example.com')
      login.clickOnLogin()
      search.inputSearch('Zing Jump Rope')
      search.clickOnSearch()
      
      cy.get('.product-item-link').should('contain', 'Zing Jump Rope')

    })
  })