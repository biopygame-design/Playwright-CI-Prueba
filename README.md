![CI Status](https://github.com/biopygame-design/Playwright-CI-Prueba/actions/workflows/ci.yml/badge.svg)
# Playwright - Testing Automatizado

Proyecto desarrollado para la actividad de **Testing Automatizado con Playwright**.

El objetivo es familiarizarse con Playwright y aplicar técnicas de testing End-to-End sobre una **Single Page Application (SPA)**, incorporando conceptos de QA adaptativo e inteligencia artificial generativa.

---

## 1. Descripción del proyecto

La aplicación utilizada para las pruebas es una SPA sencilla de gestión de usuarios.

La aplicación permite:

* Iniciar sesión.
* Buscar usuarios.
* Registrar nuevos usuarios.
* Cerrar sesión.

La aplicación fue creada exclusivamente para esta actividad y no depende de ningún proyecto externo.

Los tests automatizados se realizan utilizando **Playwright**.

---

## 2. Tecnologías utilizadas

* HTML
* CSS
* JavaScript
* Node.js
* Playwright
* Playwright Test

---

## 3. Requisitos previos

Antes de ejecutar el proyecto es necesario tener instalado:

### Node.js

Se recomienda utilizar una versión LTS de Node.js.

Para comprobar si está instalado:

```bash
node --version
```

También se necesita npm:

```bash
npm --version
```

---

## 4. Instalación

Clonar o descargar el proyecto.

Ingresar desde una terminal a la carpeta principal:

```bash
cd playwright-qa
```

Instalar las dependencias:

```bash
npm install
```

Instalar los navegadores utilizados por Playwright:

```bash
npx playwright install
```

Una vez finalizada la instalación, el proyecto está listo para ejecutar.

---

# 5. Estructura del proyecto

```text
playwright-qa/
│
├── app/
│   └── index.html
│
├── pages/
│   └── AppPage.js
│
├── fixtures/
│   └── test-fixtures.js
│
├── tests/
│   ├── login.spec.js
│   ├── busqueda.spec.js
│   └── registro.spec.js
│
├── docs/
│   ├── SPEC.md
│   └── IA.md
│
├── package.json
│
├── playwright.config.js
│
└── README.md
```

### `app/`

Contiene la SPA que será utilizada como sistema bajo prueba.

### `pages/`

Contiene el **Page Object Model**.

`AppPage.js` centraliza los elementos y acciones principales de la aplicación.

### `fixtures/`

Contiene las fixtures utilizadas por los tests.

La fixture permite crear y preparar una instancia de `AppPage` para reutilizarla en los diferentes casos de prueba.

### `tests/`

Contiene los casos de prueba automatizados.

Actualmente existen tres grupos:

* `login.spec.js`
* `busqueda.spec.js`
* `registro.spec.js`

### `docs/`

Contiene documentación relacionada con la actividad:

* `SPEC.md`: especificación de testing.
* `IA.md`: explicación de QA adaptativo e inteligencia artificial.

### `playwright.config.js`

Contiene la configuración de Playwright:

* navegadores;
* viewport;
* servidor local;
* screenshots;
* videos;
* traces;
* reporte HTML.

---

# 6. Credenciales de prueba

La aplicación posee un usuario de prueba.

```text
Correo:
admin@test.com

Contraseña:
Password123
```

Estas credenciales se utilizan en los tests automatizados.

---

# 7. Ejecutar los tests

Para ejecutar todos los tests:

```bash
npm test
```

Playwright ejecutará automáticamente los casos definidos en la carpeta `tests`.

Los tests se ejecutan utilizando los navegadores configurados en `playwright.config.js`.

Actualmente:

* Chromium
* Firefox

---

# 8. Ejecutar los tests con el navegador visible

Para observar cómo Playwright realiza las acciones:

```bash
npm run test:headed
```

Se abrirá el navegador y podrán observar acciones como:

1. Abrir la aplicación.
2. Completar el formulario.
3. Presionar botones.
4. Buscar usuarios.
5. Registrar usuarios.
6. Verificar resultados.

Esta opción es especialmente útil para realizar la demostración durante la presentación.

---

# 9. Reporte HTML

Después de ejecutar los tests se genera un reporte HTML.

Para abrirlo:

```bash
npm run report
```

El reporte permite visualizar:

* tests exitosos;
* tests fallidos;
* duración;
* navegador utilizado;
* errores;
* screenshots;
* traces;
* videos cuando corresponda.

El reporte sirve como evidencia de ejecución para la actividad.

---

# 10. Screenshots y videos

La configuración de Playwright utiliza:

```js
screenshot: "only-on-failure"
```

Por lo tanto, se guarda una captura de pantalla cuando un test falla.

También se utiliza:

```js
video: "retain-on-failure"
```

Esto permite conservar el video de la ejecución cuando ocurre un fallo.

Los archivos generados se encuentran dentro de:

```text
test-results/
```

---

# 11. Trace Viewer

Playwright también utiliza Trace Viewer para analizar errores.

La configuración utiliza:

```js
trace: "on-first-retry"
```

Si un test falla y se vuelve a ejecutar, Playwright puede generar un trace.

El trace permite analizar:

* acciones realizadas;
* elementos utilizados;
* DOM;
* screenshots;
* tiempos;
* navegación;
* errores.

Para visualizar un trace:

```bash
npx playwright show-trace ruta/al/trace.zip
```

La ruta exacta puede consultarse dentro de la carpeta `test-results`.

---

# 12. Tests implementados

## Login

Archivo:

```text
tests/login.spec.js
```

Incluye:

### Login exitoso

Utiliza:

```text
admin@test.com
Password123
```

El resultado esperado es que aparezca el:

```text
Panel principal
```

### Login incorrecto

Se utilizan credenciales incorrectas.

El resultado esperado es:

```text
Correo o contraseña incorrectos
```

---

## Búsqueda

Archivo:

```text
tests/busqueda.spec.js
```

El test inicia sesión y busca:

```text
Juan
```

El resultado esperado es:

```text
Juan - juan@test.com
```

---

## Registro

Archivo:

```text
tests/registro.spec.js
```

El test inicia sesión y registra un nuevo usuario.

Por ejemplo:

```text
Nombre: Carlos
Correo: carlos@test.com
```

El resultado esperado es:

```text
Usuario registrado correctamente
```

---

# 13. Page Object Model

El proyecto utiliza el patrón **Page Object Model (POM)**.

Los elementos y acciones de la aplicación se encuentran centralizados en:

```text
pages/AppPage.js
```

Por ejemplo:

```js
async login() {

  await this.email.fill("admin@test.com");

  await this.password.fill("Password123");

  await this.loginButton.click();

}
```

Esto evita repetir los mismos selectores y acciones en diferentes tests.

Además, si cambia la interfaz, se puede modificar el selector en un único lugar.

---

# 14. Locators

Los tests utilizan los Locators de Playwright.

Por ejemplo:

```js
page.getByRole("button", {
  name: "Ingresar"
});
```

También se utilizan:

```js
page.getByLabel("Correo electrónico");
```

y:

```js
page.getByText("Panel principal");
```

Estos mecanismos permiten utilizar selectores más descriptivos y resistentes que depender únicamente de la estructura del HTML.

---

# 15. Fixtures

El proyecto utiliza una fixture personalizada:

```text
fixtures/test-fixtures.js
```

Esta fixture crea automáticamente una instancia de:

```text
AppPage
```

y navega hasta la aplicación antes de ejecutar el test.

De esta manera, los tests pueden utilizar directamente:

```js
async ({ app, page }) => {
```

sin repetir la configuración inicial.

---

# 16. QA adaptativo e inteligencia artificial

La actividad también analiza la utilización de inteligencia artificial generativa aplicada al testing.

Un LLM puede utilizarse como asistente para:

* generar casos de prueba;
* analizar errores;
* sugerir nuevos casos;
* detectar escenarios faltantes;
* adaptar selectores;
* analizar cambios en la interfaz.

Por ejemplo, si un botón cambia de:

```text
Ingresar
```

a:

```text
Acceder
```

un modelo de lenguaje podría analizar el DOM actualizado y sugerir adaptar:

```js
page.getByRole("button", {
  name: "Ingresar"
});
```

a:

```js
page.getByRole("button", {
  name: "Acceder"
});
```

La modificación debe ser revisada por el desarrollador o integrante de QA antes de incorporarla al proyecto.

---

# 17. ¿Por qué una SPA presenta desafíos?

Una SPA modifica el contenido de la página dinámicamente utilizando JavaScript.

Por este motivo:

* el DOM puede cambiar sin recargar la página;
* algunos elementos aparecen de forma asincrónica;
* las rutas pueden ser administradas del lado del cliente;
* algunos selectores pueden volverse frágiles.

Playwright permite afrontar estos problemas mediante funcionalidades como:

* Locators;
* auto-waiting;
* Page Object Model;
* fixtures;
* Trace Viewer.

---

# 18. Navegadores y viewport

Los tests se ejecutan actualmente sobre:

```text
Chromium
Firefox
```

El viewport utilizado es:

```text
1280 x 720
```

Esta configuración se encuentra en:

```text
playwright.config.js
```

---

# 19. Flujo completo de ejecución

Para ejecutar el proyecto desde cero:

```bash
npm install
```

Después:

```bash
npx playwright install
```

Ejecutar los tests:

```bash
npm test
```

Observar los tests en el navegador:

```bash
npm run test:headed
```

Abrir el reporte:

```bash
npm run report
```

---

# 20. Resultado esperado

Si todos los tests funcionan correctamente, Playwright mostrará los casos como exitosos.

Los principales flujos comprobados son:

```text
LOGIN
  ↓
Autenticación correcta/incorrecta

BÚSQUEDA
  ↓
Buscar usuario
  ↓
Mostrar resultado

REGISTRO
  ↓
Completar formulario
  ↓
Crear usuario
  ↓
Mostrar confirmación
```

De esta manera, el proyecto demuestra el uso de Playwright para testing End-to-End sobre una SPA y permite generar evidencia mediante el reporte HTML, screenshots, videos y Trace Viewer.
