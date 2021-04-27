const express = require("express");
const app = express();
const cors = require("cors")
const mongoose = require("mongoose")
const path = require("path")
const port = process.env.PORT || 5000
const routes = require("./routes")
app.use(cors());
app.use(express.json())

mongoose.connect("mongodb+srv://catalina-admin:fliaJUchyWudg52g@cluster0.xttdr.mongodb.net/blogPostsDB")

app.use(routes)
//if the app is in Production mode use the 
// //static files located in the build folder
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(port, function() {
    console.log("express server is running")
})

// const express = require("express");

// const mongoose = require("mongoose");
// const routes = require("./routes");
// const app = express();
// const PORT = process.env.PORT || 3001;

// // Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(__dirname, 'build', 'index.html'));
// }
// // Add routes, both API and view
// app.use(routes);

// // Connect to the Mongo DB
// const connection =  "mongodb+srv://catalina-admin:fliaJUchyWudg52g@cluster0.xttdr.mongodb.net/blogPostsDB";
// mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
//     .then(() => console.log("Database Connected Successfully"))
//     .catch(err => console.log(err));
// // Start the API server
// app.listen(PORT, function() {
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });
