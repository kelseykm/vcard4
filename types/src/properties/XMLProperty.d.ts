import { AltidParameter, ValueParameter } from '../parameters/index';
import { TextType } from '../values/index';

export class XMLProperty {
  readonly params: string;
  readonly value: string;
  constructor(
    params: (ValueParameter | AltidParameter)[],
    val: TextType
  );
}
