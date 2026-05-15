class LoginPage {
    selectorsList() {
        return {
            usernameField: 'input[name="username"]',
            passwordField: 'input[name="password"]',
            loginButton: 'button[type="submit"]',
            wrongCredentialsAlert: '.oxd-alert-content-text',
        }
    }
    accessLoginPage() {
        cy.visit('/auth/login');
    }
    loginWithUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username);
        cy.get(this.selectorsList().passwordField).type(password);
        cy.get(this.selectorsList().loginButton).click();
    }
    checkAccessInvalid() {
    cy.get(this.selectorsList().wrongCredentialsAlert).should('be.visible');
}
}

module.exports = LoginPage;