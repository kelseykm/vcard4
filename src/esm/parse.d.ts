declare type valueType = {
  [key: string]: {
    [key: string]: string | string[]
  };
} | string;

declare type parameterType = {
  [key: string]: {
    [key: string]: string | string[]
  }
} | string | undefined;

declare type parsedVcard = {
  parameter: parameterType;
  value: valueType;
};

export default function parse(vcard: string): parsedVcard | parsedVcard[];
