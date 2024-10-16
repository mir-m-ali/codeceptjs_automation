const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://www.google.com',
      browser: process.env.BROWSER != undefined ? process.env.BROWSER : 'MicrosoftEdge',
      windowSize: 'maximize'
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'codeceptjs',
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  },
 
  gherkin: {
    features: './features/**/*.feature',
    steps: './steps/*.js'
  },
 
}