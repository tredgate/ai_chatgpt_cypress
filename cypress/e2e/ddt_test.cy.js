// Import modulů pro Cypress
import { login, navigateToProjects, createProject } from "./actions";

// Před každým testem se přihlaš na web
beforeEach(() => {
  login(Cypress.env("username"), Cypress.env("password"));
});

// Načtení testovacích dat z JSON souboru
const testData = require("../fixtures/projectData.json");

// Iterace přes testovací data a vytvoření testu pro každý záznam
testData.forEach((project) => {
  it(`Vytvoření projektu: ${project.name}`, () => {
    // Navigace na stránku s projekty
    navigateToProjects();

    // Vytvoření projektu s použitím dat z JSON souboru
    createProject(project);

    // Ověření, že nový projekt byl úspěšně vytvořen
    cy.contains(project.name).should("exist");
  });
});
