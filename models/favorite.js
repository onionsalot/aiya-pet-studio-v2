const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = new Schema(
	{
        userId: { type: Schema.Types.ObjectId, ref: 'User' },
        items: [{ type: String }],
	},
	{
		timestamps: true
	}
);


module.exports = mongoose.model('Favorite', favoriteSchema);
