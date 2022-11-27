import register from '../../pages/Register/register'

describe('register', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/')
  })
  
  it('passes', () => {

    register.createAccount()
    register.inputFirstName('   ')
    register.inputLastName('   ')
    register.inputEmail('   ')
    register.inputPassword('   ')
    register.inputConfirmPassword('   ')
    register.validateAccount()

    cy.get('#firstname-error').should('have.text', 'This is a required field.')
    cy.get('#lastname-error').should('have.text', 'This is a required field.')
    cy.get('#email_address-error').should('have.text', 'This is a required field.')
    cy.get('#password-error').should('have.text', 'This is a required field.')
    cy.get('#password-confirmation-error').should('have.text', 'This is a required field.')

  })
})