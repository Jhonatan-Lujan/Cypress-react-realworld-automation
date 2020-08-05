/// <reference types="cypress" />
class Home {
    menu(option){
        return cy.get('.navbar-nav').children().contains(option)
    }

    yourFeed(){
        return cy.get('.nav-pills').contains('Your Feed')
    }

    globalFeed(){
        return cy.get('.nav-pills').contains('Global Feed')
    }
}

export default Home