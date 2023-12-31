import { capitalize } from '@rifandani/nxact-yutiriti';
import type { FormattersInitializer } from 'typesafe-i18n';
import type { Formatters, Locales } from './i18n-types.js';

export const initFormatters: FormattersInitializer<Locales, Formatters> = (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _locale: Locales,
) => {
  // add your formatter functions here
  const formatters: Formatters = {
    // ignore, // Ignores the variable and returns an empty string
    // identity, // Returns the variable without modifications
    // lowercase,
    // uppercase,
    capitalize: (value: string) => capitalize(value),
    // weekday: date(locale, { weekday: 'long' }),
    // timeShort: time('id', { timeStyle: 'short' }),
    // currency: number('id', { style: 'currency', currency: 'IDR' }),
    // noSpaces: replace(/\s/g, '-'),
  };

  return formatters;
};
