const { createPublicKey } = require("crypto");

module.exports = {
    '@tags': ['google'],
    'Google advanced search: Elon Musk'(browser) {
        const mainQuery = 'Elon Musk';

        const mainQueryInputSelector = '#xX4UFf';
        const languageDropdownOpenerSelector = '#lr_button';
        const languageDropdownValueSelector = '.goog-menuitem[value="lang_it"]';
        const lastUpdateDropdownOpenSelector = '#as_qdr_button';
        const lastUpdateDropdownValueSelector = '.goog-menuitem[value="m"]';
        const submitButtonSelector = '.jfk-button[type="submit"]';

        const resultsPageQuerySelector = `#searchform input[name="q"][value="${mainQuery}"]`;

        browser
            .url('https://www.google.com/advanced_search')
            .setValue(mainQueryInputSelector, mainQuery)
            .click(languageDropdownOpenerSelector)
            .click(languageDropdownValueSelector)
            .click(lastUpdateDropdownOpenSelector)
            .click(lastUpdateDropdownValueSelector)
            .click(submitButtonSelector)
            .assert.urlContains('as_q=Elon+Musk', 'Params: Query is Elon Musk')
            .assert.urlContains('lr=lang_it', 'Params: Language is Italian')
            .assert.urlContains('as_qdr=m', 'Params: Last updated is last month')
        
        browser.assert.visible(resultsPageQuerySelector, 'UI: Elon Musk is set in the query input')

        browser.saveScreenshot('tests_output/google.png')
    }
}