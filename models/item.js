const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema(
	{
        name: { type: String, required: true },
        category: { type: Schema.Types.ObjectId, ref: 'Category', required: true, default: undefined },
        price: { type: Number, required: true },
        description: { type: String, required: true },
        tags: [{ type: String }],
        type: { type: Boolean, default: true},
        images:[{ type: String }]
	},
	{
		timestamps: true
	}
);


module.exports = mongoose.model('Item', itemSchema);
