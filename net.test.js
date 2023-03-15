const { clickElement, getText } = require("./lib/commands.js");

let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
});

afterEach(() => {
  page.close();
});

describe("Booking tickets", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/index.php");
  });

 
   //sad path
    test("The movie 'Train arrival'. No seats selected", async () => {
    await clickElement(page, "[data-seance-id='142']");
    const actual1 = await getText(page, "h2");
    await expect(actual1).toContain("Train arrival");
    await clickElement(page, ".buying .acceptin-button");
    const actual2 = await getText(page, "h2");
    await expect(actual2).toContain("Train arrival");
  });
    //  happy path
    test("The movie 'Train arrival'. Seats selected", async () => {
    await clickElement(page, "[data-seance-id='142']");
    const actual1 = await getText(page, "h2");
    await expect(actual1).toContain("Train arrival");
    await clickElement(
      page,
      "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(1) > span:nth-child(2)"
    );
    await clickElement(
      page,
      "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(6) > span:nth-child(8)"
    );
    await clickElement(
        page,
        "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(4) > span:nth-child(5)"
      );
    await clickElement(page, ".buying .acceptin-button");
    const actual2 = await getText(page, "h2");
    await expect(actual2).toContain("Вы выбрали билеты:");
  });



  test("The movie 'Логан'. Seats selected", async () => {
    await clickElement(page, "[data-seance-id='129']");
    const actual1 = await getText(page, "h2");
    await expect(actual1).toContain("Логан");
    await clickElement(
      page,
      "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(6) > :nth-child(7)"
    );
    
    await clickElement(page, ".buying .acceptin-button");
    const actual2 = await getText(page, "h2");
    await expect(actual2).toContain("Вы выбрали билеты:");
  });

});