var keystone = require('keystone');
var Types = keystone.Field.Types;

var Place = new keystone.List('Place');

Place.add({
	title: { type: Types.Text, required: true, default: '', initial: true },
	description: { type: Types.Text },
	location: { type: Types.Location, default: '', enableMapsAPI: true },
	openHour: { type: Types.Datetime, default: Date.now },
	closeHour: { type: Types.Datetime, default: Date.now },
	price: { type: Types.Money },
	phoneNumber: Types.Text,
	website: Types.Url,
	mediaLinks: { type: Types.TextArray },
	suggestedAge: { type: Types.Text },
	paymentOptions: { type: Types.TextArray },
	languagesAvailable: { type: Types.TextArray, default: ['English'] },
	restrictions: { type: Types.TextArray },
	wifi: Types.Boolean,
	accessibility: Types.Boolean,
	visitDuration: Types.Number,
	images: { type: Types.CloudinaryImages },
});

Place.defaultColumns = 'title, description';
Place.register();

exports.Place = Place;
