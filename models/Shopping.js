var keystone = require('keystone');
const { Place } = require('./Place.js');
var Types = keystone.Field.Types;

var Shopping = new keystone.List('Shopping', { inherits: Place });

Shopping.add({ typeOfShopping: Types.Text });

Shopping.register();
