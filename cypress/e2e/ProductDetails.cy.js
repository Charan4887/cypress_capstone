describe('Product details', () => {
    beforeEach( () =>{
        cy.visit('https://demowebshop.tricentis.com/')
    })
    it('should display accurate product details', ()=>{
        cy.get('#small-searchterms').type('smartphone')
        cy.get("input[class='button-1 search-box-button']").click()
        cy.url().should('contain','smartphone')
        cy.get('.product-title > a').should('have.text','Smartphone')
        cy.get('.button-2').should('be.enabled')
        cy.get('.button-2').click()
        cy.get('#bar-notification').should('be.visible')
    })
    it('test2', ()=>{
        cy.get('#small-searchterms').type('jeans')
        cy.get("input[class='button-1 search-box-button']").click()
        cy.url().should('contain','jeans')
        cy.get('.product-title > a').should('have.text','Blue Jeans')
        cy.get('.button-2').should('be.enabled')
        cy.get('.button-2').click()
        cy.get('#bar-notification').should('be.visible')
    })
    it('test3', ()=>{
        cy.get('#small-searchterms').type('phone cover')
        cy.get("input[class='button-1 search-box-button']").click()
        cy.url().should('contain','cover')
        cy.get('.product-title > a').should('have.text','Phone Cover')
        cy.get('.button-2').should('be.enabled')
        cy.get('.button-2').click()
        cy.get('#add-to-cart-button-80') .click()
        cy.get('#bar-notification').should('be.visible')

    })
})
