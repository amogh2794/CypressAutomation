Feature: End to end Ecommerce validation

    Regression using BDD    
    Scenario: Ecommerce product delivery
    Given I open Ecommerce page
    When I add items to cart
    When validate the total price
    Then Select the country submit and vetify success message