const userData = require('../fixtures/user-data.json'); 
const LoginPage = require('../pages/loginPage.js');

  
describe('Login Orange HRM Login', () => {
     let loginPage;

    beforeEach(() => {
        loginPage = new LoginPage(); 

    });
    

    it('Login Failed', () =>  {
        loginPage.accessLoginPage();
        loginPage.loginWithUser(userData.userFailed.username, userData.userFailed.password);
        loginPage.checkAccessInvalid();
    })
});