Feature('Tutorial');

Scenario('test something',  async ({ I }) => {        
    I.amOnPage('file:///' + __filename.replace('Tutorial_test.js', 'test.html').replace(/\\/g, '/'));    
    I.click('#alert-btn');    
    I.wait(2);
    console.log('Popup text: ' + await I.grabPopupText());        
    I.acceptPopup();    
    console.log('Button text: ' + await I.grabTextFrom('#alert-btn'));    
    I.wait(2);
    /*
    pause();
    I.click('#alert-btn');    
    console.log('Text in dialog: ' + await I.grabPopupText());
    
    
    I.wait(3);
    
    //I.click('#select1');
    I.scrollIntoView(`//option[contains(.,'Option B')]`);
    I.wait(3);
    console.log('here');
    */
});
