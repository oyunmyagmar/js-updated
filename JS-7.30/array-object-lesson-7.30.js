let products = [
  {
    name: "iPhone 13",
    category: "Electronics",
    price: 1200000,
    stock: 10,
    brand: "Apple",
    rating: 4.8,
    isDiscounted: true,
    discountPercent: 10,
    supplier: "MobiCom",
    weight: 0.3,
  },
  {
    name: "Samsung Galaxy S22",
    category: "Electronics",
    price: 950000,
    stock: 5,
    brand: "Samsung",
    rating: 4.5,
    isDiscounted: false,
    discountPercent: 0,
    supplier: "Unitel",
    weight: 0.28,
  },
  {
    name: "Dell XPS 13",
    category: "Computers",
    price: 2800000,
    stock: 3,
    brand: "Dell",
    rating: 4.7,
    isDiscounted: true,
    discountPercent: 15,
    supplier: "PCMall",
    weight: 1.2,
  },
  {
    name: "Mouse Logitech M590",
    category: "Accessories",
    price: 85000,
    stock: 20,
    brand: "Logitech",
    rating: 4.3,
    isDiscounted: true,
    discountPercent: 5,
    supplier: "PCMall",
    weight: 0.1,
  },
  {
    name: "MacBook Air M2",
    category: "Computers",
    price: 3200000,
    stock: 0,
    brand: "Apple",
    rating: 4.9,
    isDiscounted: false,
    discountPercent: 0,
    supplier: "MobiCom",
    weight: 1.1,
  },
];
// bodlogo 17
// davhtsagui suppliers -uudaa olohiin tuld
// ehleed suppliers name -iig avah yostoi
// suppliers name -uudiig array dotor hurvuuleh hregtei
// array.map() ni array -iig butsaadag
// array.map() ni array -iin elementuudiig butsaana gehdee:
// array.map() ni array -iin element tus buriig todorhoi hemjeger uurchluh, ustgah, nemeh tohioldold ashiglana
// jishelbel busad field -iig ustgaad zuvhun supplier uldeh heregtei bol hereglene
// array.map() return deer array -iin yamar element ustgah ve? nemeh ve? gedgee bichne

const suppliers = products.map((product) => {
  return product.supplier; //array -iin 1 element buyu product -iin zuvhun supplier -iig avmar bn gej ugnu
});
const uniqueSuppliers = []; // shine array uusgene, hooson
// oilgomjtoi bhin tuld ehled for loop -eer bichle, suppliers -aa davtana
for (let i = 0; i < suppliers.length; i++) {
  if (!uniqueSuppliers.includes(suppliers[i])) {
    uniqueSuppliers.push(suppliers[i]);
  }
}
// element tus buriig uniqueSuppliers array -ruu push hiine
// push hiihes umnu suppliers[i] buyu suppliers -iin i -dahi element maani uniqueSuppliers array -d bnu? -g shalgana
// teriig shalgadag array method -iin belen function bga, boolean butsaadag
// array.includes() <- (dotroo shalgah yostoi utgaa ugnu)
// uniqueSuppliers.includes(suppliers[i]) -> suppliers[i] bval true butsana bhgui bol false butsana
// if ni boolean utga avdag uchir true bval ajillana false bval ajillahgui
// tgvel false bh ued buyu suppliers[i] bhgui bh ued push -lmaar bn, true bval push -leh shardlagagui
// !uniqueSuppliers.includes(suppliers[i]) -> urd ni ! temdeg taviad
// ! ni esregeeree, false bol true bolgood true bol false bolgono
// false -iig esregeer bolgohoor true bolgod ter ued code maani ajillana
// ter ued uniqueSuppliers -ruu push hiine suppliers[i] buyu tuhain element -iig pushlene
// uniqueSuppliers.push(suppliers[i])
console.log(uniqueSuppliers);
console.log(suppliers); // <- 74 -deh murnii console.log, eniig davharddaggui uniqueSuppliers bolgoh gd bn

// array.sort ni erembledeg zuil -> sort hereglehgui

// ymarch element orj irsen, heden ch element -tei bsn hamaagui
// ajilladag code bichih ni chuhal
// olon dahih ashiglagdah bolomjtoi generic code bichihiig hicheeh
// generic code bichih ni sain chadvar/engineer/
// deerh code ni beginner level tuvshind

// deerh huvilbaraar bichsen function -aas harval
// array.includes() function ni suppliers[i] -iig bga esehiig shalgaj bn gdeg ni
// uniqueSuppliers array dotroo bga buh element -eer guij bga gsen ug
// tgeher udan ajillaj bga gsen ug

// iim ued objects gedgiig sain ashiglaj surah heregtei

// object -ruu element hiih or field nemeh

const data = {}; // data gsen hooson object uusgeed yaj field nemeh ve?
data.category = "food"; // ene baidlaar field nemne
console.log(data);

// object ni array-aas yamar davuu taltai ve?
// dotroo heden field -tei bh ni hamagui shuud direct nereer ni barij avah haih bolomjtoi
// object ni array.includes() shig buh element -eer haij guih shardlagagui shuud uuruu olj avch chadna

data.test1 = 1;
console.log(data);
data.test2 = 2;
console.log(data);

data["category"];
// objectiin araas array [] haalt taviad dotor ni string -eer haih utgaa ugnu
// ingevel food gsen utgiig nadad butsaj ugnu
console.log(data["category"]);
// ene food-iig gargaj irehed test1, test2 -iig davtahgui bga gsen ug

// herev object bish ["food", "test1", "test2"] array bsan bol zaaval 3 -uulangaar davtaj 3 element 3 -uulang ni shalgaj bj meddeg
// object bol tegdeggui, shud hussen element -ee barij avdag

// code -nd yaj ashiglagdah ve?

const categories = products.map((product) => {
  return product.category;
});
const uniqueCategories = {}; // map -lsnii daraa 1 object uusged nemed bj chadna
categories.forEach((category) => {
  uniqueCategories[category] = true;
});
// categories.map esvel categories.forEach hiivel zgr
// uchir ni categories -iig uurchluh shardlaga bhgui uchir
// .forEach syntax ni .map -tai ijilhen gehde return hiigeegui tohioldold ashiglaval zgr
// yu ch butsagagui, yu ch uurchluugui tohioldol
// uniqueCategories[category] = true -> uniqueCategories -ruu category -iig zgr true ged nemne

console.log(uniqueCategories);
// ene garch irsen object -iig array bolgoj hurvuldeg zuil buyu function bdg
// Object gsen keyword bdag -> object -iin method -iig ashiglahad zoriulsan
// Object.key bolon Object.value 2 songolttoi
Object.values(uniqueCategories);
console.log(Object.values(uniqueCategories));
Object.keys(uniqueCategories);
console.log(Object.keys(uniqueCategories)); // manai bodlogo der zuvhun keys -iig avahad bolno

// ene ni categories.length -eer buyu 5 udaa l ajillaj bga
// hamaagui hurdan, iluu efficient

// object bodlogo
