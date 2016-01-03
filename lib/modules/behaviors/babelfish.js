/* global events:false, methods:false */

Astro.createBehavior({
  name: 'babelfish',
  options: {
    fields: []
  },
  createSchemaDefinition: function(options) {
    function arrayToObject(arr) {
      let out = {};

      if (!Array.isArray(arr)) {
        return arr;
      }

      arr.forEach(function(val) {
        out[val] = {};
      });

      return out;
    }

    let fields = arrayToObject(options.fields) || {};
    let locales = Astro.getLocales() || [];

    let schemaDefinition = {
      events: events,
      methods: methods,
      fields: {
        translations: {
          type: 'object',
          nested: {
            name: 'Translations',
            fields: (function() {
              let out = {};

              for (let fieldName in fields) {
                if (fields.hasOwnProperty(fieldName)) {
                  out[fieldName] = {
                    type: 'babelfish',
                    locales: locales
                  };
                }
              }

              return out;
            })()
          },
          default: function() {
            return {};
          }
        }
      }
    };

    for (let fieldName in fields) {
      if (fields.hasOwnProperty(fieldName)) {
        let parts = fieldName.split('.');
        let key = parts[0];

        if (parts.length === 1) {
          schemaDefinition.fields[key] = {
            type: 'string',
            default: ''
          };
        } else {
          schemaDefinition.fields[key] = {
            type: 'object',
            default: function() {return {};}
          };
        }
      }
    }

    return schemaDefinition;
  }
});