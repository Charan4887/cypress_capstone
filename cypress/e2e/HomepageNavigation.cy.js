describe('Homepage', () => {

    beforeEach( () =>{

        cy.visit('https://demowebshop.tricentis.com/')

    })


    it('should load the homepage correctly', () =>{

        cy.url().should('include', 'tricentis.com')

        cy.title().should('contain','Demo Web Shop')

        cy.get('p:nth-child(1)').should('be.visible')

    })

    it('should display product categories', () =>{

        cy.get("div[class='block block-category-navigation'] strong").should('have.text','Categories')
        
        cy.get("div[class='block block-category-navigation'] li:nth-child(1)").should('be.visible')

        cy.get("div[class='block block-category-navigation'] li:nth-child(2)").should('be.visible')

        cy.get("div[class='block block-category-navigation'] li:nth-child(3)").should('be.visible')

        cy.get("div[class='block block-category-navigation'] li:nth-child(4)").should('be.visible')

        cy.get("div[class='block block-category-navigation'] li:nth-child(5)").should('be.visible')

        cy.get("div[class='block block-category-navigation'] li:nth-child(6)").should('be.visible')

        cy.get("div[class='block block-category-navigation'] li:nth-child(7)").should('be.visible')
        


    })


    
})