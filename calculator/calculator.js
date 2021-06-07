const express = require("express");
const flash = require("connect-flash");
const app = express();
const bodyParser =  require("body-parser");
app.use(flash());

app.set("view engine","hbs");

app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000,(req,res)=>{
    console.log("Server is running on port no:3000");
});

let globalsum='';
app.get("",(req,res)=>{
	res.render("index");
});
  app.post("/cal",(req,res)=>{
    		let n1 = Number(req.body.v1);
    		let n2 = Number(req.body.v2);
    		let n3 = Number(req.body.dropdown);

    		if(n3 == 1){
    			const sum = n1 + n2;
    			globalsum = sum;	
    		}
    		else if (n3 == 2){
    			const sum = n1-n2;
    			globalsum = sum;
    		}
    		else if (n3 == 3){
    			const sum = n1*n2;
    			globalsum = sum;
    		}else{
    			const sum = n1/n2;
    			globalsum = sum;
    		}	
    		
    		/*var string = encodeURIComponent(sum);
 			 res.redirect('/cal?valid=' + string);*/
 			  res.render("op",{
    	n:globalsum,
    });
    	
    		
    });

app.get("/cal",(req,res)=>{ 
	// var passedVariable = req.query.valid;

    res.render("op",{
    	n:globalsum,
    });


    
});
 app.get("/*" , (req,res)=>{
 	res.render("error");
 });

    
  

