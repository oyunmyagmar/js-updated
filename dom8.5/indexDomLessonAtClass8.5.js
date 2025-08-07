// DOM gj yu ve?
// Yagad DOM ashiglah yostoi ve?
// Yaj DOM -iig ashiglah ve?

// document object model
// web hudasnii code -iig web browser -ruu achallahad uusdeg
// html code browser der ajillahad DOM node -uud gsen zuiler ilerhildeg
// tsana ni js -eer hurvuleh bolomjtoi bolj bga zuil
// DOM -iin tuslamjtaigaar html element -uudiig barij avaad udirdah bolomjtoi gsn ug js code bichij
// html dotor bichsen tag -uud name -uud text -uud ed nariig DOM -iin tuslamjtaigaar js ashiglad uurchluh bolomjtoi boldog
// jishelbel -> ungiig ni uurchluh, daranguit yamar 1 action hih ch yum uu, bairshliig uurchluh zereg uildluudiig hih bolomjtoi

// DOM -iin butets structure?
// html der bdag buttseer yavna
// document dotor html bdag, html dotor head bolon body bdag ...
// DOM der js -eer enenii zarchmaar barij avna
// css bichihed element -uudiig class, id, attribute -eer barij avdag shig
// js der code biched barij avaad yamar neg baidlaar uurchluh blomjtoi bolj bga

// DOM -iig yagad ashiglah yostoi ve?
// js -eer uurchluh udirdah bolomjtoi bolno
// zarim zuiliig darah ued ajilluuldag bolgoy geher css der hij chdahgui bga
// tgvel eniig js -iin tuslamjtaigar husseneeree udirdaj blomjtoi, davuu taltai blno
// buten content -iig urchluh, alga bolgoh, shiner gargaj ireh zrg css -iig husseneeree uurchluh solih blomjtoi bolj bn

// DOM -iig yaj ashiglah ve?
// Node -uudiig select hiij avdag selecter -uud bn
// css -iin selector -uudiig js der barij avdj boldog belen function bdag

// getElementById() ==> id -aar barij avdag <- id bol unique gants l bdag davtagdah yosgui tgeher element
// getElementsByClassName() ==> class -aar <-tiim class -tai buh elements -uudiig barij avna
// getElementsByName() ==> name -eer
// getElementsByTagName() ==> tag -aar <- div? p? h1?
// querySelector() ==> attribute -aar <- hussen utgaa ugch barij avna <- bid nariin yarij bga id, class, style maani uuruu attribute gdeg zuil bgad bga
// querySelector() ==> -iin huvid tiim attribute -tai 1 element barij avna -> class gsen attribute -tai element barij avlaa gehed hamgiin ehnii oldson 1 element -iig barij avna gsen ug
// querySelectorAll() ==> attribute -aar <- attribute der bga utgar ni barij avch bga <- tim attribute -tai buh element -iig barij avna

// DOM der tegvel tedger element -uudiin yug urchilj chdah ve?
// select hisen node -uudiig udirdah uurchluh?

// innerText ==> dotorh text -> <h1>tagiin dund bichsen text</h1>
// innerHTML ==>
// style ==> inline css -iig -> js -iin tuslamjtai style husseneeree nemj bolno
// remove() ==> ustgah <- element -iig ustgah
// appendChild() ==> child node nemeh <- dotor ni dahiad uur <p>, <img> tag zreg hussen element -ee nemeh bolomjtoi
// appendChild() ==> -iin huvid dotor ni bga hamgiin suuliin child -iin hoinoos nemne gsen ug
// createElement() ==> zarim tohioldold zaaval html deeree tag uruud bhgui <- js der uuruur ni shud element uusged teriigee DOM ashiglad html -ruugee nemdeg code bichij bolno
// createElement() ==> tegeher html der zaval buttsee gargaj uruh shardlaga bhgui bolj bn

// jishee

// turshij uzeh

// js -ee html -teigee holbohdoo body dotroo hamgiin door <script> -ee bichne

