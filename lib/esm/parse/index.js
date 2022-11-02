import { createForOfIteratorHelper as _createForOfIteratorHelper } from '../_virtual/_rollupPluginBabelHelpers.js';
import { Tokenizer } from './Tokenizer.js';
import { Parser } from './Parser.js';
import { MissingArgument } from '../errors/MissingArgument.js';

function parse(vcard) {
  if (typeof vcard === "undefined") throw new MissingArgument("vCard to be parsed must be supplied");else if (typeof vcard !== "string") throw new TypeError("vCard to be parsed must be of type string");
  var tokenizedVcard = new Tokenizer(vcard);
  if (tokenizedVcard.numberOfVcards === 1) return new Parser(tokenizedVcard.tokens).parsed;
  var _tokenizedVcards = [];

  var _iterator = _createForOfIteratorHelper(tokenizedVcard.tokens),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var tokenVcard = _step.value;

      _tokenizedVcards.push(new Parser(tokenVcard).parsed);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return _tokenizedVcards;
}

export { parse };
//# sourceMappingURL=index.js.map
