const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema(
	{
        userId: { type: Schema.Types.ObjectId, ref: 'User' },
        items: [{ type: String }],
	},
	{
		timestamps: true
	}
);


module.exports = mongoose.model('Item', itemSchema);
