describe('Horaro servisto', () => {
  beforeEach(() => {
    cy.visit('https://boda-kosuzu.github.io/weekly-schedule/');
    cy.viewport(1920, 1440);
  });
  it('Upload a JSON, and download an image', () => {
    cy.get('input[type=file]').attachFile('WeeklySchedule.json');
    cy.get('.input-button-area-output').click();
    cy.readFile('cypress/downloads/schedule.png');
  });
});
