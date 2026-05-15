class MyInfoPage {
    selectorsList() {
        return {
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
            firstNameField: '[name="firstName"]',
            lastNameField: '[name="lastName"]',
            genericFieldField: '.oxd-input--active',
            dataFiedld: '[placeholder="yyyy-mm-dd"]',
            dateCloseButton: ".--close",
            submitButton: ".orangehrm-left-space",
            countryBtn: ':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon',
            countryOptions: '.oxd-select-dropdown > :nth-child(20)',
            maritalStatusBtn: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input',
            maritalStatusOptions: '.oxd-select-dropdown > :nth-child(3)',
        } 
    } 

    fillPersonalDetails(firstName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear({ force: true }).type(firstName); 
        cy.get(this.selectorsList().lastNameField).clear({ force: true }).type(lastName);
    }

    fillEmploymentDetails(employeeId, driverLicense, licenseExpiryDate) {
        cy.get(this.selectorsList().genericFieldField).eq(3).clear().type(employeeId);     
        cy.get(this.selectorsList().genericFieldField).eq(5).clear().type(driverLicense);   
        cy.get(this.selectorsList().genericFieldField).eq(6).clear().type(licenseExpiryDate);
        cy.get(this.selectorsList().dateCloseButton).click();
    } 

    fillStatus() {
        cy.get((this.selectorsList()).countryBtn).click();
        cy.get((this.selectorsList()).countryOptions).click();
        cy.get((this.selectorsList()).maritalStatusBtn).eq(0).click();
        cy.get((this.selectorsList()).maritalStatusOptions).click();

    }
    saveForm() {
    cy.get(this.selectorsList().submitButton).eq(0).click({ force: true });
}

} 

module.exports = MyInfoPage;