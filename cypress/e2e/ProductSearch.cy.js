describe('Product search', () => {
    beforeEach( () =>{
        cy.visit('https://demowebshop.tricentis.com/')
    })
    it('should return relevant products for a basic search query', () =>{
        cy.get('#small-searchterms').type('smartphone')
        cy.get("input[class='button-1 search-box-button']").click()
        cy.get('.product-title > a').should('exist')
    })
    it('test2', () =>{
        cy.get('#small-searchterms').type('laptop')
        cy.get("input[class='button-1 search-box-button']").click()
        cy.get("h2[class='product-title'] a").should('be.visible')
    })
    it('test3', () =>{
        cy.get('#small-searchterms').type('album')
        cy.get("input[class='button-1 search-box-button']").click()
        cy.get("h2[class='product-title'] a").should('exist')
    })
    it('test4', () =>{
        cy.get('#small-searchterms').type('camera')
        cy.get("input[class='button-1 search-box-button']").click()
        cy.get("h2[class='product-title'] a").should('be.visible')
    })
    it('test5', () =>{
        cy.get('#small-searchterms').type('diamond')
        cy.get("input[class='button-1 search-box-button']").click()
        cy.get("div[class='product-grid'] div:nth-child(3) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").should('exist')
    })


    

    



})
