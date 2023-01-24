const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Todo = require('./models/Todo');

require("dotenv").config({ path: "./config/.env" });

// AdminJS Stuff
const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')
const AdminJSMongoose = require('@adminjs/mongoose')


AdminJS.registerAdapter({
    Resource: AdminJSMongoose.Resource,
    Database: AdminJSMongoose.Database,
})


const connectDB = require("./config/database");

// Connect to Database
connectDB();

const start = async () => {
    const app = express();

    // await mongoose.connect("mongodb://127.0.0.1:27017/")
    // await connectDB();
    console.log(Event);

    const adminOptions = {
        // We pass Event to `resources`
        resources: [Todo],
    }
    // Please note that some plugins don't need you to create AdminJS instance manually,
    // instead you would just pass `adminOptions` into the plugin directly,
    // an example would be "@adminjs/hapi"
    const admin = new AdminJS(adminOptions)

    const adminRouter = AdminJSExpress.buildRouter(admin)
    app.use(admin.options.rootPath, adminRouter)

    app.listen(process.env.PORT, () => {
        console.log(`AdminJS started on http://localhost:${process.env.PORT}${admin.options.rootPath}`)
    })
}

start();