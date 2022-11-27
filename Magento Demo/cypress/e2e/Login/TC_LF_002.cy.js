
import login from '../../pages/Login/login'

describe('register', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/')
  })
  
  it('passes', () => {

    login.clickSignIn()
    login.inputEmail('du@adaktar.com')
    login.inputPassword('Fake123###')
    login.clickOnLogin()

    cy.get('.message-error > div').should('contain', 'incorrect')



  })
})