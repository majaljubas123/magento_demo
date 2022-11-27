
import login from '../../pages/Login/login'

describe('register', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/')
  })
  
  it('passes', () => {

    login.clickSignIn()
    login.inputEmail('du@adaktar.com')
    login.inputPassword('Sifra123###')
    login.clickOnLogin()

    cy.get(':nth-child(2) > .greet > .logged-in').should('contain', 'Du Adaktar')

  })
})