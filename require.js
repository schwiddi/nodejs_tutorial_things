// wenn du sachen importiertst
// sucht node in drei stufen nach dem modul welches du willst


// in diesem fall geht node davon aus das es ein Core modul gibt das http heisst
const bla = require('http')

// wenn du eigene sachen importierst
//muss du zwingend mit ./ signalisieren das du ein eigenes modul willst
 // das .js mach node selbst hinzu du kannst es aber auch schreiben
const bla2 = require('./app')

// dritte variante
// node sucht in node_modules / natürlich nur wenn vorhanden
 // da es hier in diesem folder keinen subfolder
 // modules gibt von npm wird das nicht klappen aber trozdem ist es hier beschrieben
 // damit du dran denkst :)
const bla3 = require('underscore')
