const express = require('express');
const controller = require('./controller');
const massive = require('massive');
require('dotenv').config();
const app = express();


app.use(express.json());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set("db", dbInstance);
    console.log("database online!");
}).catch(e => console.log(e));

//my endpoints woo
app.get("/api/inventory", controller.getAll)
app.post("/api/product", controller.addProduct)
app.delete("/api/product/:id", controller.delete)
app.put("/api/product/:id", controller.update)


app.listen(process.env.SERVER_PORT, () => console.log(`listening on ${process.env.SERVER_PORT}!`));