const express = require("express");
const app = express();
const PORT = 3000;

app.get('/',(req,res)=>{
	res.write("Hellooo");
	res.end();
})	

app.listen(PORT,()=>console.log(`server running in ${PORT}!`))
