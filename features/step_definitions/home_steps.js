
const { Given, Then, When, And, But } = require('cucumber');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;

chai.use(chaiAsPromised);

var pagina_home = require('../pages/page-home-americanas.js');
var pagina_principal = new pagina_home();

//browser.waitForAngularEnabled(true);
//browser.driver.manage().window().maximize();
browser.ignoreSynchronization = true;

Given('que eu esteja na pagina inicial da Americanas', {timeout: 2 * 5000}, async function() {
    await pagina_principal.visitar_pagina_principal();
    await expect(browser.getCurrentUrl()).to.eventually.equal('https://www.americanas.com.br/');
});

When('realizar uma busca de um produto existente', {timeout: 2 * 5000}, async function() {
    //await pagina_principal.procurar_produto('ps4');
    await element(by.id('h_search-input')).sendKeys('ps4');
    await element(by.id('h_search-btn')).click();
});

Then('vejo o resultado da pesquisa do produto existente', {timeout: 2 * 5000}, async function () {
    await expect(element(by.css('h1.page-title')).getText()).to.eventually.equal('ps4');
});

