class Settings{
    typeBio(text){
        cy.get('textarea[placeholder="Short bio about you"]').clear().type(text)
    }

    clickUpdateSettings(){
        cy.get('form').within($form => {
            cy.root().submit()
        })
    }

    clickLogout(){
        cy.get('.btn-outline-danger').click()
    }
}

export default Settings