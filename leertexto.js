/* Escribe un programa que, usando una llamada síncrona al sistema de
archivos, lea un archivo recibido por argumento e imprima a consola la
cantidad de saltos de línea ('\n') que contiene. Similar a ejecutar cat
file | wc -l.

El programa recibirá la ruta al archivo como único argumento. */

const process = require('process')
const fs = require('fs');
const nombreArchivo = process.argv[2];
const archivo = fs.readFileSync(nombreArchivo);
const contenido = archivo.toString();
const lineas = contenido.split('\n').length - 1;

console.log(lineas)
