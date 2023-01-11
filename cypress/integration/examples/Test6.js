/// <reference types="Cypress" />

describe('My first test suite',function()
{
    it('My 6th test case',function() {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/#/")
        
        // making invisible item visible using jquery in below eg
        //cy.get('.mouse-hover-content').invoke('show')

        //force click without using Jquery
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')
    })
})