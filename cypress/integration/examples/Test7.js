/// <reference types="Cypress" />

describe('My first test suite',function()
{
    it('My 7th test case',function() {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/#/")
        cy.get('#opentab').then(function(e1){
            const url=e1.prop("href")
            cy.visit(url)
        })
      
        
    })
})