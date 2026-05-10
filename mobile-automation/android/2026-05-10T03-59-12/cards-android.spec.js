'use strict';
const { remote } = require('webdriverio');

// ─── TD Bank USA — Card Management & Controls ────────────────────────────────────────────────
// Platform: Android | Automation: UiAutomator2
// Generated: 2026-05-10T03:59:02.157Z

const CAPABILITIES = {
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:appPackage': 'com.tdbank.android.mobile',
  'appium:appActivity': '.MainActivity',
  'appium:deviceName': 'Pixel 7',
  'appium:platformVersion': '14',
  'appium:noReset': true,
  'appium:newCommandTimeout': 120,
};

const WDIO_OPTIONS = {
  hostname: process.env.APPIUM_HOST || '127.0.0.1',
  port: parseInt(process.env.APPIUM_PORT || '4723'),
  path: '/wd/hub',
  capabilities: CAPABILITIES,
  logLevel: 'warn',
};

const TEST_USER = {
  username: 'testuser@td.com',
  password: 'TDBank@2024',
  accountLast4: '1234',
};


// ─── Helpers ──────────────────────────────────────────────────────────────────
async function waitForElement(driver, selector, timeout = 10000) {
  const el = await driver.$(selector);
  await el.waitForDisplayed({ timeout });
  return el;
}

async function tapElement(driver, selector, timeout = 10000) {
  const el = await waitForElement(driver, selector, timeout);
  await el.click();
}

async function typeText(driver, selector, text, clear = true) {
  const el = await waitForElement(driver, selector);
  if (clear) await el.clearValue();
  await el.setValue(text);
}

async function hideKeyboard(driver) {
  try { await driver.hideKeyboard(); } catch (_) { /* keyboard already hidden */ }
}

async function scrollToElement(driver, selector) {
  const el = await driver.$(selector);
  await driver.execute('mobile: scroll', { element: el.elementId, toVisible: true });
  return el;
}

async function takeScreenshot(driver, name) {
  await driver.saveScreenshot(`./screenshots/${name}_${Date.now()}.png`);
}

async function assertText(driver, selector, expected) {
  const el = await waitForElement(driver, selector);
  const text = await el.getText();
  expect(text).toContain(expected);
}

async function isElementDisplayed(driver, selector) {
  try {
    const el = await driver.$(selector);
    return await el.isDisplayed();
  } catch (_) { return false; }
}


