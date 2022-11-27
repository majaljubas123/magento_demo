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
      
      cy.get('.product-image-photo').click()
      cy.get('.base').should('contain', 'Zing Jump Rope')
      cy.go(-1)
      cy.get(':nth-child(1) > .modes > #mode-list').click()
      cy.get('.product-image-photo').click()
      cy.get('.base').should('contain', 'Zing Jump Rope')

    })
  })