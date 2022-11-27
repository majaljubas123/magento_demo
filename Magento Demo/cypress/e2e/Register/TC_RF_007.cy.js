import register from '../../pages/Register/register'

describe('register', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/')
  })
  
  it('passes', () => {

    register.createAccount()
    register.inputFirstName('Du')
    register.inputLastName('Adaktar')
    register.inputEmail('adaktar')
    register.inputPassword('Sifra123###')
    register.inputConfirmPassword('Sifra123###')
    register.validateAccount()

    cy.get('#email_address-error').should('have.text', 'Please enter a valid email address (Ex: johndoe@domain.com).')
  })
})



