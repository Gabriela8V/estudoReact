const express  = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");

const cfg = require("./config/cfg");
const create_token = require("./util/createtoken");
const verify_token = require("./middleware/verifytoken");
const  user = require("./model/user");
const  wallet = require("./model/wallet");




const router_user = require("./router/user")
const router_wallet= require("./router/wallet")

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());



app.use("/api/users",router_user);
app.use("/api/wallet",router_wallet)


app.listen(5001,()=>console.log(`Server on-line`));