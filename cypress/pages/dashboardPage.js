class DashboardPage {
    checkDashboardPage() {
        cy.location('pathname').should('eq', '/web/index.php/dashboard/index');
        cy.get('.oxd-layout-context');
    }
}
module.exports = DashboardPage;