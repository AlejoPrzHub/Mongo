const mongoose = require("mongoose");
const User = require("./user");
const Profile = require("./Profile");
const Creedentials = require("./Creedentials");

mongoose.connect("mongodb+srv://josealeprz:leo11jos15!@cluster0.kiu9w1y.mongodb.net/modelo",
    {useNewUrlParser: false, useUnifiedTopology: false})

    //USER
let userDocument = new User({
    login:"juanito123",
    password:"123456789"
})

userDocument.save()
.then((data) => 
{
    console.log(data);
    console.log(data.login)
})
.catch((error) => 
{
    console.log(error)
})


    //PROFILE
let profileDocument = new Profile({
    name:"juan",
    surname:"perez",
    dateOfBirth:"2001-10-10",
    Comments:"12345",
    rol:"admin"
})

profileDocument.save()
.then((data) => 
{
    console.log(data);
    console.log(data.Comments)
})
.catch((error) => 
{
    console.log(error)
})


    //CREEDENTIALS
let creedentialsDocument = new Creedentials({
    address:"julio n 1",
    phone:"123456789",
    email:"jose@perez"
})

creedentialsDocument.save()
.then((data) => 
{
    console.log(data);
    console.log(data.email)
})
.catch((error) => 
{
    console.log(error)
})

