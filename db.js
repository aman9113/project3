
var express=require('express');
var app=express();
const mongoose=require('mongoose');
const bodyParser=require("body-parser");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));


mongoose.connect("mongodb://127.0.0.1:27017/AIDS", { useNewUrlParser: true},{useUnifiedTopology: true});

const nodes={
	name:String,
	email:String,
	number:Number,
	food:String,
	address:String
}

const book=mongoose.model("book",nodes);
app.get('/',function (request,res){
	res.sendFile(__dirname +"/index.html" ); 
})

app.post("/",function(req,res){

	let newob = new book({
		
		//name:req.query['uname'],
		//age:req.query['password']
		name:req.body.name,
		email:req.body.email,
		number:req.body.num,
		food:req.body.food,
		address:req.body.add,

	});
	newob.save();
	res.send("order booked");
	
})
var server=app.listen(8000,function(){
	console.log("listening");
});