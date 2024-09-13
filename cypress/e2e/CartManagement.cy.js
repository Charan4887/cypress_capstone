describe('Cart management', () => {
    beforeEach( () =>{
        cy.visit('https://demowebshop.tricentis.com/')
    })
    it('add items to the cart', () =>{
        cy.addtocart('smartphone','.button-2')
        cy.addtocart('jeans','.button-2')
        cy.addtocart('laptop ','.button-2')
        cy.addtocart('belt',"input[value='Add to cart']")
        // cart total calculations after adding
        cy.get('.ico-cart .cart-qty').should(($newQty) => {
            const newCartQty = parseInt($newQty.text().replace(/[()]/g, ''))
            expect(newCartQty).to.eq(4)
        })
         //Remove items from the cart
        cy.get("a[class='ico-cart'] span[class='cart-label']").click()
        cy.get(':nth-child(2) > .remove-from-cart > input').check()
        cy.get(':nth-child(4) > .remove-from-cart > input').check()
        cy.get('.update-cart-button').click()
        // cart total calculations after removing
        cy.get('.ico-cart .cart-qty').should(($newQty) => {
            const newCartQty = parseInt($newQty.text().replace(/[()]/g, ''))
            expect(newCartQty).to.eq(2)
        })
    })
})