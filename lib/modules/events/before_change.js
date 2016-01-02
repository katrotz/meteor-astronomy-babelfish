/* global events:true */

events.beforeChange = function beforeChange(e) {
  let fieldName = e.data.fieldName;

  /*Known bug - if 'translations' key is supplied to the document constructor, this preventDefault will break translation of the default language*/
  if (fieldName === 'translations') {
    e.preventDefault();
  }
};