// body -ruu 1 element nemj uzye
// html der yamar ch element garaaraa usgehgui
// createElement() gsen function -g ashiglah ve?
// ene function ni DOM -iin zuil blohoor
// document gsen tulhuur ug ashiglana
// document.createElement("yamar element usgeh utga string -eer avna");
// document.createElement("h1");
// inged js dere tag -aa usgesen

// eniig js deeree udirdaj ashiglahiin tuld 1 huvisagchid hadgalna
// tgehgui bol ene element -iig barij avch js der udirdaj chdahgui
// tgvel h1 huvisagch uchraas element -nii neree h1 ged nerlevel zgr
const h1 = document.createElement("h1");
console.log(h1, "h1");
// liveServer -ruu orood console.log -oo harval <h1> tag haragdana
// element -ees body -goo harval h1 bhgui bn
// h1 -ee js dere usgesen html dere orulagui
// zgr js DOM dotor bga html dere nemeegui gsen ug

// h1 -iig haragddag bolgohiin tuld appendChild ged nemdeg zuiliig hereglene
// h1 -iig nemehiin tuld haashaa appendChild hiih ve?
// element -iig haashaa nemeh bile?
// hamgiin tom bga ni body

// tegher ehled body -goo barij avna, h1 -ee nemehiin tuld
// body uuruu tag name uchras getElementsByTagName -eer barij avch bolno
const body = document.getElementsByTagName("body")[0];
console.log(body, "body");
// body -oo barij avad liveServer console.log der harval HTMLCollection [body] gsn zuil garch irsen
// dotor ni orj harval length 1 ged array -iin haltad orson bga
// yagad ?
// getElementsByTagName gdeg ni Elements ged olon toon der bn
// ene ni tiim tag -tai buh element -iig songoj bga gsen ug
// body uuruu 1 bdag ch gsen
// bidnii songoj ashiglaj bui get hideg selector ni uuruu olon toogoor avdag blohoor
// array butsaj bga gsen
// tegher body gants bdag blohoor array[0] deh elemtent -iig avna ged bichij bolno

// olon toogoor avdag zuilsuud ni bidend butsgad array ugdug bh ni
// array dotor zuvhun too, string hadgalj boldog gj bodoj bsan dotor ni html element bas hadgalj boldog bh ni

// tgd console.log -oo harval <body> tag garch irj bh yostoi
// body -goo js deree bariad avchihlaa

// odoo body -ruugaa appendChild hiine, h1 buyu say usgesen tag -iig nemye gdeg code
body.appendChild(h1);
// odoo liveServer element -es harval html der <h1> tag orj irsen bn

// h1 tag dotroo text -gui bn
// odoo yaj text nemeh ve?
h1.innerText = "hello world";
// tgd liveServer -ees harval text garaad irj bn

// !!! anhaarah zuil !!!
// appendChild hisnii daraa innerText solison ni
// html -ruu element -ee nemsnii daraa innerText -iig uurchilsun gsen ug
// gehde ene 2-iin bairiig solibol zgr
// zarim tohioldold hooson element nemcheed daraa ni element -ee barij chdahgui bdag
// jishe ni davtalt biched olon element ashiglaj bga tohioldold ternees blood hussen element -ee barij chadahaa bolidog

// tegehr element -ee ehled utgiig ni uurchilchud nembel alda garah mgadlal baga

// odoo style -iig color -iig ni uurchulye
// h1.style ged shud style -aa bichij bolno
// h1.style.color = "red";
// tged liveServer -ee harval ulaan ungutei bolson
// !!! gehdee DOM deer ingej style bichihgui bol zgr !!!
// 1 murund olon style bichdeg shig js der ingej olon style biched bval mash olon bloh ged bn

// h1.style.color = "red"; orond class esvel id gdeg zuilee ugnu
// ehled class -iig onooj ugj uzvel
// .className = ged class -iinhaa neriig ugnu, h1 esvel title gdg ch yumu
h1.className = "title";
// liveServer -ees harval html element -iin class ni title bolson bn

// inged class ugsnii daraa html head dotor <style> tag deeree
// .title gdeg class -aa biched color -iig ni solij bolno
// yalgagui ungu ni uurchlugdunu
// bichiglel tseverhen bolno gsen ug
// ingevel zaval js der style bichij zavarulah shardlagagui gsn ug
// zgr class -aa uguud yavna

