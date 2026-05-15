class MenuPage {
    accessMyInfo() {
        cy.get('[href="/web/index.php/pim/viewMyDetails"]').click();
    }
}

module.exports = MenuPage;