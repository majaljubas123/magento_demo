import register from '../../pages/Register/register'

describe('register', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/')
  })
  
  it('passes', () => {

    register.createAccount()
    register.inputFirstName('Du')
    register.inputLastName('Adaktar')
    register.inputEmail('du@adaktar.com')
    register.inputPassword('Sifra123###')
    register.inputConfirmPassword('Fake123###')
    register.validateAccount()

    cy.get('#password-confirmation-error').should('have.text', 'Please enter the same value again.')
  })
})

