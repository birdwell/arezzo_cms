var keystone = require('keystone');

var Types = keystone.Field.Types;

var Custom = new keystone.List('Custom');

Custom.add({ 
    title: { type: Types.Text, required: true, default: '', initial: true },
    description: { type: Types.Text, required: true, default: '', initial: true },
    startTime: { type: Types.Datetime, default: Date.now },
	endTime: { type: Types.Datetime, default: Date.now },
    location: { type: Types.Location, default: '', enableMapsAPI: true },
    mediaLinks: { type: Types.TextArray },
    images: { type: Types.CloudinaryImages },


});

Custom.defaultColumns = 'title, description';

Custom.register();
exports.Custom = Custom;
