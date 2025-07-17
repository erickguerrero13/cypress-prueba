describe('Prueba de autenticación y búsqueda de embarque', () => {
  beforeEach(() => {
    cy.visit('https://www.selaski.com/public/reports/shared?token=cdexd34d7a31da5257e1d5f7af80e21995f0dfe65');
    cy.wait(3000); // Espera visual para carga inicial
  });

  it('✅ PIN correcto y embarque existente', () => {
    cy.fixture('datos').then((datos) => {
      cy.ingresarCodigo(datos.pin);
      cy.filtrarEmbarque(datos.embarque);
      cy.contains(datos.embarque, { timeout: 10000 }).should('exist');
    });
  });

  it('❌ PIN incorrecto muestra mensaje de error', () => {
    const pinIncorrecto = '1234';
    cy.ingresarCodigo(pinIncorrecto);

    // Validar el mensaje exacto que aparece
    cy.contains('Código incorrecto. Por favor ingresa el código correcto para tener acceso', { timeout: 10000 })
      .should('be.visible');
  });

  it('❌ Embarque inexistente muestra resultado vacío', () => {
    const pinValido = '5569';
    const embarqueInexistente = 'NoExiste123';

    cy.ingresarCodigo(pinValido);
    cy.filtrarEmbarque(embarqueInexistente);

    cy.wait(3000);

    // Validar que el resultado no existe (mensaje corregido)
    cy.contains('Sin datos para mostrar', { timeout: 10000 }).should('be.visible');
  });
});
