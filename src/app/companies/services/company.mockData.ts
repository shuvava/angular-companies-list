import * as companies from './companies.json';
// import {default as as companies} from './companies.json';
import { Company } from '../models';

let mock;
  // @ts-ignore
if (companies.default) {
  // @ts-ignore
  mock = companies.default;
} else {
  mock = companies;
}
export const companiesMock: Company[] = mock;
