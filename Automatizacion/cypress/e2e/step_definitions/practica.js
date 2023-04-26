import {
  Given,
  When,
  //And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {loginPage} from '@pages/LoginPage'

Given("A web browser is at the saucelabs login page", () => {
  cy.visit("/");
  cy.wait(5500)
});

When("A user enters the username {string}, the password {string}, and clicks on the login button", (username,password) => {
  loginPage.submitLogin(username,password);
});

When("Add two products to cart", ()=>{
  cy.url().should("contains", "/inventory.html");
  loginPage.clickBackpack();
  loginPage.clickLight();
  loginPage.clickCart();
  cy.wait(5500)
});

When("View the cart", ()=>{
  loginPage.clickCheckout();
  cy.wait(5500)
});

When ("Complete the form name {string} lastname {string} and zipcode {string} click on the continue button", (nombre, apellido,codigopostal) =>{
  loginPage.submitCheckout(nombre,apellido,codigopostal); 
  cy.wait(5500)
})

Then("A user clicks finish in the checkout overview", ()=>{
  loginPage.clickFinish();
});


