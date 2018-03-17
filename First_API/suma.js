const express = require ("express")
const app = express();

app.get("/suma/:num1/:num2/",(req,res)=>{
	var num1= parseInt(req.params.num1)
	var num2= parseInt(req.params.num2)
	var suma= num1 + num2
	res.send(suma)
})



app.listen(3000,()=>{
	console.log('Magic happems in 3000!')
});