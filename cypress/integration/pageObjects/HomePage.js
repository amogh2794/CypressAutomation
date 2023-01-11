class HomePage
{

getEditBox()
{
    return cy.get(':nth-child(1) > .form-control')
}
getToWayDataBinding()
{
     return cy.get(':nth-child(4) > .ng-untouched')
}

getGender()
{
    return cy.get('select')
}

getEnterpreneaur()
{
    return cy.get('#inlineRadio3')
}

getshotTab()
{
   return cy.get(':nth-child(2) > .nav-link')
}

}
export default HomePage;