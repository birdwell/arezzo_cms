var keystone = require('keystone');

var Types = keystone.Field.Types;

var Rule = new keystone.List('Rule');

Rule.add({ 
    title: { type: Types.Text, required: true, default: '', initial: true },
    description: { type: Types.Text, required: true, default: '' },
    fine: {type: Types.Money},
    penalty: {type: Types.Text, default: ''},
    startTime: { type: Types.Datetime, default: Date.now },
	endTime: { type: Types.Datetime, default: Date.now },


});

Rules.defaultColumns = 'title, description';

Rule.register();
exports.Rule = Rule;