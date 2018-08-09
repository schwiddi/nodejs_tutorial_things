// wenn du sachen importiertst
// sucht node in drei stufen nach dem modul welches du wollst


// in diesem fall geht node davon aus das es ein Core modul gibt das http heisst
const bla = require('http')

// wenn du eigene sachen importierst muss du zwingen mit ./ signalisieren das du ein eigenes modul willst
const bla2 = require('./app') // das .js mach node selbst hinzu du kannst es aber auch schreiben

// dritte variante
// node sucht in node_modules / natürlich nur wenn vorhanden
 // da es hier in diesem folder keinen subfolder
 // modules gibt von npm wir das nicht klappen aber trozdem ist es hier beschrieben
const bla3 = require('underscore')
