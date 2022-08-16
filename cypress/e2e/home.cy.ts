describe('Home Page', () => {
  it('should render hour list', () => {
    cy.visit('/');
    cy.get('[data-testid="DayTimeList"]').should('have.length', 1);
  });

  it('should render hour list with just one TODAY badge', () => {
    cy.visit('/');
    cy.get('[data-testid="DayTimeList"]')
      .children()
      .contains('TODAY')
      .should('have.length', 1);
  });

  it('should render hour list with day info', () => {
    // Monday -> Close, Tuesday -> 10 AM - 6 PM mapping
    // Right now, we list everyday separately. Thats why there should be 7 items.
    // If we change weekend to 'Sat-Sun', update this test
    cy.visit('/');
    cy.get('[data-testid="DayListChild"]').should('have.length', 7);
  });
});
