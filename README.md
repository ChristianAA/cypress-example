# Cypress + Cucumber Example

This repository contains the base setup of an UI testing project, using Cypress + Cucumber

A simple search in DuckDuckGo to check that results are displayed is used as example

# Requirements

The minimum requirements are:

* node v16.14.2
* npm 8.5.0

# Setup

1. Download or clone the repository
2. Open a terminal
3. Go to the path of the "package.json" file and execute:

```
npm install
```

# Test Execution

To run the tests in headless mode, go to main directory and execute:

```
npm run run_tests
```

To open the Cypress IDE, run:

```
npm run open
```

# Results

To check the report, open the '/repors/index.html' file once the execution has finished.

# Links
    
[Cypress](<https://www.cypress.io/>)

[cypress-cucumber-preprocessor](<https://github.com/TheBrainFamily/cypress-cucumber-preprocessor>)

[cypress-mochawesome-reporter](<https://github.com/LironEr/cypress-mochawesome-reporter>)