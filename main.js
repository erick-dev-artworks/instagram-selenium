const { Builder, By, Key, until } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
 
function sleep(ms) {
    return new Promise((resolve) => { setTimeout(resolve, ms); })
}


const options = new firefox.Options();
 

// Create a new WebDriver instance
const driver = new Builder()
  .forBrowser('firefox') 
  .setFirefoxOptions(options)
  .build();

// Open Instagram and input text into the specified input field
async function inputText() {
    await driver.get('https://www.instagram.com/');

    // Wait for some element to appear (for demonstration purposes)
    await driver.wait(until.elementLocated(By.className('_aa4b')), 5000);

    // Find the input field by class name and input text
    const inputField = await driver.findElement(By.className('_aa4b'));
    await inputField.sendKeys('****', Key.RETURN);
 
    const passwordInput = await driver.findElement(By.css('[aria-label="Password"]'));
    await passwordInput.sendKeys('****', Key.RETURN);

    

    console.log('Text input successful.');
}

// Run the script
inputText();
