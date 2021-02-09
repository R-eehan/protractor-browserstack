exports.config = {
  'specs': [ '../specs/single.js' ],
  'browserstackUser': process.env.BROWSERSTACK_USERNAME,
  'browserstackKey': process.env.BROWSERSTACK_ACCESS_KEY,
  'capabilities': {
    'browserstack.local': process.env.BROWSERSTACK_LOCAL,
    'browserstack.localIdentifier': process.env.BROWSERSTACK_LOCAL_IDENTIFIER,
    'build': process.env.BROWSERSTACK_BUILD_NAME,
    'name': 'With acceptSslCerts',
    'browserName': 'Chrome',
    'browser_version': 'latest',
    'os': 'OS X',
    'os_version': 'Catalina',
    'resolution': '1024x768',
    'browserstack.debug': 'true',
    'browserstack.networkLogs': 'true',
    'browserstack.console': 'verbose'
  }
};
