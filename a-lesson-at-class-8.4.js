// 8.4 nodejs

// js ni webpage web application hiihed zoriulsan hel
// js -iin gants ajillah yostoi orchin ni browser gdeg zuil
// browser -gui bol js ajillahgui
// yamar 1 website -> inspect -> network <- tsana ashiglaj bui js bolon html -iig server-ees tataj bga

// nodejs -> js -iig browser -gui dangara ajillah bolomj olgoj bga zuiliig

const a = 5;
const b = 4;
console.log(a + b);
// eniig browser -gui ajilluulj bui zuiliig nodejs gene
// bidnii ajilluulj bsn code runner extension ni nodejs der suurilsan belen software

// nodejs -iig herhen yaj ashiglah ve?
// terminal deeree -> node -v ged version -iig checkleh
// js gile -iig ajilluulahdaa -> node index.js

// nodejs -iig package manager buyu npm gedg zuiltei horshulj ajillana
// npm -> package -uud buyu yamar 1 zuil hideg belen sanguud bga <- teriig zohitsuldag sulgadag ustgadag zuiliig helne

// tgvel yaj npm gedgiig ashiglad humuusiin hisen bga sanguudiig ashiglah ve?
// ehled vscode terminal der npm init command ugnu <- package -iinhaa stack -iig beldene

// npm init -> doorh zuil garch irne
// package name? -> ugch bolno esvel enter
// software description? -> ugch bolno
// main file ? -> ene package -iin hamgin ehend ajilluulah file -iig zaaj ugdug
// test command ? -> bhgui bolohor enter
// ...
// duusgaad enter darval package.json gdeg zuil uusne
// package.json dotor ni bidnii say bichsen zuils bn
// "author" deer uursdiin neree bichij bolno

// package.json dotor "scripts" gsen hseg bga
// "scripts" -> package.json -iig ajilluulahad blen bolgoson command -uudiig nerlene
// end uursdiin js file -aa ajilluldag command -aa hine
// "start" gj nerled ih bichigleltei command -iig 1 ugeer ajilluulj boldog bolgono

// package
// browser -aas npm gj haina -> npmjs
// endes hussen package -uudaa haigaad ashiglaj bolno
// jishee: console.log color change -> sanguud garch irne -> hamgiin ehniih ni -> moo-color
// moo-color -> door ni yu hideg, yamar version der yavj bga, heden jilin umnu hamgin suld release hisen, 7honogt download hisen too garch irne

// moo-color package -ruu orloo
// zaavar garch irne -> yaj herhen sulgah ve?
// install gsen command -iig huulad vscode terminal deeree paste hij bolno
// esvel terminal deeree npm i packageName bichij bolno -> i ni install -iin tovchlol
// amjilttai install hisen node modules gsn zuil uusne
// mun package-lock.json file garch irsen bh yostoi

// install dussan bol package.json -nii dotor door ni "dependencies" gj zuil bga
// "dependencies" -ees harval susan package ymar version -tei bga ni garj irne

// package suulgasanii daraa dood taliin documentation -iig unshval zgr
// documentation -> install zaavar, usage buyu herhen yaj ashiglah ve gdg zavar bga

// package -aa ashiglahaasaa umnu js file deeree orulna
// yaj orulah?

// import geed
// bidnii ashiglah gj bga gol package -iin function ni color gdg function bn
// ter ni color gdg huvisagch usgesen bn -> const color = new MooColor('#f00');

// mooColor -oor orulj ired -> 1 huvisagch -d hadgallaa -> araas ni from ged package -iin ner bichne
// import MooColor from 'moo-color';

// import -iin end bichsen text bol huvisagch gsn ug, husseneere urchulj bolno
// ('#f00') -> # -tai Hex color code bn -> ulaan ungu
// araas ni ulaan ungu uguud urd ni zaval # bna Hex code uchras
// ashiglahdaa color.whiten(10).toString('hwb'); <- shud copy paste hiile

