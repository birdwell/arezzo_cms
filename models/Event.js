var keystone = require('keystone');
const { Place } = require('./Place.js');

var Event = new keystone.List('Event', { inherits: Place });

Event.add({ startDate: String, endDate: String });

Event.register();
