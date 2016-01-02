/* global events:true */

events.afterSet = function afterSet(e) {
  let fieldName = e.data.fieldName;
  let fieldValue = e.data.setValue;

  /*Update default locale translation on field value change*/
  if (this.translations && this.translations[fieldName]) {
    let tFieldName = fieldName;
    let tFieldValue = this.translations[fieldName];
    let locales = Object.keys(tFieldValue);
    let defaultLocale = locales[0];

    tFieldValue[defaultLocale] = fieldValue;

    this.translations[tFieldName] = tFieldValue;
  }
};