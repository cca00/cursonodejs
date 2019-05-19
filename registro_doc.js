const fs = require ('fs');

let datos = {
	cedEst:{
		alias:'ce',
		demand : true
	},
	nomEst:{
		alias:'ne',
		demand : true
	},
	idCur:{
		alias:'ic',
		demand : true
	}
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

x= getRandomInt(1,9999)

let crearArchivo = (cedEstu,nomEstu,curEstu) => {
	texto = 'La persona con nombre: '+nomEstu+' desea inscribirse en el curso con id: '+curEstu.id+' correspondiente a: '+curEstu.nombre;

	fs.writeFile('registro#'+x+'.txt',texto,(err) => {
		if (err) throw (err)
		console.log('Se realizó su inscripción');
			
	});
	
}

module.exports = {
	datos,
	getRandomInt,
	crearArchivo
};