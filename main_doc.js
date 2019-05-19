const registro_ref = require ('./registro_doc');
const cursos_ref = require ('./cursos_doc');

const argv = require ('yargs')
				.command('inscribir','Realizar una inscripcion',registro_ref.datos)
				.argv;

let findCursoID = (id_Cur) => cursos_ref.lista_Cursos.find( curs => curs.id == id_Cur);

if (typeof(argv.ce && argv.ne && argv.ic) != 'undefined' ) {
	if (typeof(findCursoID(argv.ic)) == '')  {
		console.log('No se encuentra el id del curso ingresado\n A continuación, vea la lista de cursos disponibles');
		cursos_ref.mostrarCursoRetardo();
	}else{
		registro_ref.crearArchivo(argv.ce,argv.ne,findCursoID(argv.ic));
		cursos_ref.infoRegistro(findCursoID(argv.ic));
	}
}else{
	for (i = 1; i <= (cursos_ref.lista_Cursos).length; i++) {
		cursos_ref.mostrarCursoRetardo(findCursoID(i),function(res){
		console.log(res);
		});
	}
}
