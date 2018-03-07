var keystone = require('keystone');
const { Place } = require('./Place.js');
var Types = keystone.Field.Types;

var Outdoors = new keystone.List('Outdoors', { inherits: Place });

Outdoors.add({ typeOfOutdoorsPlace: Types.Text, difficulty: Types.Text, distance: Types.Number });

Outdoors.register();
