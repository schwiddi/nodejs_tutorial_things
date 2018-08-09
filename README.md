# nodejs_tutorial_things
here i'll store some code samples and things


# nodejs documentation
https://nodejs.org/dist/latest-v8.x/docs/api/


# Personal Notes
# Naming Convention
Klassen werden immer gross geschrieben bzw. CamelCase

z.B.: const EventEmitter = require('events');

Wenn du von einer Klasse etwas holst, musst du diese zuerst instanzieren also ein Objekt einer Klasse erstellen.
Gutes Beispiel, ist die Klasse "Mensch" und du erschaffst mit dem Instanzieren eine Person von der Klasse Mensch.

Also wie oben zuerst holst du dir die klasse oder bauplan
const BauplanMensch = require('human');

und dann machst du eine Objekt von der klasse
const dominik = new BauplanMensch();



# function vs method
a function is a function
a function inside a class is a method.


# package json versioning things
the Caret ^ tells that the major version should stay 16.X.X here
if there is Tilde ~ then it should stay 1.1.X
and all this is called semantic versioning