'use strict';
const { remote } = require('webdriverio');

// ─── TD Bank USA — Transfers, Payments & Mobile Deposit ────────────────────────────────────────────────
// Platform: iOS | Automation: XCUITest
// Generated: 2026-05-10T04:15:15.575Z

const CAPABILITIES = {
  platformName: 'iOS',
  'appium:automationName': 'XCUITest',
  'appium:bundleId': 'com.tdbank.ios.mobile',
  'appium:deviceName': 'iPhone 15 Pro',
  'appium:platformVersion': '17.0',
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


describe('Transfers, Payments & Mobile Deposit', () => {
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

  it('TRF-01: Internal transfer between own accounts', async () => {
    // Type: Positive
    // Steps: Launch app → Wait for home screen → Navigate to feature → Interact with element → Assert expected state → Capture screenshot → Verify data displayed
    await driver.activateApp('com.tdbank.ios.mobile');
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

  it('TRF-02: External ACH bank transfer', async () => {
    // Type: Positive
    // Steps: Launch app → Wait for home screen → Navigate to feature → Interact with element → Assert expected state → Capture screenshot → Verify data displayed
    await driver.activateApp('com.tdbank.ios.mobile');
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

  it('TRF-03: Domestic wire transfer flow', async () => {
    // Type: Positive
    // Steps: Launch app → Wait for home screen → Navigate to feature → Interact with element → Assert expected state → Capture screenshot → Verify data displayed
    await driver.activateApp('com.tdbank.ios.mobile');
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

  it('TRF-04: Zelle — send money by email', async () => {
    // Type: Positive
    // Steps: Launch app → Wait for home screen → Navigate to feature → Interact with element → Assert expected state → Capture screenshot → Verify data displayed
    await driver.activateApp('com.tdbank.ios.mobile');
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

  it('TRF-05: Zelle — send money by phone number', async () => {
    // Type: Positive
    // Steps: Launch app → Wait for home screen → Navigate to feature → Interact with element → Assert expected state → Capture screenshot → Verify data displayed
    await driver.activateApp('com.tdbank.ios.mobile');
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

  it('TRF-06: Transfer with insufficient funds rejected', async () => {
    // Type: Negative
    // Steps: Launch app → Wait for home screen → Navigate to feature → Enter invalid data → Trigger error condition → Assert error message shown → Verify no data changed
    await driver.activateApp('com.tdbank.ios.mobile');
    await driver.waitUntil(async () => {
      return await isElementDisplayed(driver, '~appLoaded');
    }, { timeout: 15000, timeoutMsg: 'App did not load in time' });

    // TODO: implement test steps
    // Step 1: Launch app
    // Step 2: Wait for home screen
    // Step 3: Navigate to feature
    // Step 4: Enter invalid data
    // Step 5: Trigger error condition
    // Step 6: Assert error message shown
    // Step 7: Verify no data changed

    // Assert
    const statusEl = await driver.$('~testStatus');
    await expect(statusEl).toBeDisplayed();
  });

  it('TRF-07: Transfer daily limit enforcement', async () => {
    // Type: Security
    // Steps: Launch app → Verify security context → Attempt restricted action → Assert access denied / protection active → Verify audit log entry → Capture screenshot
    await driver.activateApp('com.tdbank.ios.mobile');
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

  it('TRF-08: Scheduled future-dated transfer', async () => {
    // Type: Positive
    // Steps: Launch app → Wait for home screen → Navigate to feature → Interact with element → Assert expected state → Capture screenshot → Verify data displayed
    await driver.activateApp('com.tdbank.ios.mobile');
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

  it('TRF-09: Recurring weekly/monthly transfer setup', async () => {
    // Type: Positive
    // Steps: Launch app → Wait for home screen → Navigate to feature → Interact with element → Assert expected state → Capture screenshot → Verify data displayed
    await driver.activateApp('com.tdbank.ios.mobile');
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

  it('TRF-10: Cancel pending scheduled transfer', async () => {
    // Type: Positive
    // Steps: Launch app → Wait for home screen → Navigate to feature → Interact with element → Assert expected state → Capture screenshot → Verify data displayed
    await driver.activateApp('com.tdbank.ios.mobile');
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

  it('TRF-11: Bill pay — add new payee', async () => {
    // Type: Positive
    // Steps: Launch app → Wait for home screen → Navigate to feature → Interact with element → Assert expected state → Capture screenshot → Verify data displayed
    await driver.activateApp('com.tdbank.ios.mobile');
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

  it('TRF-12: Bill pay — schedule one-time payment', async () => {
    // Type: Positive
    // Steps: Launch app → Wait for home screen → Navigate to feature → Interact with element → Assert expected state → Capture screenshot → Verify data displayed
    await driver.activateApp('com.tdbank.ios.mobile');
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

  it('TRF-13: Bill pay — set up autopay (recurring)', async () => {
    // Type: Positive
    // Steps: Launch app → Wait for home screen → Navigate to feature → Interact with element → Assert expected state → Capture screenshot → Verify data displayed
    await driver.activateApp('com.tdbank.ios.mobile');
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

  it('TRF-14: Bill pay — payment history view', async () => {
    // Type: Positive
    // Steps: Launch app → Wait for home screen → Navigate to feature → Interact with element → Assert expected state → Capture screenshot → Verify data displayed
    await driver.activateApp('com.tdbank.ios.mobile');
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

  it('TRF-15: Bill pay — edit and delete payee', async () => {
    // Type: Positive
    // Steps: Launch app → Wait for home screen → Navigate to feature → Interact with element → Assert expected state → Capture screenshot → Verify data displayed
    await driver.activateApp('com.tdbank.ios.mobile');
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

  it('TRF-16: Mobile deposit — capture cheque front', async () => {
    // Type: Positive
    // Steps: Launch app → Wait for home screen → Navigate to feature → Interact with element → Assert expected state → Capture screenshot → Verify data displayed
    await driver.activateApp('com.tdbank.ios.mobile');
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

  it('TRF-17: Mobile deposit — capture cheque back', async () => {
    // Type: Positive
    // Steps: Launch app → Wait for home screen → Navigate to feature → Interact with element → Assert expected state → Capture screenshot → Verify data displayed
    await driver.activateApp('com.tdbank.ios.mobile');
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

  it('TRF-18: Mobile deposit — amount entry & confirm', async () => {
    // Type: Positive
    // Steps: Launch app → Wait for home screen → Navigate to feature → Interact with element → Assert expected state → Capture screenshot → Verify data displayed
    await driver.activateApp('com.tdbank.ios.mobile');
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

  it('TRF-19: Mobile deposit — duplicate cheque detection', async () => {
    // Type: Security
    // Steps: Launch app → Verify security context → Attempt restricted action → Assert access denied / protection active → Verify audit log entry → Capture screenshot
    await driver.activateApp('com.tdbank.ios.mobile');
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

  it('TRF-20: Mobile deposit — blurry image rejection', async () => {
    // Type: Negative
    // Steps: Launch app → Wait for home screen → Navigate to feature → Enter invalid data → Trigger error condition → Assert error message shown → Verify no data changed
    await driver.activateApp('com.tdbank.ios.mobile');
    await driver.waitUntil(async () => {
      return await isElementDisplayed(driver, '~appLoaded');
    }, { timeout: 15000, timeoutMsg: 'App did not load in time' });

    // TODO: implement test steps
    // Step 1: Launch app
    // Step 2: Wait for home screen
    // Step 3: Navigate to feature
    // Step 4: Enter invalid data
    // Step 5: Trigger error condition
    // Step 6: Assert error message shown
    // Step 7: Verify no data changed

    // Assert
    const statusEl = await driver.$('~testStatus');
    await expect(statusEl).toBeDisplayed();
  });

  it('TRF-21: Transfer confirmation with biometric sign', async () => {
    // Type: Security
    // Steps: Launch app → Verify security context → Attempt restricted action → Assert access denied / protection active → Verify audit log entry → Capture screenshot
    await driver.activateApp('com.tdbank.ios.mobile');
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

  it('TRF-22: Transfer receipt generation & sharing', async () => {
    // Type: Positive
    // Steps: Launch app → Wait for home screen → Navigate to feature → Interact with element → Assert expected state → Capture screenshot → Verify data displayed
    await driver.activateApp('com.tdbank.ios.mobile');
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

  it('TRF-23: International wire — SWIFT/IBAN entry', async () => {
    // Type: Positive
    // Steps: Launch app → Wait for home screen → Navigate to feature → Interact with element → Assert expected state → Capture screenshot → Verify data displayed
    await driver.activateApp('com.tdbank.ios.mobile');
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

  it('TRF-24: Transfer memo/note field validation', async () => {
    // Type: Validation
    // Steps: Launch app → Navigate to form → Enter boundary/invalid value → Trigger validation → Assert validation message → Verify field state
    await driver.activateApp('com.tdbank.ios.mobile');
    await driver.waitUntil(async () => {
      return await isElementDisplayed(driver, '~appLoaded');
    }, { timeout: 15000, timeoutMsg: 'App did not load in time' });

    // TODO: implement test steps
    // Step 1: Launch app
    // Step 2: Navigate to form
    // Step 3: Enter boundary/invalid value
    // Step 4: Trigger validation
    // Step 5: Assert validation message
    // Step 6: Verify field state

    // Assert
    const statusEl = await driver.$('~testStatus');
    await expect(statusEl).toBeDisplayed();
  });

  it('TRF-25: Transfer cut-off time validation (5 PM ET)', async () => {
    // Type: Validation
    // Steps: Launch app → Navigate to form → Enter boundary/invalid value → Trigger validation → Assert validation message → Verify field state
    await driver.activateApp('com.tdbank.ios.mobile');
    await driver.waitUntil(async () => {
      return await isElementDisplayed(driver, '~appLoaded');
    }, { timeout: 15000, timeoutMsg: 'App did not load in time' });

    // TODO: implement test steps
    // Step 1: Launch app
    // Step 2: Navigate to form
    // Step 3: Enter boundary/invalid value
    // Step 4: Trigger validation
    // Step 5: Assert validation message
    // Step 6: Verify field state

    // Assert
    const statusEl = await driver.$('~testStatus');
    await expect(statusEl).toBeDisplayed();
  });
});
