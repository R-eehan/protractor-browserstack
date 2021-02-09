exports.config = {
  'specs': [ '../specs/single.js' ],
  'browserstackUser': process.env.BROWSERSTACK_USERNAME,
  'browserstackKey': process.env.BROWSERSTACK_ACCESS_KEY, 

  'capabilities': {
    'build': 'Jenkins + Protractor with proxy',
    'name': 'no acceptSslCert',
    'browserName': 'Chrome',
    'browser_version': 'latest',
    'os': 'OS X',
    'os_version': 'Catalina',
    'resolution': '1024x768',
    'browserstack.debug': 'true',
    // 'browserstack.networkLogs': 'true',
    'browserstack.console': 'verbose'
  }
};
