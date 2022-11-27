class login{
    clickSignIn(){
        this.elements.signIn().click()
    }

    inputEmail(email){
        this.elements.email().type(email)
    }
    inputPassword(password){
        this.elements.password().type(password)
    }

    clickOnLogin(){
        this.elements.login().click()
    }

    elements = {
        signIn: () => cy.get('.panel > .header > .authorization-link > a'),
        email: () => cy.get('#email'),
        password: () => cy.get('#pass'),
        login: () => cy.get('#send2'),

    }

}


module.exports = new login();