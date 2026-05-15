const userData = require('../fixtures/user-data.json'); 
const LoginPage = require('../pages/loginPage.js');
const MyInfoPage = require('../pages/myInfoPage.js');
const DashboardPage = require('../pages/dashboardPage.js');
const MenuPage = require('../pages/menuPage.js');
const Chance = require('chance');
  
describe('Orange HRM Login', () => {
     let loginPage;
     let myInfoPage;
     let dashboardPage;
     let menuPage;
     let chance;

    beforeEach(() => {
        loginPage = new LoginPage(); 
        myInfoPage = new MyInfoPage();
        dashboardPage = new DashboardPage();
        menuPage = new MenuPage();
        chance = new Chance();
    });
    
it('User Info Updated', () => {
        loginPage.accessLoginPage();
        loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password);
        dashboardPage.checkDashboardPage();
        menuPage.accessMyInfo();
        myInfoPage.fillPersonalDetails(chance.name(), chance.last());

        const date = chance.date(); 
        const formattedDate = `${date.getFullYear()}-${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}`; // ← formata para yyyy-dd-mm

        myInfoPage.fillEmploymentDetails('EmpTest', 'Driver test', formattedDate); // ← usa a data formatada
        myInfoPage.fillStatus();
        myInfoPage.saveForm();
    })
});