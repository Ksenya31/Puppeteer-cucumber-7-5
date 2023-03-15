
const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After, setDefaultTimeout } = require("@cucumber/cucumber");
const { getText, clickElement } = require("../../lib/commands.js");

setDefaultTimeout(60000);

Before(async function () {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given("I open a main {string} page", { timeout: 60000 }, async function (string) {
  return await this.page.goto(`http://qamid.tmweb.ru/client/${string}`, {
    setTimeout: 20000,
  });
});

When('no click tickets', async function () {
  await clickElement(this.page, "[data-seance-id='142']");
  await clickElement(this.page, ".buying .acceptin-button");
});

When('click tickets Train arrival', async function () {
  await clickElement(this.page, "[data-seance-id='142']");
  await clickElement(this.page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(1) > span:nth-child(2)")
  await clickElement(this.page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(6) > span:nth-child(8)")
  await clickElement(this.page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(4) > span:nth-child(5)")
  await clickElement(this.page, ".buying .acceptin-button");
});

When('click tickets Logan', async function () {
  await clickElement(this.page, "[data-seance-id='129']");
  await clickElement(this.page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(6) > :nth-child(7)")
  await clickElement(this.page, ".buying .acceptin-button");
});


When("user search by {string}", async function (string) {
  return await clickElement(this.page, "header");
});

Then("I sees {string}", async function (string) {
  const actual = await getText(this.page, "header");
  const expected = await string;
  expect(actual).contains(expected);
});

Then("I sees tickets {string}", async function (string) {
  const actual = await getText(this.page, "h2");
  const expected = await string;
  expect(actual).contains(expected);
});