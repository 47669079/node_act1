var os=require('os');
var vec=[];

console.log('Memória lliure:'+os.freemem());


for(var i=0;i<1000000;i++)
{
	vec.push(i);
};


console.log('Memória lliure despres del vector:'+os.freemem());