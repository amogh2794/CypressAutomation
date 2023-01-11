/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('My first test suite',function()
{
    it('My 8th test case',function() {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/#/")
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        
        
    })
})