const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
const port = process.env.PORT || 8000;

const staticpath = path.join(__dirname,"../public")
const template_path = path.join(__dirname,"../templates/views")
const partils_path = path.join(__dirname,"../templates/partils")


app.use(express.static(staticpath));

app.set('view engine', 'hbs');
app.set("views", template_path);

hbs.registerPartials(partils_path)

app.get("/", (req, res) => {
    res.render("index")
});

app.get("/about", (req, res) => {
    res.render("about")
});

app.get("/weather", (req, res) => {
    res.render("weather")
});

app.get("*", (req, res) => {
    res.render("404erorr",{
        errorMsg:"Opps Page Not found"
    })
});





app.listen(port, () => {
    console.log(`listning port ${port}`)
});