import express from "express";
import bodyParser from "body-parser"; // we will be able to handle information comming from a body of requests
import mongoose from "mongoose";
import cors from "cors";  // we use it to handle cross origin resource sharing requests so that you can call from a different url
import dotenv from "dotenv"; // to handle environment variables
import helmet from "helmet"; // API endpoint security
import morgan from "morgan"; // everytime we hit an endpoint it will console log the info
import kpiRoutes from './routes/kpi.js';
import productRoutes from "./routes/product.js";
import transactionRoutes from "./routes/transaction.js";
import KPI from "./models/KPI.js";
import Product from "./models/Product.js";
import Transaction from "./models/Transaction.js";
import {kpis, products, transactions} from "./data/data.js";

/* CONFIGURATIONS */
dotenv.config()
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

/* ROUTES */

app.use("/kpi", kpiRoutes); // entry point for kpiRoutes. The code for this route is written in kpi.js file in routes folder
app.use("/product", productRoutes);
app.use("/transaction", transactionRoutes);

/* MONGOOSE SETUP */

const PORT = process.env.PORT || 9000; // this is how we access the environment variable that we created in .env file, there PORT is the same as in .env file of client folder.Here || 9000 means or 9000(basically a backup for our port)
mongoose
    .connect(process.env.MONGO_URL, {  // connecting to mongoDB online
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async () => { // starting the server
        app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

        /* ADD DATA ONE TIME ONLY  OR AS NEEDED*/
        // await mongoose.connection.db.dropDatabase();
        // KPI.insertMany(kpis);   // data from data.js in data folder goes into our MongoDB. This is run only once to load data to mongoDB
        // Product.insertMany(products); 
        // Transaction.insertMany(transactions);
    })
    .catch((error) => console.log(`${error} did not connect`))
