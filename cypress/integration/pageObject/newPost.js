/// <reference types="cypress" />

class NewPost {
    articleTitle(title){
        cy.get('form').within(($form) => {
            cy.get('input').first().type(title)
        })
    }

    articleAbout(about){
        cy.get('form').within(($form) => {
            cy.get('input').eq(1).type(about)
        })
    }

    articleText(text){
        cy.get('textarea[placeholder="Write your article (in markdown)"]').type(text)
    }

    articleTag(tag){
        cy.get('form').within(($form) => {
            cy.get('input').last().type(tag)
        })
    }

    publishArticle(){
        cy.get('button[type="button"]').click()
    }
}

export default NewPost;