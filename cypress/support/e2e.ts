beforeEach(() => {
  // Reset the db with the default seed data before each test
  cy.task('reseed')
})
