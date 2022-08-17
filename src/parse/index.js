import { MissingArgument } from "../errors/index.js";
import { Tokenizer } from "./Tokenizer.js";
import { Parser } from "./Parser.js";

export function parse(vcard) {
  if (typeof vcard === "undefined")
    throw new MissingArgument("vCard to be parsed must be supplied");
  else if (typeof vcard !== "string")
    throw new TypeError("vCard to be parsed must be of type string");

  const tokenizedVcard = new Tokenizer(vcard);

  if (tokenizedVcard.numberOfVcards === 1)
    return new Parser(tokenizedVcard.tokens).parsed;

  const _tokenizedVcards = [];
  for (const tokenVcard of tokenizedVcard.tokens)
    _tokenizedVcards.push(new Parser(tokenVcard).parsed);
  return _tokenizedVcards;
}
