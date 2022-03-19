const { After } = require("cypress-cucumber-preprocessor/steps");

import {cypressUtils} from "../utils/cypressUtils";

After({ tags: "@CapturePageScreenshot"}, () => {
  cypressUtils.capturePageScreenshot ();
})
