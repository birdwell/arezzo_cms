var keystone = require('keystone');
const { Place } = require('./Place.js');
var Types = keystone.Field.Types;

var Event = new keystone.List('Event', { inherits: Place });

Event.add({
	startDate: { type: Types.Datetime, default: Date.now },
	endDate: { type: Types.Datetime, default: Date.now },
});

Event.register();
