
import register from '../../pages/Register/register'

describe('register', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/')
  })
  
  it('passes', () => {

    register.createAccount()
    register.inputFirstName('Du')
    register.inputLastName('Adaktar')
    register.inputEmail('d1@adaktar.com')
    register.inputPassword('Sifra123###')
    register.inputConfirmPassword('Sifra123###')
    register.validateAccount()

    cy.get('.box-information > .box-content > p').should('contain', 'Du').and('contain', 'Adaktar').and('contain', 'd1@adaktar')
  })
})