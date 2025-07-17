Cypress.Commands.add('ingresarCodigo', (codigo) => {
  cy.wait(1500);
  cy.get('#digit1').type(codigo[0], { delay: 200 });
  cy.get('#digit2').type(codigo[1], { delay: 200 });
  cy.get('#digit3').type(codigo[2], { delay: 200 });
  cy.get('#digit4').type(codigo[3], { delay: 200 });
  cy.wait(1000);
  cy.contains('Ingresar').click();
  cy.wait(3000); // Espera para respuesta del servidor
});

Cypress.Commands.add('filtrarEmbarque', (textoBusqueda) => {
  cy.wait(2000);
  cy.contains('Filtros').should('be.visible').click();
  cy.wait(2000);

  cy.get('#orders-container button')
    .contains('Seleccionar')
    .should('be.visible')
    .click({ force: true });

  cy.wait(2000);

  cy.get('#orders-container')
    .find('p')
    .contains('Embarque')
    .scrollIntoView()
    .should('be.visible')
    .click({ force: true });

  cy.wait(2000);

  cy.get('#orders-container input[placeholder="Escribe aquí tu búsqueda"]', { timeout: 15000 })
    .should('exist')
    .should('not.have.class', 'cursor-not-allowed')
    .should('not.be.disabled')
    .clear({ force: true })
    .type(textoBusqueda + '{enter}', { delay: 200 });

  cy.wait(5000); // Espera para carga de resultados
});
