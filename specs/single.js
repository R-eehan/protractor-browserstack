const { browser } = require('protractor');
var remote = require('selenium-webdriver/remote')
describe('Functionality', function() {  
    
  it('proxy adherance check', function() {
  browser.driver.get('https://flipkart.com').then(function(){
    browser.driver.sleep(5000).then(function(){
      browser.driver.getTitle();
      })
    })
  });

});
