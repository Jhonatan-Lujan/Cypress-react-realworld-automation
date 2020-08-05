import Home from "./pageObject/home"

describe('Visual testing', function () {
    const home = new Home()
    beforeEach(() => {
        cy.eyesOpen({
            appName: 'React app',
            batchName: 'Ultrafast Batch'
        })
    });

    afterEach(() => {
        cy.eyesClose();
    });

    it('Verify Login layout', function(){
        cy.visit('/#/login')
        cy.eyesCheckWindow('Normal Login layout')
        cy.Login()
    })

    it('Verify Home layout', function () {

        home.yourFeed().should('be.visible')
        cy.eyesCheckWindow('Normal Home layout')

    })
})