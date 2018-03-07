var keystone = require('keystone');
var Food = keystone.list('Food');

/**
 * List Food
 */
exports.list = function (req, res) {
	Food.model.find(function (err, items) {

		if (err) return res.json({ err: err });

		res.json({
			items,
		});
	});
};

/**
 * Get Food by ID
 */
exports.get = function (req, res) {
	Food.model.findById(req.params.id).exec(function (err, item) {

		if (err) return res.json({ err: err });
		if (!item) return res.json('not found');

		res.json({
			item,
		});
	});
};


/**
 * Create a Food
 */
exports.create = function (req, res) {

	var item = new Food.model();
	var data = (req.method === 'POST') ? req.body : req.query;

	item.getUpdateHandler(req).process(data, function (err) {

		if (err) return res.json({ error: err });

		res.json({
			item,
		});

	});
};

/**
 * Patch Food by ID
 */
exports.update = function (req, res) {

	Food.model.findById(req.params.id).exec(function (err, item) {

		if (err) return res.json({ err: err });
		if (!item) return res.json({ err: 'not found' });

		var data = (req.method === 'PUT') ? req.body : req.query;

		item.getUpdateHandler(req).process(data, function (err) {

			if (err) return res.json({ err: err });

			res.json({
				item,
			});

		});

	});
};

/**
 * Delete Food by ID
 */
exports.remove = function (req, res) {
	Food.model.findById(req.params.id).exec(function (err, item) {

		if (err) return res.json({ dberror: err });
		if (!item) return res.json('not found');

		item.remove(function (err) {
			if (err) return res.json({ dberror: err });

			return res.json({
				success: true,
			});
		});

	});
};
