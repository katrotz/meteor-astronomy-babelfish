/* global events:true */

events.afterSet = function afterSet(e) {
  let fieldName = e.data.fieldName;
  let fieldValue = e.data.setValue;
  let locales = this.babelLocales();
  let fields = this.babelFields();
  let defaultLocale = locales[0];

  let rootFields = [];

  for (let i=0; i<fields.length; i++) {
    rootFields.push(fields[i].split('.')[0]);
  }

  /*Update default locale translation on field value change*/
  if (rootFields.indexOf(fieldName) > -1) {

    this.translate(fieldName, fieldValue, defaultLocale);
  }
};