/* global methods:true */

let applicationLocales = [];
let activeLocale;

Astro.setLocales = function setLocales(locales) {
  if (!Array.isArray(locales)) {
    throw new Meteor.Error('invalid-input', 'Expecting an array of locales ISO 639-1');
  }

  applicationLocales = locales;
};

Astro.getLocales = function getLocales() {
  return applicationLocales;
};

Astro.useLocale = function useLocale(locale) {
  if (applicationLocales.indexOf(locale) < 0) {
    throw new Meteor.Error('invalid-input', 'Can not use locale as it is not part of application locales');
  }

  activeLocale = locale;
};

Astro.currentLocale = function currentLocale() {
  return activeLocale ? activeLocale : applicationLocales[0];
};

methods.babelLocales = function babelLocales() {
  return Astro.getLocales();
};

methods.currentLocale = function currentLocale() {
  return Astro.currentLocale();
};
