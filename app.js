var koa = require("koa");
var route = require("koa-route");
var render = require("koa-swig");
var serve = require("koa-static");
var app = module.exports = koa();

render(app, {
  root: __dirname + '/views',
  ext: 'html',
  cache: false
});

app.use(serve(__dirname + "/public"));

app.use(route.get("/", index));

function *index (){
    yield this.render('index');
}

app.listen(process.env.PORT, process.env.IP);
console.log("Server is rinning on port: " + process.env.PORT);