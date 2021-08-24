const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema(
	{
        name: { type: String, required: true },
        category: { type: String, required: true },
        price: { type: Number, required: true },
        description: { type: String, required: true },
        tags: { type: String },
        type: { type: String, default: 'buyable', enum: ['buyable', 'pre-order', 'preview']},
        images: { type: String }
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('Item', itemSchema);
