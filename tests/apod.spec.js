const { test, expect } = require('@playwright/test');

test('mostra a foto do dia atual', async ({ page }) => {
  await page.goto('http://localhost:81'); // porta do seu container
  await page.click('#mostrarFoto');
  const img = page.locator('#fotoDia img');
  await expect(img).toBeVisible();
});

test('mostra erro para data inválida', async ({ page }) => {
  await page.goto('http://localhost:81');
  await page.fill('#dataFoto', '2099-01-01'); // data futura
  await page.click('#mostrarFoto');
  const botao = page.locator('#mostrarFoto');
  await expect(botao).toHaveText(/Data inválida/);
});

