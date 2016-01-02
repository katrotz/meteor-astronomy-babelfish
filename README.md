# Meteor Astronomy Babelfish

> A simple library that adds translation support for [Astronomy](https://github.com/jagi/meteor-astronomy) powered Meteor models

## Installation

```meteor add katrotz:meteor-astronomy-babelfish```

## Introduction

Babelfish, called after the little fish from The Hitchhiker's Guide to the Galaxy, is a library that adds a translation behaviour to the models powered by the Astronomy library.

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
      //List the language names according to ISO 639-1 (Two letter codes) 
      locales: ['ro', 'en'],
      //List of model fields with multilingual support
      fields: ['title']
    }
  }
});
```

##Methods
@todo

## Licence
[MIT Licence](http://opensource.org/licenses/MIT)