# Doku --> https://www.npmjs.com/

# Version

npm -v

# install

npm i packagename
npm install packagename

# adding global packages

sudo npm i -g packagename

# get newest npm vesion

sudo npm i -g npm

# init new npm thing ... use --yes to give to every question the default answer

npm init --yes

# when you have downloaded a git repo with npm stuff init

# usualy it haves a package.json

# this files contains the infos which package should be loaded

# use this to get the depencys

npm install
npm i

# uninstall package

npm uninstall packagename
npm un packagename

# package json versioning things

the Caret ^ tells that the major version should stay 16.X.X here
if there is Tilde ~ then it should stay 1.1.X

# get list off all modules and dependencys used

npm list

npm list --depth=0

# view a packages information

npm view express

# install a package at a specific version

npm i express@1.0.0

# dealing with different versions

# with this you see what you got compared to what your package.json say is max or exact (remember ^ and thes Tile things)

# it also shows the newest version availeble

npm outdated

# when you have different version you can run the follow / it will update to max version passible according to your json package file settings

npm update

# to easy simulate this run npm i packagename@someoldversion

# then run npm outdated

# write the newest version in packahe.json

# and then run update

# and funaly outdated again

# then you se the changes in the versions obviosly

# now installing a new tool globaly

npm i -g npm-check-updates

# then you can run

npm-check-updates

# or simply

ncu

#now update all packages and update package.json by ncu -u
ncu -u

# adding dependencys that are only used for dev

npm i jshint --save-dev

# show globaly installed outdated

npm -g outdated

# uninstall global of course :)

npm un -g ...

# list all globaly installed packages

npm -g list --depth=0

# making your own npm package

# create a folder

# run init

npm init --yes

#create a index.js as an entry point of the package

# but you need to have an account on npm

# then login

npm login

npm publish

# Update a version of your own package

npm minor version
