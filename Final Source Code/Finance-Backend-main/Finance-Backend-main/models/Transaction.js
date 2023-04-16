// This is the ODM i.e Object document model, Mongoose has ODM which makes it easier to fetch data from DB
// here we setup the data models and structures. Means how the data is structured and modeled
import mongoose from "mongoose";
import {loadType} from "mongoose-currency"; // this file is mainly for when we data in the form of currency

const Schema = mongoose.Schema;
loadType(mongoose);

const TransactionSchema = new Schema( 
    {
        buyer: {
            type: String,
            required: true,
        },
        amount: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100
        },
        productIds: [ // which ProductIds are relevant to this transaction
            {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"  // refrencing Product object. Refrences to all the Transactions of this particular product. Transaction.js and Product.js are refrencing each other (Basically linked tables in DBMS(foreign key))
            }
        ],
    },
    { timestamps: true, toJSON: {getters: true}} // timestamps will give us when the object was created and updated

);

const Transaction = mongoose.model("Transaction", TransactionSchema);

export default Transaction;