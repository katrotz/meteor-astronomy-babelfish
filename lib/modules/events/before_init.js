/* global events:true */

events.beforeInit = function beforeInit() {
  let Class = this.constructor;
  let schema = Class.schema;
  let options = schema.behaviors.babelfish.options;
  let fields = options.fields;

  this.babelFields_ = fields;
};