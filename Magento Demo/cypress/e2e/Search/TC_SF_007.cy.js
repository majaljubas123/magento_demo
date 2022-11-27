import search from '../../pages/Search/search'
import login from '../../pages/Login/login'

describe('register', () => {
    beforeEach(() => {
      cy.visit('https://magento.softwaretestingboard.com/')

    })
    
    it('passes', () => {

        
      search.inputSearch('Zing Jump Rope')
      search.clickOnSearch()

      cy.get('.action.tocompare').should('be.hidden').invoke('show').click({force: true});
      cy.get('.item > .action').should('contain', 'Compare')
    })
  })