// tegvel 2 class ugvul yah ve?
// title gsen class -tai bj bgad araas ni red gsen class nemye gvel yah ve?
// className ged umnuh className deeree + ged zai avaad class neree ugnu
// h1.className = h1.className + " red";
// huuchin bga class title deer ni red gdeg class nemj bga gsen ug
// string -iin title gdg zuil der string red gdg zuil nemj bn gsen ug
// "title" + "red" -> string der nemeh string logic yavj bga

// derh bolj bga gsen ch johon yadargatai bn
// tgvel yah ve?

// belen function bdag
// .classList ni list gdg uudnees olon zuil hadgalah add() gdeg function -tai
// add -ruugaa ehled title -aa nemne
h1.classList.add("title");
// araas ni ene function -aa ashiglad red gedgee nemne
h1.classList.add("red");
// h1.className = h1.className + " red"; ged zaaval uuruu + uildel biched zai avah shardlagagui
// olon yum bichij bval
// ur dun ijil
// ene function ni bidnii hij bga uildliig iluu hyalbarshulj bga gsn ug

// odoo component gj nerledeg 1 jijig hseg hiie
// unegui -giin 1 mashinii card hiie
// html -eer orj chadna odoo js -eer uryu

// deed tald ni 1 zurag
// dood tald ni bold text h5 esvel h6 // hoid tald ni 1 icon
// dor ni mashinii ner title bn
// door ni description

// card -aa hisnii daraa ner uguud function bichij bolno
// tuhain function ni div -uud uusged body -ruu ene uildliig nemdeg
// ene createCard gsn function -aa 2 dudval 2 card -tai bolno
// const createCard = () => {
// ged dotor tald ni js der ursun card -aa higed
// }
// door ni function -ga 2 udaa dudval 2 container -tai bolson bn
// createCard()
// createCard()

// tegvel ogoo yaj olon card gargaj ireh ve?
// ene data -nudiig yaj avah ve?
// array hereg bolno
// array -iin 1 utga ni l 1 card derh mdelel agulna gsen ug
// mnai card ni dotroo uniin dun, discount, ner zereg olon mdeleltei
// bid iim shinj chanar zasan datag array der orulahdaa object ashiglna
// const data = [{}, {}, {}]

// Cannot access 'createCard' before initialization gej bn
// createCard function usged umnu ni map -lah gej uzsen blohor chdahgui bn
// arrow-function ingej chdahgui
// arrow-function -g uurchlud zgr funciton bolgovol deeree duudaj chadna

// arrow function vs zgr function 2-iin yalgaa garch irne
// data -gaa husseneeree uurchlunguut data -nii too nemegdene

// unegui site dotot yu bga ve gvel zgr 1 array dotor object -uud irj bga
// tgd 1 card zurdag function bichsen
// teriigee map -lad butsadag code bichsen

// data =g haanaas avdag ve?
// dataBase gdeg yumnas avna
// db dotor iim data hadgalagdsan bn
// data -gaa bd -eesee avlaa
// map -ldag frontend code bichne gsen ug

// ene data-g haanaas yaj avch bn gdgiig harj bolno
// db -ruu huselt yavulj bj avdag
// liveServer -> inspect -> network -> Fetch/XHR gsen hesgees Fetch -iig songovol
// avtomat -aar code bichsenii daguu tsaash huselt yavulahiig Fetch -leh gdeg
// Fetch -iin datag harj bolno
// ireduid react uzeher server-side-render, front-end-render buyu client-side-render gedg zuil uzne
// yaj data -gaa nuuh ve? uzne

// iimerguu data -g backend der usgej hadgalad
// frontend dere ene data -g map -lad haruldag yum hiine
// odohondoo backend uzegui blohor frontend der huramchar data uusged
// frontend der urdug code biched bn gsen ug
// bodlogo der ashigladag map ni ene data -aaraa damjaad card -uuda zurdag zuil der ashiglagdana

// tgvel unegui site der uniin dunger filter -lne geve
