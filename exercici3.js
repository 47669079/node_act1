var os=require('os'); //importem la llibreria OS que ja existeix
var vec=[];

console.log('Memória lliure:'+os.freemem()); //amb la llibreria os podrem veure informacions del sistema


for(var i=0;i<1000000;i++) //Farem un bucle per anar insertant valors a un vector de 1000000 posicions per veure com afecta
{
	vec.push(i);
};


console.log('Memória lliure despres del vector:'+os.freemem()); 
