/// <reference types="Cypress" />

describe('My first test suite',function()
{
    it('My 4th test case',function() {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/#/");
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        //window alert
        cy.on('window:alert',(str)=>{
            
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm',(str)=>{
            
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.url().should('include','rahulshettyacademy')
        cy.go('back')
        cy.go('forward')


        

        
    })
})