const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test('clicking the Draw button displays the div with id = “choices”', async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id('draw')).click();
    await driver.wait(until.elementLocated(By.id('choices')), 1000);
    expect(await driver.wait(until.elementLocated(By.id('choices')), 1000).isEnabled()).toBeTruthy()
  
  });

  test('clicking the See All Bots button displays the div with id = “all-bots”', async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id('see-all')).click();
    await driver.wait(until.elementLocated(By.id('all-bots')), 1000);
    expect(await driver.wait(until.elementLocated(By.id('all-bots')), 1000).isEnabled()).toBeTruthy()
  });


});