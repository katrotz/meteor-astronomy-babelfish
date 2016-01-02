/* global methods:true */

methods.translate = function translate(fieldName, translation, locale) {
  let fieldValue;

  this.translations = this.translations || new (Astro.getClass('Translations'))();

  fieldValue = this.translations.get(fieldName) || {};

  if (typeof translation === 'object') {
    for (let l in translation) {
      if (translation.hasOwnProperty(l)) {
        fieldValue[l] = translation[l];
      }
    }

    this.translations.set(fieldName, fieldValue);

  } else {
    check(locale, String);

    fieldValue[locale] = translation;
  }

  this.translations.set(fieldName, fieldValue);

  return this;
};