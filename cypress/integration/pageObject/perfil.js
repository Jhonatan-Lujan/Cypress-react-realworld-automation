class Perfil{
    clickMyArticles(){
        cy.get('.nav-pills').children().first().should('be.visible').click()
    }

    clickFavoritedArticles(){
        cy.get('.nav-pills').children().eq(1).should('be.visible').click()
    }

    getArticles(){
        return cy.get('.article-preview').children()
    }

    getFavoritedArticles(){
        return cy.get('.article-preview').should('be.visible')
    }

    meEncorazonaFirstArticle(){
        cy.get('.row').find('.btn-outline-primary').first().click()
    }

    clickEditProfile(){
        cy.get('.action-btn').contains('Edit Profile Settings').click()
    }

    getBio(){
        return cy.get('.user-info').find('p')
    }
}

export default Perfil