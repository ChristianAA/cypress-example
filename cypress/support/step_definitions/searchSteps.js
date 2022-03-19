/* global cy, Given, When, Then */

import * as searchActions from "../actions/searchActions";


Given("a user typing {string} in the search input", (value) => {
  searchActions.inputSearch(value);
})

When("presses the search button", () => {
  searchActions.pressSearchButton();
})