describe('Custom Commands', () => {
    it('custom commands to simplify and reuse test steps', () =>{
    cy.visit('https://demowebshop.tricentis.com/login')
    cy.login('rohit1725881458808@example.com','rohitsharma123@')
    cy.wait(1000)
    cy.addtocart('smartphone','.button-2')
    cy.addtocart('jeans','.button-2')
    cy.addtocart('laptop ','.button-2')
    cy.addtocart('belt',"input[value='Add to cart']")
    })
    })
