const { test, expect } = require("../fixtures/test-fixtures");

test("Login exitoso", async ({ app, page }) => {
  await app.login();

  await expect(
    page.getByText("Texto Falso Que No Existe")
  ).toBeVisible();
});

test("Login con credenciales incorrectas", async ({ app, page }) => {
  await page
    .getByLabel("Correo electrónico")
    .fill("incorrecto@test.com");

  await page
    .getByLabel("Contraseña")
    .fill("incorrecta");

  await page
    .getByRole("button", {
      name: "Ingresar",
      exact: true
    })
    .click();

  await expect(
    page.getByText("Correo o contraseña incorrectos")
  ).toBeVisible();
});