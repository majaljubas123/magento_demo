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

      search.inputSearch('Snowboard')
      search.clickOnSearch()
      
      cy.get('.column > .message > div').should('contain', 'Your search returned no results.')


    })
  })