describe('Card Management & Controls', () => {
  let driver;

  before(async () => {
    driver = await remote(WDIO_OPTIONS);
    await driver.setImplicitTimeout(0); // use explicit waits only
  });

  after(async () => {
    if (driver) await driver.deleteSession();
  });

  afterEach(async function () {
    if (this.currentTest.state === 'failed') {
      await takeScreenshot(driver, this.currentTest.title.replace(/\s+/g, '_'));
    }
  });

  it('CARD-01: View debit card details & status', async () => {
    // Type: Positive
    // Steps: Launch app → Wait for home screen → Navigate to feature → Interact with element → Assert expected state → Capture screenshot → Verify data displayed
    await driver.activateApp('com.tdbank.android.mobile');
    await driver.waitUntil(async () => {
      return await isElementDisplayed(driver, '~appLoaded');
    }, { timeout: 15000, timeoutMsg: 'App did not load in time' });

    // TODO: implement test steps
    // Step 1: Launch app
    // Step 2: Wait for home screen
    // Step 3: Navigate to feature
    // Step 4: Interact with element
    // Step 5: Assert expected state
    // Step 6: Capture screenshot
    // Step 7: Verify data displayed

    // Assert
    const statusEl = await driver.$('~testStatus');
    await expect(statusEl).toBeDisplayed();
  });

  it('CARD-02: Lock debit card instantly', async () => {
    // Type: Positive
    // Steps: Launch app → Wait for home screen → Navigate to feature → Interact with element → Assert expected state → Capture screenshot → Verify data displayed
    await driver.activateApp('com.tdbank.android.mobile');
    await driver.waitUntil(async () => {
      return await isElementDisplayed(driver, '~appLoaded');
    }, { timeout: 15000, timeoutMsg: 'App did not load in time' });

    // TODO: implement test steps
    // Step 1: Launch app
    // Step 2: Wait for home screen
    // Step 3: Navigate to feature
    // Step 4: Interact with element
    // Step 5: Assert expected state
    // Step 6: Capture screenshot
    // Step 7: Verify data displayed

    // Assert
    const statusEl = await driver.$('~testStatus');
    await expect(statusEl).toBeDisplayed();
  });

  it('CARD-03: Unlock debit card', async () => {
    // Type: Positive
    // Steps: Launch app → Wait for home screen → Navigate to feature → Interact with element → Assert expected state → Capture screenshot → Verify data displayed
    await driver.activateApp('com.tdbank.android.mobile');
    await driver.waitUntil(async () => {
      return await isElementDisplayed(driver, '~appLoaded');
    }, { timeout: 15000, timeoutMsg: 'App did not load in time' });

    // TODO: implement test steps
    // Step 1: Launch app
    // Step 2: Wait for home screen
    // Step 3: Navigate to feature
    // Step 4: Interact with element
    // Step 5: Assert expected state
    // Step 6: Capture screenshot
    // Step 7: Verify data displayed

    // Assert
    const statusEl = await driver.$('~testStatus');
    await expect(statusEl).toBeDisplayed();
  });

  it('CARD-04: Report lost/stolen debit card', async () => {
    // Type: Positive
    // Steps: Launch app → Wait for home screen → Navigate to feature → Interact with element → Assert expected state → Capture screenshot → Verify data displayed
    await driver.activateApp('com.tdbank.android.mobile');
    await driver.waitUntil(async () => {
      return await isElementDisplayed(driver, '~appLoaded');
    }, { timeout: 15000, timeoutMsg: 'App did not load in time' });

    // TODO: implement test steps
    // Step 1: Launch app
    // Step 2: Wait for home screen
    // Step 3: Navigate to feature
    // Step 4: Interact with element
    // Step 5: Assert expected state
    // Step 6: Capture screenshot
    // Step 7: Verify data displayed

    // Assert
    const statusEl = await driver.$('~testStatus');
    await expect(statusEl).toBeDisplayed();
  });

  it('CARD-05: Request replacement debit card', async () => {
    // Type: Positive
    // Steps: Launch app → Wait for home screen → Navigate to feature → Interact with element → Assert expected state → Capture screenshot → Verify data displayed
    await driver.activateApp('com.tdbank.android.mobile');
    await driver.waitUntil(async () => {
      return await isElementDisplayed(driver, '~appLoaded');
    }, { timeout: 15000, timeoutMsg: 'App did not load in time' });

    // TODO: implement test steps
    // Step 1: Launch app
    // Step 2: Wait for home screen
    // Step 3: Navigate to feature
    // Step 4: Interact with element
    // Step 5: Assert expected state
    // Step 6: Capture screenshot
    // Step 7: Verify data displayed

    // Assert
    const statusEl = await driver.$('~testStatus');
    await expect(statusEl).toBeDisplayed();
  });

  it('CARD-06: View credit card details & APR', async () => {
    // Type: Positive
    // Steps: Launch app → Wait for home screen → Navigate to feature → Interact with element → Assert expected state → Capture screenshot → Verify data displayed
    await driver.activateApp('com.tdbank.android.mobile');
    await driver.waitUntil(async () => {
      return await isElementDisplayed(driver, '~appLoaded');
    }, { timeout: 15000, timeoutMsg: 'App did not load in time' });

    // TODO: implement test steps
    // Step 1: Launch app
    // Step 2: Wait for home screen
    // Step 3: Navigate to feature
    // Step 4: Interact with element
    // Step 5: Assert expected state
    // Step 6: Capture screenshot
    // Step 7: Verify data displayed

    // Assert
    const statusEl = await driver.$('~testStatus');
    await expect(statusEl).toBeDisplayed();
  });

  it('CARD-07: Lock credit card instantly', async () => {
    // Type: Positive
    // Steps: Launch app → Wait for home screen → Navigate to feature → Interact with element → Assert expected state → Capture screenshot → Verify data displayed
    await driver.activateApp('com.tdbank.android.mobile');
    await driver.waitUntil(async () => {
      return await isElementDisplayed(driver, '~appLoaded');
    }, { timeout: 15000, timeoutMsg: 'App did not load in time' });

    // TODO: implement test steps
    // Step 1: Launch app
    // Step 2: Wait for home screen
    // Step 3: Navigate to feature
    // Step 4: Interact with element
    // Step 5: Assert expected state
    // Step 6: Capture screenshot
    // Step 7: Verify data displayed

    // Assert
    const statusEl = await driver.$('~testStatus');
    await expect(statusEl).toBeDisplayed();
  });

  it('CARD-08: Unlock credit card', async () => {
    // Type: Positive
    // Steps: Launch app → Wait for home screen → Navigate to feature → Interact with element → Assert expected state → Capture screenshot → Verify data displayed
    await driver.activateApp('com.tdbank.android.mobile');
    await driver.waitUntil(async () => {
      return await isElementDisplayed(driver, '~appLoaded');
    }, { timeout: 15000, timeoutMsg: 'App did not load in time' });

    // TODO: implement test steps
    // Step 1: Launch app
    // Step 2: Wait for home screen
    // Step 3: Navigate to feature
    // Step 4: Interact with element
    // Step 5: Assert expected state
    // Step 6: Capture screenshot
    // Step 7: Verify data displayed

    // Assert
    const statusEl = await driver.$('~testStatus');
    await expect(statusEl).toBeDisplayed();
  });

  it('CARD-09: Report lost/stolen credit card', async () => {
    // Type: Positive
    // Steps: Launch app → Wait for home screen → Navigate to feature → Interact with element → Assert expected state → Capture screenshot → Verify data displayed
    await driver.activateApp('com.tdbank.android.mobile');
    await driver.waitUntil(async () => {
      return await isElementDisplayed(driver, '~appLoaded');
    }, { timeout: 15000, timeoutMsg: 'App did not load in time' });

    // TODO: implement test steps
    // Step 1: Launch app
    // Step 2: Wait for home screen
    // Step 3: Navigate to feature
    // Step 4: Interact with element
    // Step 5: Assert expected state
    // Step 6: Capture screenshot
    // Step 7: Verify data displayed

    // Assert
    const statusEl = await driver.$('~testStatus');
    await expect(statusEl).toBeDisplayed();
  });

  it('CARD-10: Set international travel notification', async () => {
    // Type: Positive
    // Steps: Launch app → Wait for home screen → Navigate to feature → Interact with element → Assert expected state → Capture screenshot → Verify data displayed
    await driver.activateApp('com.tdbank.android.mobile');
    await driver.waitUntil(async () => {
      return await isElementDisplayed(driver, '~appLoaded');
    }, { timeout: 15000, timeoutMsg: 'App did not load in time' });

    // TODO: implement test steps
    // Step 1: Launch app
    // Step 2: Wait for home screen
    // Step 3: Navigate to feature
    // Step 4: Interact with element
    // Step 5: Assert expected state
    // Step 6: Capture screenshot
    // Step 7: Verify data displayed

    // Assert
    const statusEl = await driver.$('~testStatus');
    await expect(statusEl).toBeDisplayed();
  });

  it('CARD-11: Card PIN change via app', async () => {
    // Type: Positive
    // Steps: Launch app → Wait for home screen → Navigate to feature → Interact with element → Assert expected state → Capture screenshot → Verify data displayed
    await driver.activateApp('com.tdbank.android.mobile');
    await driver.waitUntil(async () => {
      return await isElementDisplayed(driver, '~appLoaded');
    }, { timeout: 15000, timeoutMsg: 'App did not load in time' });

    // TODO: implement test steps
    // Step 1: Launch app
    // Step 2: Wait for home screen
    // Step 3: Navigate to feature
    // Step 4: Interact with element
    // Step 5: Assert expected state
    // Step 6: Capture screenshot
    // Step 7: Verify data displayed

    // Assert
    const statusEl = await driver.$('~testStatus');
    await expect(statusEl).toBeDisplayed();
  });

  it('CARD-12: Transaction alert toggle on/off', async () => {
    // Type: Positive
    // Steps: Launch app → Wait for home screen → Navigate to feature → Interact with element → Assert expected state → Capture screenshot → Verify data displayed
    await driver.activateApp('com.tdbank.android.mobile');
    await driver.waitUntil(async () => {
      return await isElementDisplayed(driver, '~appLoaded');
    }, { timeout: 15000, timeoutMsg: 'App did not load in time' });

    // TODO: implement test steps
    // Step 1: Launch app
    // Step 2: Wait for home screen
    // Step 3: Navigate to feature
    // Step 4: Interact with element
    // Step 5: Assert expected state
    // Step 6: Capture screenshot
    // Step 7: Verify data displayed

    // Assert
    const statusEl = await driver.$('~testStatus');
    await expect(statusEl).toBeDisplayed();
  });

  it('CARD-13: Contactless payments enable/disable', async () => {
    // Type: Positive
    // Steps: Launch app → Wait for home screen → Navigate to feature → Interact with element → Assert expected state → Capture screenshot → Verify data displayed
    await driver.activateApp('com.tdbank.android.mobile');
    await driver.waitUntil(async () => {
      return await isElementDisplayed(driver, '~appLoaded');
    }, { timeout: 15000, timeoutMsg: 'App did not load in time' });

    // TODO: implement test steps
    // Step 1: Launch app
    // Step 2: Wait for home screen
    // Step 3: Navigate to feature
    // Step 4: Interact with element
    // Step 5: Assert expected state
    // Step 6: Capture screenshot
    // Step 7: Verify data displayed

    // Assert
    const statusEl = await driver.$('~testStatus');
    await expect(statusEl).toBeDisplayed();
  });

  it('CARD-14: International transactions enable/disable', async () => {
    // Type: Security
    // Steps: Launch app → Verify security context → Attempt restricted action → Assert access denied / protection active → Verify audit log entry → Capture screenshot
    await driver.activateApp('com.tdbank.android.mobile');
    await driver.waitUntil(async () => {
      return await isElementDisplayed(driver, '~appLoaded');
    }, { timeout: 15000, timeoutMsg: 'App did not load in time' });

    // TODO: implement test steps
    // Step 1: Launch app
    // Step 2: Verify security context
    // Step 3: Attempt restricted action
    // Step 4: Assert access denied / protection active
    // Step 5: Verify audit log entry
    // Step 6: Capture screenshot

    // Assert
    const statusEl = await driver.$('~testStatus');
    await expect(statusEl).toBeDisplayed();
  });

  it('CARD-15: Daily ATM withdrawal limit adjustment', async () => {
    // Type: Positive
    // Steps: Launch app → Wait for home screen → Navigate to feature → Interact with element → Assert expected state → Capture screenshot → Verify data displayed
    await driver.activateApp('com.tdbank.android.mobile');
    await driver.waitUntil(async () => {
      return await isElementDisplayed(driver, '~appLoaded');
    }, { timeout: 15000, timeoutMsg: 'App did not load in time' });

    // TODO: implement test steps
    // Step 1: Launch app
    // Step 2: Wait for home screen
    // Step 3: Navigate to feature
    // Step 4: Interact with element
    // Step 5: Assert expected state
    // Step 6: Capture screenshot
    // Step 7: Verify data displayed

    // Assert
    const statusEl = await driver.$('~testStatus');
    await expect(statusEl).toBeDisplayed();
  });

  it('CARD-16: Merchant category spend controls', async () => {
    // Type: Positive
    // Steps: Launch app → Wait for home screen → Navigate to feature → Interact with element → Assert expected state → Capture screenshot → Verify data displayed
    await driver.activateApp('com.tdbank.android.mobile');
    await driver.waitUntil(async () => {
      return await isElementDisplayed(driver, '~appLoaded');
    }, { timeout: 15000, timeoutMsg: 'App did not load in time' });

    // TODO: implement test steps
    // Step 1: Launch app
    // Step 2: Wait for home screen
    // Step 3: Navigate to feature
    // Step 4: Interact with element
    // Step 5: Assert expected state
    // Step 6: Capture screenshot
    // Step 7: Verify data displayed

    // Assert
    const statusEl = await driver.$('~testStatus');
    await expect(statusEl).toBeDisplayed();
  });

  it('CARD-17: Add debit card to Apple Pay (iOS)', async () => {
    // Type: Positive
    // Steps: Launch app → Wait for home screen → Navigate to feature → Interact with element → Assert expected state → Capture screenshot → Verify data displayed
    await driver.activateApp('com.tdbank.android.mobile');
    await driver.waitUntil(async () => {
      return await isElementDisplayed(driver, '~appLoaded');
    }, { timeout: 15000, timeoutMsg: 'App did not load in time' });

    // TODO: implement test steps
    // Step 1: Launch app
    // Step 2: Wait for home screen
    // Step 3: Navigate to feature
    // Step 4: Interact with element
    // Step 5: Assert expected state
    // Step 6: Capture screenshot
    // Step 7: Verify data displayed

    // Assert
    const statusEl = await driver.$('~testStatus');
    await expect(statusEl).toBeDisplayed();
  });

  it('CARD-18: Add debit card to Google Pay (Android)', async () => {
    // Type: Positive
    // Steps: Launch app → Wait for home screen → Navigate to feature → Interact with element → Assert expected state → Capture screenshot → Verify data displayed
    await driver.activateApp('com.tdbank.android.mobile');
    await driver.waitUntil(async () => {
      return await isElementDisplayed(driver, '~appLoaded');
    }, { timeout: 15000, timeoutMsg: 'App did not load in time' });

    // TODO: implement test steps
    // Step 1: Launch app
    // Step 2: Wait for home screen
    // Step 3: Navigate to feature
    // Step 4: Interact with element
    // Step 5: Assert expected state
    // Step 6: Capture screenshot
    // Step 7: Verify data displayed

    // Assert
    const statusEl = await driver.$('~testStatus');
    await expect(statusEl).toBeDisplayed();
  });

  it('CARD-19: Add credit card to Apple Pay (iOS)', async () => {
    // Type: Positive
    // Steps: Launch app → Wait for home screen → Navigate to feature → Interact with element → Assert expected state → Capture screenshot → Verify data displayed
    await driver.activateApp('com.tdbank.android.mobile');
    await driver.waitUntil(async () => {
      return await isElementDisplayed(driver, '~appLoaded');
    }, { timeout: 15000, timeoutMsg: 'App did not load in time' });

    // TODO: implement test steps
    // Step 1: Launch app
    // Step 2: Wait for home screen
    // Step 3: Navigate to feature
    // Step 4: Interact with element
    // Step 5: Assert expected state
    // Step 6: Capture screenshot
    // Step 7: Verify data displayed

    // Assert
    const statusEl = await driver.$('~testStatus');
    await expect(statusEl).toBeDisplayed();
  });

  it('CARD-20: View credit card rewards balance', async () => {
    // Type: Positive
    // Steps: Launch app → Wait for home screen → Navigate to feature → Interact with element → Assert expected state → Capture screenshot → Verify data displayed
    await driver.activateApp('com.tdbank.android.mobile');
    await driver.waitUntil(async () => {
      return await isElementDisplayed(driver, '~appLoaded');
    }, { timeout: 15000, timeoutMsg: 'App did not load in time' });

    // TODO: implement test steps
    // Step 1: Launch app
    // Step 2: Wait for home screen
    // Step 3: Navigate to feature
    // Step 4: Interact with element
    // Step 5: Assert expected state
    // Step 6: Capture screenshot
    // Step 7: Verify data displayed

    // Assert
    const statusEl = await driver.$('~testStatus');
    await expect(statusEl).toBeDisplayed();
  });

  it('CARD-21: Redeem rewards points for statement credit', async () => {
    // Type: Positive
    // Steps: Launch app → Wait for home screen → Navigate to feature → Interact with element → Assert expected state → Capture screenshot → Verify data displayed
    await driver.activateApp('com.tdbank.android.mobile');
    await driver.waitUntil(async () => {
      return await isElementDisplayed(driver, '~appLoaded');
    }, { timeout: 15000, timeoutMsg: 'App did not load in time' });

    // TODO: implement test steps
    // Step 1: Launch app
    // Step 2: Wait for home screen
    // Step 3: Navigate to feature
    // Step 4: Interact with element
    // Step 5: Assert expected state
    // Step 6: Capture screenshot
    // Step 7: Verify data displayed

    // Assert
    const statusEl = await driver.$('~testStatus');
    await expect(statusEl).toBeDisplayed();
  });

  it('CARD-22: Credit card statement — current cycle', async () => {
    // Type: Positive
    // Steps: Launch app → Wait for home screen → Navigate to feature → Interact with element → Assert expected state → Capture screenshot → Verify data displayed
    await driver.activateApp('com.tdbank.android.mobile');
    await driver.waitUntil(async () => {
      return await isElementDisplayed(driver, '~appLoaded');
    }, { timeout: 15000, timeoutMsg: 'App did not load in time' });

    // TODO: implement test steps
    // Step 1: Launch app
    // Step 2: Wait for home screen
    // Step 3: Navigate to feature
    // Step 4: Interact with element
    // Step 5: Assert expected state
    // Step 6: Capture screenshot
    // Step 7: Verify data displayed

    // Assert
    const statusEl = await driver.$('~testStatus');
    await expect(statusEl).toBeDisplayed();
  });

  it('CARD-23: Autopay setup — minimum vs full payment', async () => {
    // Type: Positive
    // Steps: Launch app → Wait for home screen → Navigate to feature → Interact with element → Assert expected state → Capture screenshot → Verify data displayed
    await driver.activateApp('com.tdbank.android.mobile');
    await driver.waitUntil(async () => {
      return await isElementDisplayed(driver, '~appLoaded');
    }, { timeout: 15000, timeoutMsg: 'App did not load in time' });

    // TODO: implement test steps
    // Step 1: Launch app
    // Step 2: Wait for home screen
    // Step 3: Navigate to feature
    // Step 4: Interact with element
    // Step 5: Assert expected state
    // Step 6: Capture screenshot
    // Step 7: Verify data displayed

    // Assert
    const statusEl = await driver.$('~testStatus');
    await expect(statusEl).toBeDisplayed();
  });

  it('CARD-24: Minimum payment due date display', async () => {
    // Type: Positive
    // Steps: Launch app → Wait for home screen → Navigate to feature → Interact with element → Assert expected state → Capture screenshot → Verify data displayed
    await driver.activateApp('com.tdbank.android.mobile');
    await driver.waitUntil(async () => {
      return await isElementDisplayed(driver, '~appLoaded');
    }, { timeout: 15000, timeoutMsg: 'App did not load in time' });

    // TODO: implement test steps
    // Step 1: Launch app
    // Step 2: Wait for home screen
    // Step 3: Navigate to feature
    // Step 4: Interact with element
    // Step 5: Assert expected state
    // Step 6: Capture screenshot
    // Step 7: Verify data displayed

    // Assert
    const statusEl = await driver.$('~testStatus');
    await expect(statusEl).toBeDisplayed();
  });

  it('CARD-25: Dispute a transaction flow', async () => {
    // Type: Positive
    // Steps: Launch app → Wait for home screen → Navigate to feature → Interact with element → Assert expected state → Capture screenshot → Verify data displayed
    await driver.activateApp('com.tdbank.android.mobile');
    await driver.waitUntil(async () => {
      return await isElementDisplayed(driver, '~appLoaded');
    }, { timeout: 15000, timeoutMsg: 'App did not load in time' });

    // TODO: implement test steps
    // Step 1: Launch app
    // Step 2: Wait for home screen
    // Step 3: Navigate to feature
    // Step 4: Interact with element
    // Step 5: Assert expected state
    // Step 6: Capture screenshot
    // Step 7: Verify data displayed

    // Assert
    const statusEl = await driver.$('~testStatus');
    await expect(statusEl).toBeDisplayed();
  });
});
