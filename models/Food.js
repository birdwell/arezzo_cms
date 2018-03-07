var keystone = require('keystone');
const { Place } = require('./Place.js');
var Types = keystone.Field.Types;

var Food = new keystone.List('Food', { inherits: Place });

Food.add({ cuisine: Types.TextArray, atmosphere: Types.TextArray });

Food.register();
