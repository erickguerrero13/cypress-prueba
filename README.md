# Prueba de Automatización con Cypress

Este proyecto automatiza el flujo de autenticación y búsqueda de embarque utilizando Cypress.

---

## Objetivo de la prueba

Automatizar:

- El acceso a una URL protegida.
- La autenticación mediante un PIN de 4 dígitos.
- La selección del filtro "Embarque".
- La búsqueda de un embarque específico.
- La validación de resultados mostrados en pantalla.

---

## Requisitos previos

- Tener instalado [Node.js](https://nodejs.org)
- Tener instalado [Git](https://git-scm.com/) (si deseas clonar el repositorio por consola)
- Cypress instalado localmente en el proyecto

---

## ▶ Cómo ejecutar la prueba

### 1. Obtener el repositorio

Descargar el repositorio (botón "Code" > "Download ZIP") y luego descomprimirlo.

### 2. Instalar dependencias en la ruta del proyecto

```cmd
npm install
```

### 3. (Opcional en caso de errores) Habilitar scripts en PowerShell

```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser -Force
Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force
```

### 4. Abrir Cypress en la ruta del proyecto

\cypress-embarque

```cmd
npx cypress open
```

Luego selecciona el archivo `embarque.cy.js` para