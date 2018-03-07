var keystone = require('keystone');
var Outdoors = keystone.list('Outdoors');

/**
 * List Outdoors
 */
exports.list = function (req, res) {
	Outdoors.model.find(function (err, items) {

		if (err) return res.json({ err: err });

		res.json({
			items,
		});
	});
};

/**
 * Get Outdoors by ID
 */
exports.get = function (req, res) {
	Outdoors.model.findById(req.params.id).exec(function (err, item) {

		if (err) return res.json({ err: err });
		if (!item) return res.json('not found');

		res.json({
			item,
		});
	});
};


/**
 * Create a Outdoors
 */
exports.create = function (req, res) {

	var item = new Outdoors.model();
	var data = (req.method === 'POST') ? req.body : req.query;

	item.getUpdateHandler(req).process(data, function (err) {

		if (err) return res.json({ error: err });

		res.json({
			item,
		});

	});
};

/**
 * Patch Outdoors by ID
 */
exports.update = function (req, res) {

	Outdoors.model.findById(req.params.id).exec(function (err, item) {

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
 * Delete Outdoors by ID
 */
exports.remove = function (req, res) {
	Outdoors.model.findById(req.params.id).exec(function (err, item) {

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
