describe('Checkout process', () => {
    it('checkout process and verify the confirmation', () =>{
    cy.visit('https://demowebshop.tricentis.com/login')
    cy.login('rohit1725881458808@example.com','rohitsharma123@')
    cy.addtocart('smartphone','.button-2')
    cy.addtocart('jeans','.button-2')
    cy.addtocart('laptop ','.button-2')
    cy.addtocart('belt',"input[value='Add to cart']")
    cy.get('#topcartlink > .ico-cart').click()
    cy.get('#termsofservice').check()
    cy.get('#checkout').click()
    cy.get('#billing-address-select').select('New Address')
    cy.get('#BillingNewAddress_Company').type('wipro')
    cy.get('#BillingNewAddress_CountryId').select('United States')
    cy.get('#BillingNewAddress_StateProvinceId').select('Texas')
    cy.get('#BillingNewAddress_City').type('El paso')
    cy.get('#BillingNewAddress_Address1').type('12,xyz,abc')
    cy.get('#BillingNewAddress_Address2').type('12,xyz,abc')
    cy.get('#BillingNewAddress_ZipPostalCode').type(530022)
    cy.get('#BillingNewAddress_PhoneNumber').type('0812345698')
    cy.get('#BillingNewAddress_FaxNumber').type('224455')
    cy.get('#billing-buttons-container > .button-1').click()
    cy.get('#shipping-buttons-container > .button-1').click()
    cy.get('#shipping-method-buttons-container > .button-1').click()
    // valid payment information
    cy.contains('Cash On Delivery (COD) (7.00)').should('be.visible')
    cy.contains('Check / Money Order (5.00)').should('be.visible')
    cy.contains('Credit Card').should('be.visible')
    cy.contains('Purchase Order').should('be.visible')
    cy.get('#paymentmethod_1').click()
    cy.get(':nth-child(1) > .method-name > .payment-details').click()
    cy.get('#payment-method-buttons-container > .button-1').click()
    //payment information
    cy.contains('You will pay by COD').should('be.visible')
    cy.get('#payment-info-buttons-container > .button-1').click()
    //final confirmation
    cy.contains('Confirm order').should('be.visible')
    cy.get('#confirm-order-buttons-container > .button-1').click()
    // order confirmation and summary
    cy.contains('Thank you').should('be.visible')
    cy.contains('Your order has been successfully processed!').should('be.visible')
    cy.contains('Click here for order details.').should('be.visible')
    cy.get("input[value='Continue']").click()
    })
})
