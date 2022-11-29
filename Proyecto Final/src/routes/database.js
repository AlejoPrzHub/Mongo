const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://josealeprz:leo11jos15!@cluster0.kiu9w1y.mongodb.net/modelo",
    {useNewUrlParser: false, useUnifiedTopology: false})
.then((db)=>{console.log("database connected on " + db.connection.host)})
.catch((error)=>{console.log(error)});