// js file -aa ajilluulna -> node index.js esvel npm start ali alinaar ni bolno
// aldaa garna -> cannot use import statement outside of module <- zuv bn
// yagad? -> package.json deeree shine zuil nemj ugugui bga

// package.json "author" -iin door "type" gdge heseg bga
// ter type ni commonjs gsen bga -> package -iig orulj irehde huuchin syntax -aar js -iig bichne gj oilgodog
// bid nariinh module ashiglaj bga blohor "type" -iig ni module bolgoj solino
// "type" bhgui bol biched orulna

// dahiad uzeheer constructor gdeg zuil bhgui gj aldaa zaaj bn -> uur package -aa uzye

// console.log color change npm -> console-log-colors gsn sang turshij uzye
// ene package -aa terminal deeree suulgad -> import hesgiig shud copy -dood js dere orulla
// door ni console.log bichle -> console.log(color.red("Hello World"));
// color gdg 1 zuiliig oruulj ired import ged {} haalt dotor ugluu -> package dotroosoo color gsen belen function avch bga
// ter color ni bid nariin text -iin ungiig uurchuldug function bn
// color.red ged ulaan ungiig songoloo araas ni ulan ungutei bolgoh text -ee bichlee
// tgd npm start -> text ulan ungutei bolson

// humusin bichsen belen function ashiglaj bga gsen ug
// bidnii ashiglasan belen package -uud haashaa orj bga ve? -> node module gdg zuild orj irne
// orvol read.me gsen hseg bn -> ydag package, yaj sulgah ve ged zavar, documentation -uud ni bga
// src heseg der -> js ni yaj ajillaj bui code -uud ni bga
// code -iig ni harval -> index.js file bn, color -uud orulj irsen bn, 1 object bn, Hex code -oor ungiig ni ugsun,
// dooshoo console.log -iin text -iig urchulj bui gol code -uud bga
// bidnii ashiglaj bga ni color gsn function
// ene function ni parameter ni string bolon colortype gdeg zuil avdag ni haragdana

// color gdeg function git fn gsn function ajillulj bn
// git fn function ni deeree 1 function -tai, cls -ees list gdeg zuilees colortype -aar buyu bold italic avch bna

// inged source code -uud ni npm module dotor orj irne
// ireduid react next uzed yavna
// react ni uuruu package manager -t surilsan belen front-end -uuded zoriulsan sangud bga gsn ug

// node modules gsen zuiliig github -ruu push -lehgui
// yagd? -> ajillaj bga source code blohor ih zai ezelne, size undur
// eniig push -leed bval github repo -iin size durne -> repo oiroltsogor 5GB file -iig hadgalah zoriulalttai

// yaj github -ruu nemehgui bh ve?
// 1. repo shiner uusgehde Add .gitignore hseg der node gdgiig songovol -> github -ruu push -lehgui ignore -doh command -uud garch irne
// repo usgenguut .gitignore gsen file garch irne
// dotor ni orj harval ene ene file -uudiig ignore -dono ged ugsun bga

// dooshoo guilgeed # Dependency directories ged -> node_modules/ ged bid nariin sulgasan sangiin folder bn
// ene folder -iig push -ledeggui gsn ug, uuruu ignore hiine

// esvel garaaraa bichij bolno
// .gitignore ged file usgele -> urdaa . -tei file ni nuts file bn
// .gitignore dotroo node_modules/ ged bichne <- node modules -iig ignore -dono

// tegvel package -aa buyu module -aa push -lehgui yaj shiglah ve?
// package san bhad l yamar package -aa sulgahaa mdej chaddag gsen ug

// "dependencies" dotor bga hesgiig node modules -aa ustgala -> trash -ruga move hiile
// ymar 1 zuil suulgahgui npm i hiine -> package.json dotor bichigdsen package -uudiig uuruu install hine
