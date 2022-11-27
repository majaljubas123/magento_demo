class register{
    createAccount(){
        this.elements.create().click()
    }
    inputFirstName(firstName){
        this.elements.firstName().type(firstName)
    }
    inputLastName(lastName){
        this.elements.lastName().type(lastName)
    }
    inputEmail(email){
        this.elements.email().type(email)
    }
    inputPassword(password){
        this.elements.password().type(password)
    }
    inputConfirmPassword(confirmation){
        this.elements.confirmation().type(confirmation)
    }
    validateAccount(){
        this.elements.validation().click()
    }
    elements = {
        create: () => cy.get('.panel > .header > :nth-child(3) > a'),
        firstName: () => cy.get('#firstname'),
        lastName: () => cy.get('#lastname'),
        email: () => cy.get('#email_address'),
        password: () => cy.get('#password'),
        confirmation: () => cy.get('#password-confirmation'),
        validation: () => cy.get('#form-validate > .actions-toolbar > div.primary > .action > span')
    }
}

module.exports = new register();