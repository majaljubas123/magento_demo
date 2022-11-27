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
    register.validateAccount()

    cy.get('#password-confirmation-error').should('have.text', 'This is a required field.')
  })
})




