const moongose = require('mongoose');
const Schema = moongose.Schema;

require('mongoose-currency').loadType(moongose);
const Currency = moongose.Types.Currency;

const promotionSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean
    },
    cost: {
        type: Currency,
        required: true
    },
    description: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

const Promotion = moongose.model('Promotion', promotionSchema);
module.exports = Promotion;