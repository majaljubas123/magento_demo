class search{
    inputSearch(search){
        this.elements.search().type(search).click()
    }
    clickOnSearch(){
        this.elements.button().click()
    }

    elements = {
        search: () => cy.get('#search'),
        button: () => cy.get('.action.search'),

    }
}

module.exports = new search();