import register from '../../pages/Register/register'

describe('register', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/')
  })
  
  it('passes', () => {

    register.createAccount()
    register.inputFirstName('Du')
    register.inputLastName('Adaktar')
    cy.get('#is_subscribed').check()
    register.inputEmail('du2@adaktar.com')
    register.inputPassword('Sifra123###')
    register.inputConfirmPassword('Sifra123###')
    register.validateAccount()

    cy.get('.message-success > div').should('have.text', 'Thank you for registering with Fake Online Clothing Store.')
  })
})