describe('Alert component', () => {
  it('renders different variants', () => {
    // cy.visit('http://localhost:6006/?path=/story/components-alert--default')
    cy.visit(`/?path=/story/components-alert--default`)

    // cy.get('[data-test="success-alert"]').should('be.visible')
    // cy.get('[data-test="success-alert"] .cu-alert__icon use').should('have.attr', 'href', '#icon-check-circle-outline')
    // cy.get('[data-test="success-alert"] .cu-alert__title').should('have.text', 'Success alert title')
    // cy.get('[data-test="success-alert"] .cu-alert__description').should('have.text', 'Success alert description')

    // cy.get('[data-test="error-alert"]').should('be.visible')
    // cy.get('[data-test="error-alert"] .cu-alert__icon use').should('have.attr', 'href', '#icon-times-circle-outline')
    // cy.get('[data-test="error-alert"] .cu-alert__title').should('have.text', 'Error alert title')
    // cy.get('[data-test="error-alert"] .cu-alert__description').should('have.text', 'Error alert description')

    // cy.get('[data-test="warning-alert"]').should('be.visible')
    // cy.get('[data-test="warning-alert"] .cu-alert__icon use').should(
    //   'have.attr',
    //   'href',
    //   '#icon-exclamation-triangle-outline',
    // )
    // cy.get('[data-test="warning-alert"] .cu-alert__title').should('have.text', 'Warning alert title')
    // cy.get('[data-test="warning-alert"] .cu-alert__description').should('have.text', 'Warning alert description')

    // cy.get('[data-test="info-alert"]').should('be.visible')
    // cy.get('[data-test="info-alert"] .cu-alert__icon use').should('have.attr', 'href', '#icon-info-circle-outline')
    // cy.get('[data-test="info-alert"] .cu-alert__title').should('have.text', 'Info alert title')
    // cy.get('[data-test="info-alert"] .cu-alert__description').should('have.text', 'Info alert description')
  })
})
