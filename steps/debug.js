const { I } = inject();

When('I am on test page', () => {    
    let localHtml = 'file:///' + __filename.replace(/\\/g, '/').replace(/steps\/debug\.js/g, 'test.html');
    console.log(localHtml);
    I.amOnPage(localHtml);
})

Then('I debug', async () => {

    I.click('#alert-box-btn');
    I.wait(1);
    console.log('Alert box text: ' + await I.grabPopupText());
    I.acceptPopup();
    I.wait(2);
});