Feature('Tutorial');

Scenario('test something',  async ({ I }) => {        
    I.amOnPage('file:///' + __filename.replace('Tutorial_test.js', 'test.html').replace(/\\/g, '/'));    
    
    I.click('#alert-box-btn');        
    I.wait(1);
    console.log('Alert box text: ' + await I.grabPopupText());
    I.acceptPopup();        
    I.wait(1);
    
    I.click('#confirm-box-btn');
    I.wait(1);
    console.log('Confirm box text: ' + await I.grabPopupText());
    I.acceptPopup();        
    I.wait(1);

    I.click('#confirm-box-btn');
    I.wait(1);
    console.log('Confirm box text: ' + await I.grabPopupText());
    I.cancelPopup();
    I.wait(1);
});
