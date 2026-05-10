'use strict';
const { remote } = require('webdriverio');

// ─── TD Bank USA — Account Management & Dashboard ────────────────────────────────────────────────
// Platform: iOS | Automation: XCUITest
// Generated: 2026-05-10T04:14:58.481Z

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


describe('Account Management & Dashboard', () => {
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

  it('ACCT-01: View checking account balance', async () => {
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

  it('ACCT-02: View savings account balance', async () => {
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

  it('ACCT-03: View credit card balance & available credit', async () => {
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

  it('ACCT-04: Multi-account overview dashboard', async () => {
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

  it('ACCT-05: Account number masking (last 4 visible)', async () => {
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

  it('ACCT-06: Transaction history — last 30 days', async () => {
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

  it('ACCT-07: Transaction history — custom date range', async () => {
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

  it('ACCT-08: Transaction search by merchant name', async () => {
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

  it('ACCT-09: Transaction search by amount range', async () => {
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

  it('ACCT-10: Transaction detail view with merchant info', async () => {
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

  it('ACCT-11: Pending transactions displayed separately', async () => {
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

  it('ACCT-12: Account statements — monthly PDF download', async () => {
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

  it('ACCT-13: E-statements enrollment / paper opt-out', async () => {
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

  it('ACCT-14: Account nickname set and display', async () => {
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

  it('ACCT-15: Routing number reveal with biometric auth', async () => {
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

  it('ACCT-16: Low balance alert configuration', async () => {
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

  it('ACCT-17: Large transaction alert setup', async () => {
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

  it('ACCT-18: Spending category breakdown chart', async () => {
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

  it('ACCT-19: Monthly spending trend chart', async () => {
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

  it('ACCT-20: Year-to-date income vs expenses', async () => {
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

  it('ACCT-21: Scroll performance — 500 transactions', async () => {
    // Type: Performance
    // Steps: Launch app → Start performance timer → Execute operation → Stop timer → Assert duration < threshold → Log metrics
    await driver.activateApp('com.tdbank.ios.mobile');
    await driver.waitUntil(async () => {
      return await isElementDisplayed(driver, '~appLoaded');
    }, { timeout: 15000, timeoutMsg: 'App did not load in time' });

    // TODO: implement test steps
    // Step 1: Launch app
    // Step 2: Start performance timer
    // Step 3: Execute operation
    // Step 4: Stop timer
    // Step 5: Assert duration < threshold
    // Step 6: Log metrics

    // Assert
    const statusEl = await driver.$('~testStatus');
    await expect(statusEl).toBeDisplayed();
  });

  it('ACCT-22: Pull-to-refresh updates balance', async () => {
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

  it('ACCT-23: Account filter by type (chequing/savings)', async () => {
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

  it('ACCT-24: Investment account portfolio view', async () => {
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

  it('ACCT-25: Offline mode — cached balance display', async () => {
    // Type: Resilience
    // Steps: Launch app → Simulate failure condition → Observe app behavior → Assert graceful handling → Verify recovery path
    await driver.activateApp('com.tdbank.ios.mobile');
    await driver.waitUntil(async () => {
      return await isElementDisplayed(driver, '~appLoaded');
    }, { timeout: 15000, timeoutMsg: 'App did not load in time' });

    // TODO: implement test steps
    // Step 1: Launch app
    // Step 2: Simulate failure condition
    // Step 3: Observe app behavior
    // Step 4: Assert graceful handling
    // Step 5: Verify recovery path

    // Assert
    const statusEl = await driver.$('~testStatus');
    await expect(statusEl).toBeDisplayed();
  });
});
