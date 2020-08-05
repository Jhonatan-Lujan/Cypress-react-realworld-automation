/// <reference types="cypress" />
import Home from './pageObject/home';
import NewPost from './pageObject/newPost'
import Article from './pageObject/article'
import Perfil from './pageObject/perfil';
import Settings from './pageObject/settings'

describe('Smoke test', function(){

    const home = new Home();
    const newPost = new NewPost();
    const article = new Article();
    const perfil = new Perfil();
    const settings = new Settings();
    const usuario = 'CP';
    const testTitle = 'Test 1 cypress';
    

    before( 'Sign in', function(){
        cy.Login()
    }) 

    it('Verify login', function(){

        home.yourFeed().should('be.visible')
        home.menu(usuario).should('have.text', usuario)
        
    })

    it('Create new Post', function(){

        const about = 'Creating the test 1';
        const text = 'Text for test 1';
        const tag = 'Test';

        home.menu('New Post').click()
        newPost.articleTitle(testTitle)
        newPost.articleAbout(about)
        newPost.articleText(text)
        newPost.articleTag(tag)
        newPost.publishArticle()

        article.title().should('have.text', testTitle)
    })

    it('Comment post on article', function(){

        const comment = 'Test comment'

        article.postComment(comment)

        article.getComment().should('have.text', comment)

    })

    
    it('Add favorite article', function(){
        

        home.menu(usuario).click()
        perfil.meEncorazonaFirstArticle()
        perfil.getArticles().first().find('.btn-primary').should('have.text', ' 1')
        perfil.clickFavoritedArticles()
        cy.wait(2000)
        perfil.getFavoritedArticles().first().contains(testTitle).should('exist')
    })

    it('Eliminate article', function(){

        perfil.getFavoritedArticles().first().click()
        article.deleteArticle().click()
        cy.wait(2000)
        home.menu(usuario).click()
        perfil.clickFavoritedArticles()
        cy.wait(2000)
        perfil.getFavoritedArticles().contains(testTitle).should('not.exist')
    })

    it('Edit Bio', function(){
        const bio = 'Bio testing!'

        home.menu(usuario).click()
        perfil.clickEditProfile()
        settings.typeBio(bio)
        settings.clickUpdateSettings()
        cy.wait(2000)
        home.menu(usuario).click()

        perfil.getBio().should('have.text', bio)
    })

    it('Logout', function(){

        perfil.clickEditProfile()
        settings.clickLogout()
        cy.get('.nav-link').should('contain', 'Sign up')
    })
})