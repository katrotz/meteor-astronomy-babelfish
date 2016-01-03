/* global methods:true, Astro:true */

methods.get = function get(field) {
  var doc = this;

  if (arguments.length === 0) {
    return doc;
  } else if (arguments.length === 1) {

    if (_.isArray(field)) {
      var fields = [];

      field.forEach(function(v) {
        fields.push(getTranslationField(v));
      });

      return doc._getMany(fields);
    } else if (_.isString(field)) {
      return doc._getOne(getTranslationField(field));
    }
  }

  function getTranslationField(field) {
    var babelFields = doc.babelFields();
    var currentLocale = doc.currentLocale();

    if (babelFields.indexOf(field) > -1) {
      field = 'translations.' + field + '.' + currentLocale;
    }

    return field;
  }
};