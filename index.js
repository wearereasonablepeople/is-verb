//. # is-verb
//.
//. Is it an English imperative verb?
const verbs = require ('./verbs.json');

//. ## API
//.
//# capitalized :: String -> Boolean
//.
//. Is it a capitalized English imperative verb?
//.
//. ```js
//. > capitalized ('feat')
//. false
//. > capitalized ('Feat')
//. false
//. > capitalized ('add')
//. false
//. > capitalized ('Add')
//. true
//. ```
function capitalized(word) {
  return verbs.includes (word);
}

module.exports = {capitalized};
