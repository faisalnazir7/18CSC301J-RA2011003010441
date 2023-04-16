// This is the ODM i.e Object document model, Mongoose has ODM which makes it easier to fetch data from DB
// here we setup the data models and structures. Means how the data is structured and modeled
import mongoose from "mongoose";
import {loadType} from "mongoose-currency"; // this file is mainly for when we data in the form of currency

const Schema = mongoose.Schema;
loadType(mongoose);

const daySchema = new Schema(
    {
        date: String,
        revenue: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100 // we divide the currency value by 100 to get real value as currency is always multiplied by 100
        }, 
        expenses: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100
        }, 
    }
)

const monthSchema = new Schema(
    {
        month: String,
        revenue: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100
        }, 
        expenses: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100
        },
        operationalExpenses: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100
        },
        nonOperationalExpenses: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100
        },
    },
    {toJSON: {getters: true}} // this is a setting so that we can use the get in above lines
)

const KPISchema = new Schema( 
    {
        totalProfit: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100
        },
        totalRevenue: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100
        },
        totalExpenses: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100
        },
        expensesByCategory: {
            type: Map,
            of: {
                type: mongoose.Types.Currency,
                currency: "USD",
                get: (v) => v/100
            }
        },
        monthlyData: [monthSchema],
        dailyData: [daySchema]
    },
    { timestamps: true, toJSON: {getters: true}} // timestamps will give us when the object was created and updated

);

const KPI = mongoose.model("KPI", KPISchema);

export default KPI;