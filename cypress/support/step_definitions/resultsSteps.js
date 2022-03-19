/* global cy, Given, When, Then */

import * as resultsActions from "../actions/resultsActions";


Then("results are displayed", () => {
  resultsActions.assertResultsArePresent();
})