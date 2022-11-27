
import login from '../../pages/Login/login'

describe('register', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/')
  })
  
  it('passes', () => {

    login.clickSignIn()

    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > .secondary > .action > span').click()
    cy.get('.base').should('contain', 'Forgot Your Password?')

  })
})