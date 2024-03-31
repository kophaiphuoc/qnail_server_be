const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

app.use(express.static('public'))
app.use(express.json());
app.use(cors());
app.use(morgan('common'));

const routerPostBlog = require('./routers/PostBlogRouters')
const routerAuth = require('./routers/AuthRouter')
const routerPopup = require('./routers/PopupRouter')
const routerMail = require('./routers/EmailRouter')

    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.MONGO_URL).then(()=>
        console.log('connect success database')
    ).catch((err) => console.log(err))

app.use('/v1',routerPostBlog)
app.use('/v1',routerAuth)
app.use('/v1',routerPopup)
app.use('/v1',routerMail)

  app.listen(process.env.PORT, () => {
    console.log("listen on port " + process.env.PORT)
  })