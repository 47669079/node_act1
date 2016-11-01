var Mates=function(){

	this.PI=3.1415297; //Constant pi, una constant és com una Array que no és pot modificar

	this.operadors={ //array operadores

		op1:0, //definimos los operadores
		op2:0

	};
	

	this.suma=function(op1,op2) //funcion suma
	{
		var res=op1+op2;

		this.operadors={
			op1:op1,
			op2:op2
		};

		console.log('suma de '+op1 +' y '+ op2 +' és '+ res);
		return this.operadors; 
	};

	this.resta=function(op1,op2) //funcion suma
	{
		var res=op1-op2;

		this.operadors={
			op1:op1,
			op2:op2
		};

		console.log('resta de '+op1 +' y '+ op2 +' és '+ res);
		return this.operadors; 
	};

	this.dividir=function(op1,op2) //funcion suma
	{
		var res=op1/op2;

		this.operadors={
			op1:op1,
			op2:op2
		};

		console.log('divisió de '+op1 +' y '+ op2 +' és '+ res);
		return this.operadors; 
	};

	this.multiplicar=function(op1,op2) //funcion suma
	{
		var res=op1*op2;

		this.operadors={
			op1:op1,
			op2:op2
		};

		console.log('multiplicació de '+op1 +' y '+ op2 +' és '+ res);
		return this.operadors; 
	};

	this.pi=function()
	{
		console.log('numero PI: '+PI);
	};

};

module.exports=Mates; //MUY IMPORTANTE EXPORTAR EL PAQUETE!!!!!