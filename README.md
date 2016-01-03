# Meteor Astronomy Babelfish

> A simple library that adds translation support for [Astronomy](https://github.com/jagi/meteor-astronomy) powered Meteor models

## Installation

```meteor add katrotz:meteor-astronomy-babelfish```

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
<<<<<<< HEAD
#### Astro.setLocales(localesList)
Set the list of locales valid values to be used (ISO 639-1 language names)

#### Astro.getLocales()
Get the list of locales valid values

#### Astro.useLocale(locale)
Set the current locale

#### Astro.currentLocale()
Get the current locale

### Model methods
#### model.babelLocales()
Shorthand for Astro.getLocales

#### model.currentLocale()
Shorthand for Astro.currentLocale

#### model.babelFields()
Get the list of fields registered as babel fields

#### model.translate(fieldName, fieldTranslation, locale)
Set the translation of a field for a locale

#### model.translate(fieldName, fieldTranslations)
=======
###### Astro.setLocales(localesList)
Set the list of locales valid values to be used (ISO 639-1 language names)

###### Astro.getLocales()
Get the list of locales valid values

###### Astro.useLocale(locale)
Set the current locale

###### Astro.currentLocale()
Get the current locale

### Model methods
###### model.babelLocales()
Shorthand for Astro.getLocales

###### model.currentLocale()
Shorthand for Astro.currentLocale

###### model.babelFields()
Get the list of fields registered as babel fields

###### model.translate(fieldName, fieldTranslation, locale)
Set the translation of a field for a locale

###### model.translate(fieldName, fieldTranslations)
>>>>>>> origin/master
Set the translations of a field. The fieldTranslations should be an object with locales as keys, and translations as values
```
{
	ru: "Babilon",
	en: "Babel",
	de: "Babylon"
}
```

## Licence
[MIT Licence](http://opensource.org/licenses/MIT)