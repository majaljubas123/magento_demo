
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
    register.inputConfirmPassword('Sifra123###')
    register.validateAccount()

    cy.get('#is_subscribed').check()
    cy.get('.message-success > div').should('have.text', 'Thank you for registering with Fake Online Clothing Store.')
  })
})