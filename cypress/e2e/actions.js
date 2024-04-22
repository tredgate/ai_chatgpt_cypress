// Akce pro přihlášení do aplikace
export function login(username, password) {
  cy.visit("https://tredgate.com/pmtool/index.php?module=users/login");

  // Vyplnění uživatelského jména
  cy.get("#username").type(username);

  // Vyplnění hesla
  cy.get("#password").type(password);

  // Potvrzení přihlášení
  cy.get(".btn.btn-info").click();
}

// Akce pro navigaci na stránku s projekty
export function navigateToProjects() {
  // Kliknutí na odkaz 'Projects' v sidebaru
  cy.get("#Projects > a").click();
}

// Akce pro vytvoření nového projektu
export function createProject(projectData) {
  // Kliknutí na tlačítko 'Add Project'
  cy.get('button[test_id="Add Project"]').click();

  // Čekání na načtení formuláře
  cy.get('div[data-testid="Name"] input', { timeout: 10000 }).should(
    "be.visible"
  );

  // Vyplnění názvu projektu
  cy.get('div[data-testid="Name"] input').clear().type(projectData.name);

  // Vyplnění popisu projektu
  //   cy.get('div[data-testid="Description"] textarea')
  //     .clear()
  //     .type(projectData.description);

  // (Příklad) Vyplnění data dokončení
  cy.get('div[data-testid="Start Date"] input')
    .clear()
    .type(projectData.dueDate);

  // Kliknutí na tlačítko pro uložení projektu
  cy.get('button[type="submit"]').contains("Save").click();
}
