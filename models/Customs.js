var keystone = require('keystone');

var Types = keystone.Field.Types;

var Custom = new keystone.List('Custom');

Custom.add({ 
    title: { type: Types.Text, required: true, default: '', initial: true },
    description: { type: Types.Text, required: true, default: '' },
    fine: {type: Types.Money},
    penalty: {type: Types.Text, default: ''},
    startTime: { type: Types.Datetime, default: Date.now },
	endTime: { type: Types.Datetime, default: Date.now },


});

Custom.defaultColumns = 'title, description';

Custom.register();
exports.Custom = Custom;