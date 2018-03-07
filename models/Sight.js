var keystone = require('keystone');
const { Place } = require('./Place.js');
var Types = keystone.Field.Types;

var Sight = new keystone.List('Sight', { inherits: Place });

Sight.add({ typeOfSight: Types.Text, isIndoor: Types.Boolean });

Sight.register();
