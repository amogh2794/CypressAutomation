/// <reference types="Cypress" />

describe('My first test suite',function()
{
    it('My 2nd test case',function() {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.products').as('productlocator')
        cy.get('@productlocator').find('.product').each(($el,index,$list) => {
            const textveg = $el.find('h4.product-name').text()
            if(textveg.includes('Cashews'))
            {
                cy.wrap($el).find('button').click()
            }
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    })
})