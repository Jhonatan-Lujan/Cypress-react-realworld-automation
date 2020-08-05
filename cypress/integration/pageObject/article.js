class Article{
    title(){
        return cy.get('div[class="banner"]').find('h1')
    }

    author(){
        return cy.get('div[class="info"]').children('.author')
    }

    text(){
        return cy.get('article-content').find('p')
    }

    deleteArticle(){
        return cy.get('.btn-outline-danger')
    }

    postComment(comment){
        cy.get('.form-control').type(comment)
        cy.get('button[type="submit"]').click()
    }

    getComment(){
        return cy.get('.card-text')
    }

    deleteComment(){
        return cy.get('.mod-options').find('.ion-trash-a').dblclick()
    }
}

export default Article