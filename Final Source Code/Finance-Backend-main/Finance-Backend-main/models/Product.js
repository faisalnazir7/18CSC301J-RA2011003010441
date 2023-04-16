// This is the ODM i.e Object document model, Mongoose has ODM which makes it easier to fetch data from DB
// here we setup the data models and structures. Means how the data is structured and modeled
import mongoose from "mongoose";
import {loadType} from "mongoose-currency"; // this file is mainly for when we data in the form of currency

const Schema = mongoose.Schema;
loadType(mongoose);

const ProductSchema = new Schema( 
    {
        price: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100
        },
        expense: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100
        },
        transactions: [
            {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Transaction"  // refrencing Transaction object. Refrences to all the transactions of this particular product
            }
        ],
    },
    { timestamps: true, toJSON: {getters: true}} // timestamps will give us when the object was created and updated

);

const Product = mongoose.model("Product", ProductSchema);

export default Product;