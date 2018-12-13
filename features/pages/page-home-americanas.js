'use strict'

class pagina_home {
    constructor() {
        this.campo_procurar = element(by.id('h_search-input'));
        this.btn_procurar = element(by.id('h_search-btn'));
        this.resultado_pesquisa = element(by.css('h1.page-title'));
    };

    procurar_produto(produto) {
        this.campo_procura.sendKeys(produto);
        //this.campo_procura.sendKeys('ps4');
        this.btn_procurar.click();
        browser.waitForAngular();
    };

    visitar_pagina_principal() {
        return browser.get('')
    }
}

module.exports = pagina_home;