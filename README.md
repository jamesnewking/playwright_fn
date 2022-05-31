# PLAYWRIGHT TESTING

## TO RUN TESTS

```
 npx playwright test
    Runs the end-to-end tests.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example.spec.ts
    Runs the tests in the specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright test --headed
    Runs the tests in deaded mode.

  npx playwright test fn.spec.ts --headed --workers=1
    Either set workers: 1 option in the configuration file or pass --workers=1 to the command line. This will run the test 1 at a time and on the same browser window if configured correctly.
```
