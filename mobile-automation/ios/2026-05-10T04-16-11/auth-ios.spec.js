'use strict';
const { remote } = require('webdriverio');

// ─── TD Bank USA — Authentication & Security ────────────────────────────────────────────────
// Platform: iOS | Automation: XCUITest
// Generated: 2026-05-10T04:15:49.379Z

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


describe('Authentication & Security', () => {
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

  it('AUTH-01: Login with valid credentials', async () => {
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

  it('AUTH-02: Login with invalid password', async () => {
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

  it('AUTH-03: Login with invalid username', async () => {
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

  it('AUTH-04: FaceID biometric authentication (iOS)', async () => {
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

  it('AUTH-05: TouchID biometric authentication (iOS)', async () => {
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

  it('AUTH-06: Fingerprint authentication (Android)', async () => {
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

  it('AUTH-07: Biometric fallback to PIN/Password', async () => {
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

  it('AUTH-08: Account lockout after 5 failed attempts', async () => {
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

  it('AUTH-09: Session timeout — auto logout after idle', async () => {
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

  it('AUTH-10: Logout clears session & cached data', async () => {
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

  it('AUTH-11: Remember device registration prompt', async () => {
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

  it('AUTH-12: SMS two-factor authentication (OTP)', async () => {
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

  it('AUTH-13: Email two-factor authentication (OTP)', async () => {
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

  it('AUTH-14: Invalid OTP code rejection', async () => {
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

  it('AUTH-15: OTP expiry (5-minute timeout)', async () => {
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

  it('AUTH-16: Password reset via registered email', async () => {
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

  it('AUTH-17: Password reset with security questions', async () => {
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

  it('AUTH-18: New password complexity validation', async () => {
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

  it('AUTH-19: PIN setup and change flow', async () => {
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

  it('AUTH-20: Biometric enrollment from settings', async () => {
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

  it('AUTH-21: Trusted device management page', async () => {
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

  it('AUTH-22: Force re-authentication for sensitive ops', async () => {
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

  it('AUTH-23: Deep link authentication flow', async () => {
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

  it('AUTH-24: SSO — single sign-on across TD apps', async () => {
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

  it('AUTH-25: App background — secure screen overlay', async () => {
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
});
