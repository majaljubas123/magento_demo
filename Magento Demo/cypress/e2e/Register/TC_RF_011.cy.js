
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
    register.inputPassword('Sifra')
    register.inputConfirmPassword('Sifra')
    register.validateAccount()

    cy.get('#password-error').should('contain', 'Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.')
  })
})