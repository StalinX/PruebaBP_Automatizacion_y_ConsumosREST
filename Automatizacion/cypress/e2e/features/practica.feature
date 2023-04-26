Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
        Given A web browser is at the saucelabs login page
    Scenario: PRACTICAL CYPRESS AUTOMATION 
        When A user enters the username "standard_user", the password "secret_sauce", and clicks on the login button
    
        When Add two products to cart
    
        When View the cart
    
        When Complete the form name "Stalin" lastname "Riofrio" and zipcode "991" click on the continue button
    
        Then A user clicks finish in the checkout overview
