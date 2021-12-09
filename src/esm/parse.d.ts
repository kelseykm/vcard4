declare type ParsedVcardValue =  string | string[] | {
  [key: string]: string | string[];
};

declare type ParsedVcardParameter = undefined | { 
  [key: string]: string | string[]; 
} | { 
  [key: string]: string | string[]; 
}[];

declare type ParsedVcardContentLine = {
  parameters: ParsedVcardParameter;
  value: ParsedVcardValue;
};

declare type ParsedVcard = {
[key: string]: ParsedVcardContentLine | ParsedVcardContentLine[];
};

export default function parse(vcard: string): ParsedVcard | ParsedVcard[];
