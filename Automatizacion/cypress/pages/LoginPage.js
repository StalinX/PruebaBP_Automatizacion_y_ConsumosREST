class LoginPage {
  elements = {
    usernameInput: () => cy.get("#user-name"),
    passwordInput: () => cy.get("#password"),
    loginBtn: () => cy.get("#login-button"),
    backpackBtn: () => cy.get("#add-to-cart-sauce-labs-backpack"),
    lightBtn: () => cy.get("#add-to-cart-sauce-labs-bike-light"),
    cartBtn: () => cy.get('*[class^="shopping_cart_container"]'),
    checkOutBtn: () => cy.get("#checkout"),
    firstnameInput: () => cy.get("#first-name"),
    lastnameInput: () => cy.get("#last-name"),
    codeInput: () => cy.get("#postal-code"),
    continueBtn: () => cy.get("#continue"),
    finishBtn: () => cy.get("#finish"),
  };

  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

  submitLogin(username,password){
    this.elements.usernameInput().type(username);
    this.elements.passwordInput().type(password);
    this.elements.loginBtn().click();
  }
  clickBackpack(){
    this.elements.backpackBtn().click();
}

clickLight(){
    this.elements.lightBtn().click();
}

clickCart(){
    this.elements.cartBtn().click();
}

clickCheckout(){
    this.elements.checkOutBtn().click();
}

submitCheckout(nombre,apellido,codigopostal){
    this.elements.firstnameInput().type(nombre);
    this.elements.lastnameInput().type(apellido);
    this.elements.codeInput().type(codigopostal);
    this.elements.continueBtn().click();
}

clickFinish(){
    this.elements.finishBtn().click();
}

}

export const loginPage = new LoginPage();
