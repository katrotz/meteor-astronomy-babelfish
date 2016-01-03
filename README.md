# Meteor Astronomy Babelfish

> A simple library that adds translation support for [Astronomy](https://github.com/jagi/meteor-astronomy) powered Meteor models

## Installation

```meteor add katrotz:astronomy-babelfish```

## Introduction

Babelfish, called after the little fish from The Hitchhiker's Guide to the Galaxy, is a library that adds a translation behaviour to the models powered by the Astronomy library.

###### Configure the locales
```
Astro.setLocales(['ro', 'ru', 'en', 'de']);

```

###### Set the current locale
```
Astro.useLocale('de');

```

###### Define the model
```
Features = new Meteor.Collection('features');

Feature = Astro.Class({
  name: 'Feature',
  collection: Features,
  fields: {
    //Note that the fields that should be multilingual, must not be defined explicitly
  },
  behaviors: {
    babelfish: {
      //List of model fields with multilingual support. Supports dot notation for nested fields.
      fields: ['title', 'types.title']
    }
  }
});
```

##Methods
### Global methods

##### Astro.setLocales(localesList)
Set the list of locales valid values to be used (ISO 639-1 language names)

##### Astro.getLocales()
Get the list of locales valid values

##### Astro.useLocale(locale)
Set the current locale

##### Astro.currentLocale()
Get the current locale

### Model methods
##### model.babelLocales()
Shorthand for Astro.getLocales

##### model.currentLocale()
Shorthand for Astro.currentLocale

##### model.babelFields()
Get the list of fields registered as babel fields

##### model.translate(fieldName, fieldTranslation, locale)
Set the translation of a field for a locale

##### model.translate(fieldName, fieldTranslations)
Set the translations of a field. The fieldTranslations should be an object with locales as keys, and translations as values
```
{
	ru: "Babilon",
	en: "Babel",
	de: "Babylon"
}
```

## Notes
1. Babelfish will consder the default locale the first locale in the list of locales defined using `Astro.setLocales`
2. Babelfish will create the `translations` field on the document that will hold the translations for all multilingual fields for each locale. This field can not be directly manipulated. The translations can be set using the `model.translate` method.
3. Babelfish will create a field on the document for each multilingual field, holding the translation for the default locale. This will allow using the field in other behaviours (eg. A multilingual field can be used to generate a slug using the astronomy slug behaviour)

## Licence
[MIT Licence](http://opensource.org/licenses/MIT)