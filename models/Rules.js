var keystone = require('keystone');

var Types = keystone.Field.Types;

var Rule = new keystone.List('Rule');

Rule.add({ 
    title: { type: Types.Text, required: true, default: '', initial: true },
    description: { type: Types.Text, required: true, default: '', initial: true},
    fine: {type: Types.Money},
    penalty: {type: Types.Text, default: ''},
    startTimeInEffect: { type: Types.Datetime, default: Date.now },
	endTimeInEffect: { type: Types.Datetime, default: Date.now },
    mediaLinks: { type: Types.TextArray },
    images: { type: Types.CloudinaryImages },


});

Rule.defaultColumns = 'title, description';

Rule.register();
exports.Rule = Rule;