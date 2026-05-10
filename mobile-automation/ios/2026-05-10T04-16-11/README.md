# TD Bank Mobile Automation — IOS

Generated: 2026-05-10T04:16:14.969Z
Platform: ios
Suites: 3
Total Scenarios: 75

## Suites
- **Account Management & Dashboard** (`accounts-ios.spec.js`) — 25 scenarios
- **Transfers, Payments & Mobile Deposit** (`transfers-ios.spec.js`) — 25 scenarios
- **Authentication & Security** (`auth-ios.spec.js`) — 25 scenarios

## Setup
```bash
npm install webdriverio @wdio/appium-service appium
npx appium driver install xcuitest
npx wdio run wdio.conf.js
```

## Requirements
- Appium 2.x server running on localhost:4723
- iOS device or simulator with TD Bank app installed