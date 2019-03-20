const {deepStrictEqual: eq} = require ('assert');
const {capitalized} = require ('..');

test ('capitalized', () => {
  eq (capitalized ('feat'), false);
  eq (capitalized ('Feat'), false);
  eq (capitalized ('add'), false);
  eq (capitalized ('Add'), true);
});
