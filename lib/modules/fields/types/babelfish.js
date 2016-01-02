Astro.createType({
  name: 'babelfish',
  constructor: function Type(fieldDefinition) {
    Astro.BaseField.apply(this, [fieldDefinition]);

    this.locales = fieldDefinition.locales || [];

    this.default = {};
    for (let locale of this.locales) {
      this.default[locale] = null;
    }
  },
  getDefault: function(defaultValue) {
    return defaultValue;
  },
  /*cast: function(value) {},
  needsCast: function(value) {
    return false;
  },*/
  plain: function(value) {
    if (!value) {
      return this.default;
    }

    /*Remove anything that is not a locale*/
    for (let locale in value) {
      if (this.locales.indexOf(locale) === -1) {
        delete value[locale];
      }
    }

    return value;
  },
  needsPlain: function(value) {
    let defaultLocale = Object.keys(this.locales)[0];
    return !!value[defaultLocale];
  }
});