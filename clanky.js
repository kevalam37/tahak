const clanky = [
    {
        nadpis: "Rozvržení stránky",
        id: "rozvrzeni-stranky",
        images: ["images/01.jpg"],
    },
    {
        nadpis: "<!DOCTYPE>",
        id: "<!DOCTYPE>",
        kod: `<!DOCTYPE html>
<html lang="cs">
  <!--specifikování jazyka stránky nebo nějakého elementu. cs - čeština, en - angličtina, sk - slovenština-->
  <head>
    <!--Hlavička obsahuje informace pro prohlížeč-->
    <title>Titulek stránky</title>
    <!--důležitý pro vyhledávače z hlediska SEO. Titulek by měl obsahovat klíčová slova a zobrazí se jako nadpis záložky v prohlížeči. -->

    <meta charset="UTF-8" />
    <!--poskytuje tzv. metadata, která nezobrazí uživateli, ale jsou určeny zejména vyhledávačům.
    * charset - Specifikuje znakovou sadu dokumentu. Nejčastěji obsahuje hodnotu UTF-8.-->
    <meta name="author" content="Václav Bejtler" />
    <meta name="description" content="Popis stránky pro vyhledávače" />

    <base href="http://www.mujweb.cz/obrazky/" />
    <!--nastavení kořenové složky pro relativní odkazy v dokumentu-->
    <link rel="stylesheet" type="text/css" href="style.css" />
    <!--používá se k provázání dokumentu s externím souborem, má tyto atributy
    href - Specifikuje umístění připojovaného souboru (dokumentu).
hreflang - Specifikuje jazyk připojovaného dokumentu.
media - Specifikuje typ zařízení, pro které je připojovaný dokument určen (jedná se o pravidlo @media).
rel - Specifikuje vztah mezi dokumenty. Nejčastější hodnoty jsou stylesheet a icon, existuje jich ale mnohem víc.
type - typ připojovaného souboru (dokumentu). Nejčastěji text/css.-->
    <link rel="icon" href="favicon.ico" />
    <!--Ikonku na stránky připojíme takto. V HTML 5 lze toto připojení ikony přes tag <link> nepoužít a místo toho umístit do kořenové složky s webovými stránkami ikonu pod názvem favicon.ico. Prohlížeč si ji pak najde sám.

Ikonku by měla mít každá webová stránka, pokud si například nějakou stránku uložíme jako odkaz na plochu v telefonu, měli bychom mít onu ikonku. Ikonka se nám zobrazuje také v prohlížečích. Existují lidé, co mají otevřeno tisíc listů zároveň a jediné, co vidí, jsou právě ikonky-->
    <style type="text/css">
      h1 {
        color: blue;
      }
    </style>
    <!--Element <style> slouží k vložení stylování přímo do HTML dokumentu. Příliš se nevyužívá, jelikož se styly preferují v externím souboru.-->
    <script>
      document.write("Ahoj světe!");
    </script>
    <noscript> Váš prohlížeč nepodporuje JavaScript! </noscript>
    <!--Tyto tagy se využívají pro skriptovací jazyk JavaScript, přesněji řečeno, je k tomu využíván pouze jeden, ten druhý se využije v případě, když není JavaScript v prohlížeči povolen.-->
  </head>
  <body>
    <!--Hlavička obsahuje informace hlavně pro prohlížeč-->

    <h1>dobrý den</h1>
  </body>
</html>
`,
        
},
    {
        nadpis: "<!DOCTYPE> - základní",
        obsah: "Průběžně doplňovat",
        id: "<!DOCTYPE> - základní",
        kod: `<!DOCTYPE html>
<html lang="cs">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
`,
        popisek: "„Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        
    },
    {
        nadpis: "<body>",
        obsah: "„Obsah HTML dokumentu se nachází v elementu <body>. Většinou však <body> dále rozdělíme do několika sekcí s různým významem, které tvoří tzv. layout. Před příchodem HTML 5 sekce představovaly divy, HTML 5 však nyní přišlo s novými značkami právě pro tvorbu layoutu, které vždy dávají určité sekci určitý význam. To pomůže např. vyhledávačům lépe pochopit obsah stránky. Layout se s postupem času vyvíjel. V dávné minulosti se k jeho tvorbě využívaly rámce nebo tabulky. S příchodem dynamických stránek se skládal z divů a ty jsou nyní nahrazeny novými tagy. Z hlediska ergonomie je výraznou změnou přesunutí navigačního menu nahoru, které nejčastěji vypadá jako vodorovný řádek. Dříve byla navigační oblast nejčastěji jako levý sloupec. Součástí layoutu zůstala hlavička a patička. Objevila se nová oblast v podobě pravého sloupce, který obsahuje doplňující obsah k článku. Tyto změny v koncepci webové stránky se občas označují termíny jako web 2.0 a web 3.0.",
        id: "<body>",
        
        images: ["images/02.jpg"],
    },
    {
        nadpis: "<header>",
        obsah: "„Hlavičku stránky (neplést s hlavičkou dokumentu <head>, která není pro uživatele, ale pro prohlížeč) definujeme tagem <header>. Tag <header> zpravidla obsahuje nadpis h1, případně dva nadpisy sloučené pomocí tagu hgroup. Nadpisy se v tomto případě váží k celému webu (jako vše v header), ale header můžeme stejně tak vložit i do dalších sekcí stránky. Header dále zpravidla obsahuje obrázek s logem, vyhledávací pole nebo např. možnost výběru jazyka. Kód jednoduchého headeru by mohl vypadat takto:",
        id: "<header>",
        kod: `document.body.innerHTML = "<header>
    <img src="images/03.jpg" alt="Psí potřeby" />
    <hgroup>
        <h1>Psípotřeby.cz</h1>
        <h3>To nejlepší pro vaše čtyřnohé miláčky.</h3>
    </hgroup>
</header>";`,
               
    },
    {
        nadpis: "<nav>",
        obsah: "Tag <nav> obsahuje navigační prvky. Může být součástí header nebo stát samostatně pod ním. Můžeme ho samozřejmě použít kdekoli na stránce, ale zvykem je mít navigaci pod hlavičkou. Obvykle obsahuje nastylovaný seznam <ul>, jehož položky reprezentují odkazy na jednotlivé podstránky. Uveďme si příklad navigačního menu:",
        id: "<nav>",
        kod: `<nav>
    <ul>
        <li>O nás</li>
        <li>Hračky</li>
        <li>Vodítka</li>
        <li>Krmivo</li>
        <li>Pelíšky</li>
        <li>Kontakt</li>
    </ul>
</nav>`,
        images: ["images/04.jpg"],
        popisek: "Velmi často se seznamy stylují bez odrážek (teček), proto někdy nejde ani poznat, že se o seznamy jedná.",
        
    },{
        nadpis: "<footer>",
        obsah: "Patička obvykle obsahuje copyright, informace o autorovi a případně další odkazy (např. na mapu stránek a podobně). Mohli bychom ji napsat např. takto:",
        id: "<footer>",
        kod: `<footer>
    <p>Copyright (C) 2012 PsiPotreby.cz, Jan Novák</p>
</footer>`,
                
    },{
        nadpis: "<section> - <article>",
        obsah: "Section se používá zejména k označení těla dokumentu mezi hlavičkou a patičkou. Právě zde se nalézá samotný článek nebo články.",
        id: "<section> - <article>",
        kod: `<article>
    <header>
        <h1>Krmivo DOG plus</h1>
    </header>
    <section>
        <p>DOG plus je speciální a kompletní krmivo pro aktivní psy všech plemen... </p>
    </section>
</article>`,
                
    },{
        nadpis: "<aside>",
        obsah: "Jako součást moderních layoutů se osvědčil postranní panel, pro který se v HTML 5 nabízí tag <aside>. Je logicky chápán jako soubor doplňujících informací k článku. Obvykle jsou zde umístěny odkazy na další podobné články, informace nebo reklamy.Tag můžeme použít i mimo layout pro vymezení něčeho, co nepatří k hlavnímu tématu daného bloku. Můžeme zde např. psát různé poznámky nebo vysvětlivky k textu. Nabízí se např. k obalení definičního seznamu (slovníku pojmů). Po přidání CSS můžeme mít tento výsledek webové stránky:",
        id: "<aside>",
        kod: `<aside>
    <h1>Podobné produkty:</h1>
    <ul>
        <li>Psí tyčinka Multivitamin</li>
        <li>Vitamíny pro psy</li>
        <li>Doplňky stravy</li>
    </ul>

    <h1>Akční nabídky:</h1>
    <ul>
        <li>Vodítko Denny</li>
        <li>...</li>
    </ul>
</aside>`,
        images: ["images/05.jpg"],
        popisek: "Prohlížeč bude mít alespoň jasno, co kam patří a může nám to někdy pomoct i v SEO optimalizaci.",
        
    },{
        nadpis: "<main>",
        obsah: "Další HTML element, který k layoutu patří je <main>. Vše v tomto tagu by mělo být unikátní. Jako příklad si uveďme a web, co má sekce, které se opakují (hlavička, zápatí, navigace...), nic z toho by v tagu <main> nemělo být. Co by ale v něm být mělo je každý článek, ten je totiž na síti unikátní. Tag by měl být na stránce pouze jeden a neměl by být potomkem tagů <article>, <aside>, <footer>, <header> a nebo <nav>, které známe z minulého dílu. Tag <main> můžeme využít například takto:",
        id: "<main>",
        kod: `<main>
  <article>
    <h1>Základy HTML 5</h1>
    <p>Jazyk HTML je základem pro tvorbu webů. Sám o sobě je velmi jednoduchý a všechny webové stránky ho využívají. Složitější weby HTML míchají s několika dalšími jazyky, některé z nich si v seriálu také ukážeme.</p>
  </article>
</main>`,
                
    },{
        nadpis: "<time>",
        obsah: "Tento tag může zajistit lepší indexaci naší stránky, protože stroj tento čas zpracuje bez námahy a chápe ho. Kromě lepší indexace to může využít nějaký upomínkovač, který bude vyhledávat tyto tagy.",
        id: "<time>",
        kod: `<p>25. narozeniny budu mít <time datetime="2022-07-10">10. července</time>.</p>

<p>Koncert od skupiny Queen bude ve <time datetime="20:00">20:00</time>. Budou hrát přes <time datetime="PT2H30M">2h 30m</time>.</p>`,
                
    },{
        nadpis: "<summary> a <details>",
        obsah: "Tag <summary> v HTML 5 označuje titulek sekce s detaily, kdy se po kliknutí na něj ukážou detaily. Používá se v tagu <details> a měl by být shrnutím skrytých detailů. Tag <details> se v HTML 5 používá k označení zmíněných podrobnějších informací, které jsou skryty a uživatel je může zobrazit. Tag <details> může mít atribut open. Atribut je typu boolean a pokud je uveden, zobrazí se sekce <details> otevřená.",
        id: "<summary> a <details>",
        kod: `<img src="/images/713/html/assets/ntb.png" alt="Ultrabook ASUS ZENBOOK" style="width: 150px; float: left" />
<details open>
        <summary>Ultrabook ASUS ZENBOOK</summary>
        <p>
                Ultra mobilní notebook v hliníkovém kabátě v neuvěřitelně tenkém provedení.
                Osmijádrový procesor Intel Core i7-7700HQ (2.8GHz); 8GB operační paměti DDR4 (2666MHz);
                13.3" HD LED displej; grafika Intel HD Graphics; 64GB SSD + 500GB HDD; rozhraní:
                Bluetooth, Wi-Fi, kamera, USB 3.0; operační systém Windows Home Premium x64
        </p>
</details>`,
                
    },{
        nadpis: "<figure> a <figcaption>",
        obsah: "Tag <figure> označuje ilustraci. Vlastností ilustrace je, že se týká článku. Ilustrace může být obrázek, fotografie, diagram, graf apod. Nemusí to však být jen obrázek, ilustrovat obsah článku může i tabulka nebo zdrojový kód. Element je chápán jako samostatný a je z hlavního obsahu odkazován. Pokud ho přesuneme do jiného bloku, nenaruší se tok dokumentu. Častou chybou je, že si lidé myslí, že tag <figure> je každý obrázek na webu. Element je ovšem určen k doplnění hlavního obsahu. S <figure> je úzce svázán tag <figcaption>, který nastavuje popisek. Ukážeme si příklad použití těchto dvou elementů:",
        id: "<figure> a <figcaption>",
        kod: `<p>
        Kos černý (Turdus merula) je pták žijící v celé Evropě a v jižní Asii, byl introdukován i do
        Austrálie a na Nový Zéland. Díky své přizpůsobivosti se adaptoval na život v blízkosti člověka a
        úspěšně žije a hnízdí i v těsném sousedství lidských sídel. Samci jsou nepřehlédnutelní svým
        charakteristickým černým peřím a žlutým zobákem, upozorňují na sebe také melodickým zpěvem.
</p>

<figure>
  <img src="/images/713/html/assets/kos-cerny.jpg" alt="Kos Černý"
  width="320" />
  <figcaption>Kos Černý na plotě</figcaption>
</figure>`,
        images: ["images/07.jpg"],
                
    },{
        nadpis: "<ul> seznam",
        obsah: "Seznam používáme vždy, kdy potřebujeme vyjmenovat položky, které se sebou nějak souvisí. Může se jednat např. o seznam použité literatury, o číslované kroky v tutoriálu nebo o navigační menu. V HTML máme několik typů seznamu. Prvním typem seznamu je <ul> (Unordered List = neuspořádaný seznam). Položky v něm jsou neočíslované (neuspořádané) a standardně se zobrazují pomocí odrážek, jako to známe např. z Wordu. Pomocí atributu type můžeme vizualitu odrážek změnit. Stejně tak pomocí kaskádových stylů (CSS) díky vlastnosti list-style-type. Ačkoli je seznam chápán jako neuspořádaný, pořadí prvků v kódu na vykreslené stránce samozřejmě zůstane zachováno. Tag <ul> je párový a obaluje položky seznamu.",
        id: "<ul> <ul> seznam",
        kod: `<h2>Co jsem se dnes naučil</h2>
<ul style="list-style-type:circle">
  <li>Vytvářet tabulky</li>
  <li>Slučovat buňky</li>
  <li>Co je to sémantika</li>
  <li>Vytvořit uspořádaný seznam</li>
</ul>
<menu style="list-style-type:square">
  <li>Vytvářet tabulky</li>
  <li>Slučovat buňky</li>
  <li>Co je to sémantika</li>
  <li>Vytvořit uspořádaný seznam</li>
</menu>
<dir style="list-style-type:disc">
  <li>Vytvářet tabulky</li>
  <li>Slučovat buňky</li>
  <li>Co je to sémantika</li>
  <li>Vytvořit uspořádaný seznam</li>
</dir>`,
        
        popisek: "Pomocí <ul> se často řeší navigační menu, jen musíme pomocí CSS skrýt odrážky a celý seznam vložit do tagu <nav>.",
        
    },{
        nadpis: "<ol> seznam",
        obsah: "Uspořádaný seznam (Ordered List) se liší od neuspořádaného tím, že prvky jsou řazeny dle nějakého klíče. Tím je nejčastěji priorita nebo posloupnost akcí. Zápis je naprosto stejný, jako u neuspořádaného seznamu, opět tag <ol> obalíme položky seznamu tagy <li>. Místo odrážek nám u položek seznamu prohlížeč v základním stylu zobrazí písmena, číslice, římské číslice atd.",
        id: "<ol> seznam",
        kod: `<h2>Můj prioritní jídelníček</h2>
<ol start="10">
  <li>Tvaroh</li>
  <li>Kuřecí maso</li>
  <li>Sýr</li>
</ol>
<ol type="A">
  <li>Těstoviny</li>
  <li>Brambory</li>
  <li>Rýže</li>
</ol>
<ol type="I">
  <li>Salám</li>
  <li>Šunka</li>
  <li>Párky</li>
</ol>
<ol>
  <li value="4">Tvaroh</li>
  <li>Kuřecí maso</li>
  <li>Sýr</li>
</ol>`,
        
        popisek: "Na rozdíl od neuspořádaného seznamu má element <ol> několik atributů: /reversed/ - Pokud je atribut uveden, jsou položku seznamu číslovány opačně, tedy sestupně. Jako hodnota se obvykle uvádí reversed, ale může se uvést i prázdná nebo žádná. /start/ - Hodnota atributu určuje první číslo v seznamu. /type/ - Nastavuje typ číslování, můžeme nastavit hodnoty: 1 pro arabské číslice, jak jsme zvyklí, A a a pro písmena a I a i pro římské číslice. Elementu <li> můžeme přidat následující atribut: /value/ - U uspořádaného seznamu označuje číslo dané položky. Následující položky se poté automaticky číslují od této hodnoty.",
        
    },{
        nadpis: "<dl> seznam",
        obsah: "Posledním typem seznamu je slovníček pojmů (Definition List). Na rozdíl od ostatních obsahuje 2 typy položek, které se střídají a to tagy <dt> a <dd>. Tag <dt> (jako Definition Term) se vyskytuje pouze uvnitř tagu <dl>. Zpravidla se zobrazuje vždy na novém řádku u levého okraje stránky. Tagem <dd> (jako Definition Definition) zapisujeme definici již zmíněného tagu <dt>:",
        id: "<dl> seznam",
        kod: `<h2>Slovníček pojmů k článku</h2>
<dl>
    <dt>Tutoriál</dt>
        <dd>Názorný návod k použití, většinou krok za krokem</dd>
    <dt>Google</dt>
        <dd>Internetový vyhledávač</dd>
    <dt>Seznam</dt>
        <dd>Množina položek, které spolu nějakým způsobem souvisí</dd>
</dl>`,
        images: ["images/03.jpg", "images/04.jpg"],
        popisek: "„Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        
    },{
        nadpis: "<datalist seznam>",
        obsah: "Tag <datalist> se v HTML 5 používá k označení skupiny možností, které jsou poté navrhovány v elementu <input>. Jedná se tedy o tzv. našeptávač (autocomplete). Elementu <input> zadáme v atributu list id elementu <datalist>, který obsahuje možnosti v podobě elementů <option>. Využití element nalezne tam, kde je k dispozici opravdu mnoho možností. Např. můžeme napovídat nejčastější dotazy při vyhledávání nebo přezdívky členů fóra:",
        id: "<datalist seznam>",
        kod: `Vyberte postavu, které chcete poslat zprávu:<br />
<input list="postavy" />

<datalist id="postavy">
    <option value="Albus Brumbál">
    <option value="Harry Potter">
    <option value="Voldemort">
    <option value="Hermiona Grangerová">
    <option value="Ron Weasley">
    <option value="Draco Malfoy">
</datalist>`,
                
    },{
        nadpis: "<table>",
        obsah: "Často se stává, že na stránkách potřebujeme tabulku. Tabulka nám umožňuje vkládat do jejích buněk elementy, které jsou potom hezky uspořádané. Na rozdíl od odstavců, které se vždy skládají pod sebe, si můžeme text v tabulce skládat úhledně vedle sebe. V buňkách mohou být kromě textu samozřejmě i obrázky a další elementy. To se může hodit například k zobrazování nějakých výsledků, parametrů, statistik. Z hlediska responzivity však tyto tabulky byly nahrazeny alternativou, tzv. grid systémem. Do teď však tabulka má využití (ačkoliv se to nezdá) například v kalendáři: ",
        id: "<table>",
        kod: `<table border="1">
    <tr>
        <td>První buňka</td>
        <td>Druhá buňka</td>
        <td>A třetí</td>
    </tr>
    <tr>
        <td>Začneme další řádek</td>
        <td>Druhá v druhém řádku</td>
        <td>Poslední buňka</td>
    </tr>
</table>`,
        images: ["images/08.jpg", "images/09.jpg"],
        popisek: "Tabulka se označuje tagem <table> a obsahuje jednotlivé řádky. Tabulka má jediný atribut: /border/ - Označuje šířku rámečku kolem buněk tabulky. Výchozí hodnota je 0 a bez uvedení nemá tabulka tedy žádný rámeček. Protože formátování se přesunulo do CSS, border má podle nového standardu HTML5 obsahovat pouze hodnoty (prázdná hodnota) nebo 1. Tím se odliší, zda tabulku používáme k pouhému rozvržení elementů na stránce (tzv. layout) nebo v ní máme opravdu nějaká data. <tr> Řádky vkládáme do tabulky pomocí tagu <tr> (jako Table Row = řádek tabulky). Řádek obsahuje jednotlivé buňky. <td> Buňky do řádku vkládáme tagem <td> (jako Table Data = data tabulky). Buňka může obsahovat text, obrázky a libovolné další elementy. Výchozí formátování je zarovnání vlevo.",
        
    },{
        nadpis: "<th> table",
        obsah: "Tag <tr> může kromě buněk (<td>) obsahovat také speciální hlavičkové buňky <th>. Ty se vkládají do prvního řádku tabulky a ten je poté chápán jako hlavička. Výchozí formátování je zarovnání na střed a tučné písmo. Tabulka s hlavičkou by mohla vypadat např. takto (přidali jsme i obrázky):",
        id: "<th> table",
        kod: `<table border="1">
    <tr>
        <th>Náhled</th>
        <th>Typ</th>
        <th>Procesor</th>
        <th>Graf. karta</th>
        <th>Skladem</th>
    </tr>
    <tr>
        <td><img src="images/notebook1.jpg" alt="Notebook" /></td>
        <td>ABC123</td>
        <td>Intel Atom</td>
        <td>NVIDIA</td>
        <td>Ano</td>
    </tr>
    <tr>
        <td><img src="images/notebook2.jpg" alt="Notebook" /></td>
        <td>WTF845</td>
        <td>AMD</td>
        <td>ATI</td>
        <td>Ano</td>
    </tr>
    <tr>
        <td><img src="images/notebook3.jpg" alt="Notebook" /></td>
        <td>OMG666</td>
        <td>Neuvedeno</td>
        <td>Neuvedeno</td>
        <td>Ne</td>
    </tr>
</table>`,
        images: ["images/10.png"]        
    },{
        nadpis: "<th> a <td> table atributy",
        obsah: "Sousední buňky v tabulce můžeme slučovat. Pokud budeme slučovat buňky v řádku, zapíšeme buňku jen jednou a dáme ji atribut colspan. Ten bude mít hodnotu, kolik buněk propojuje. V tabulce uvedené výše se nabízí propojit buňky Neuvedeno v jednu. Hodnota colspan buňky bude tedy 2 (spojujeme 2 buňky v řádku) a druhou buňku smažeme. Kód by vypadal takto:",
        id: "<th> a <td> table atributy",
        kod: `<table border="1">
    <tr>
        <th>Náhled</th>
        <th>Typ</th>
        <th>Procesor</th>
        <th>Graf. karta</th>
        <th>Skladem</th>
    </tr>
    <tr>
        <td><img src="images/notebook1.jpg" alt="Notebook" /></td>
        <td>ABC123</td>
        <td>Intel Atom</td>
        <td>Nvidia</td>
        <td>Ano</td>
    </tr>
    <tr>
        <td><img src="images/notebook2.jpg" alt="Notebook"></td>
        <td>WTF845</td>
        <td>AMD</td>
        <td>ATI</td>
        <td>Ano</td>
    </tr>
    <tr>
        <td><img src="images/notebook3.jpg" alt="Notebook" /></td>
        <td>OMG666</td>
        <td colspan="2">Neuvedeno</td>
        <td>Ne</td>
    </tr>
</table>`,
        images: ["images/11.png", "images/12.png"],
        popisek: "/rowspan/ - Obdobně můžeme spojovat i buňky ve sloupci a to pomocí atributu rowspan, který udává, přes kolik řádků se spojuje.",
        
    },{
        nadpis: "Pokročilé tabulky",
        obsah: "Kromě jednoduchých tagů k tvorbě tabulek nám poskytuje HTML 5 nové pokročilé tagy. Asi největší změnou je rozdělení tabulky na hlavičku, tělo a patičku. Tabulka dostává podobnou strukturu jako HTML stránka. <thead> V párovém tagu <thead> je obalen hlavičkový řádek tabulky, popisující, jaké údaje jednotlivé sloupce obsahují. <tfoot> Tabulka může obsahovat také patičku, která často obsahuje např. součet hodnot ve sloupci. Patičku můžeme napsat před nebo za <tbody>, patička bude vždy na konci. <tbody> Samotný obsah tabulky se dále vyskytuje v <tbody>. <caption> Tabulce můžeme přidat nadpis. Ten se vloží pomocí tagu <caption> rovnou za tag <table>. Při výchozím nastavení se text v <caption> zobrazí centrovaný nad tabulkou. <colgroup> Sloupce je možné seskupovat do skupin a skupinám poté nastavovat různé CSS styly. Obvykle tím rozdělíme tabulku na logické skupiny sloupců. Slouží k tomu tag <colgroup>, který obaluje tagy <col> pro definici formátování sloupců. ",
        id: "Pokročilé tabulky",
        kod: `<table border="1">
          <colgroup>
        <col style="background: #FFBBBB;" />
        <col span="3" style="background: #AAFFAA" />
        <col span="2" style="background: #BBBBFF;" />
    </colgroup>
        <caption>Nadpis tabulky</caption>
<thead>
    <tr>
        <th>Náhled</th>
        <th>Produkt</th>
        <th>Množství</th>
        <th>Cena</th>
    </tr>
</thead>
<tfoot>
    <tr>
        <td colspan="2">Celkem</td>
        <td>10</td>
        <td>117 878 Kč</td>
    </tr>
</tfoot>
<tbody>
    <tr>
        <td><img src="images/713/html/assets/lcd.png" alt="Acer KG241 23,6 palců LCD" width="80" /></td>
        <td>Acer KG241 23,6" LCD</td>
        <td>2</td>
        <td>14 129 Kč</td>
    </tr>
    <tr>
        <td><img src="images/713/html/assets/gtx.png" alt="GIGABYTE NVIDIA GeForce® GTX 1660" width="80" /></td>
        <td>GIGABYTE NVIDIA GeForce® GTX 1660</td>
        <td>5</td>
        <td>4 130 Kč</td>
    </tr>
    <tr>
        <td><img src="images/713/html/assets/note.png" alt="Samsung Note 10, Aura Glow" width="80" /></td>
        <td>Samsung Note 10, Aura Glow</td>
        <td>3</td>
        <td>22 990 Kč</td>
    </tr>
</tbody>`,
        images: ["images/13.png", "images/14.png"],
        popisek: "<col> Tag <colgroup> obsahuje elementy <col>, které definují styl sloupců ve skupině. Element <col> má atribut span: span - Uvádí, kolik sloupců element <col> představuje. Udělejme si další ukázku, v tabulce níže logicky spojíme sloupce s ptáky a sloupce se psy. Vlastnost /span/ můžeme použít i v elementu /colgroup/, který také tento atribut podporuje. Tabulky nastylované defaultně není vhodné využívat pro responzivní webdesign. V kurzu responzivního designu probíráme i responzivní tabulky.",
        
    },{
        nadpis: "<p> texty",
        obsah: "Tag <p> (jako Paragraph = odstavec) označuje odstavec textu. HTML dokument má určitou strukturu a text v něm nemůže jen tak volně plavat, měl by být tedy zabalen třeba do odstavců. Prohlížeč mezi odstavce při základním stylu vykresluje volné místo (margin). Vyhneme se tedy nepřehlednému odřádkování a text se dále jednoduše styluje. Element nemá žádné další atributy:",
        id: "<p> texty",
        kod: `<p>Mám vážné důvody domnívat se, že planeta, odkud přišel malý princ, je planetka B 612.</p>

<p>Jen jednou ji uviděl dalekohledem v roce 1909 nějaký turecký hvězdář. Podal tehdy o svém objevu obsáhlý výklad s ukázkami na mezinárodním astronomickém kongresu. Ale nikdo mu nevěřil, protože byl nezvykle oblečen. Dospělí jsou už takoví.</p>

<p>Naštěstí pro dobrou reputaci planetky B 612 přinutil jeden turecký diktátor svůj lid pod trestem smrti, aby se oblékal po evropsku. Hvězdář předvedl svůj výklad znovu v roce 1920 ve velmi elegantním fraku. A tentokrát mu všichni dali za pravdu.</p>`,
                
    },{
        nadpis: "<h1> nadpisy",
        obsah: "Dalším velice známým textovým tagem je nadpis. V HTML máme k dispozici 6 typů nadpisů. Hovoříme o nadpisu od úrovně 1 až do úrovně 6. Nadpisy slouží pro lepší orientaci na webu jak pro čtenáře, tak pro vyhledávače. Jsou klíčové pro SEO a právě z nadpisů si boti pro vyhledávače berou mnoho informací. Zaměřme se na to, kdy jakou úroveň správně použít. Jelikož často používáme pro takovýto název webu grafické logo, vžil se způsob obrázkového nadpisu <h1>, který je přívětivý i pro vyhledávače. Obrázky jsou řádkové elementy a nadpisy blokové, můžeme tedy snadno obrázek vložit přímo do tagu <h1>:",
        id: "<h1> nadpisy",
        kod: `<h1><img src="images/15.png" alt="Rybočich - vše pro ryby a akvarijní živočichy" title="Rybočich - vše pro ryby a akvarijní živočichy" /></h1>`,
                
    },{
        nadpis: "<h2> nadpisy",
        obsah: "Nadpis druhé úrovně se používá již jako nadpis dané podstránky/článku. Leží vždy pod nadpisem h1. Nadpisy ostatně vždy řadíme logicky za sebe. Nadpis h2 se teoreticky může vyskytovat na stránce vícekrát, ale není to obvyklé. V našem příkladu s webem pro akvaristy by nadpis h2 mohl vypadat takto:",
        id: "<h2> nadpisy",
        kod: `<h2>Ryby</h2>
<p>Ryba je vodní živočich s osifikovanou páteří. Řadíme je do obratlovců...</p>`,
        
        popisek: "Nadpis by tedy označoval podstránku, ve které jsou vypsány informace o rybách.",
        
    },
    {
        nadpis: "<h3, h4, h5, h6> nadpisy",
        obsah: "Další 4 nadpisy jsou již určeny pro lepší orientaci v textu. Pojďme si ukázat, jak se používají:",
        id: "<h3, h4, h5, h6> nadpisy",
        kod: `<h2>Ryby</h2>
<p>Ryba je vodní živočich s osifikovanou páteří. Řadíme je do obratlovců...</p>

<h3>Sladkovodní</h3>
<p>Sladkovodní ryby jsou výborná volba pro domácí akvária.</p>

<h4>Vrubozobcovité<h4>

<h5>Kančík tyrkysový</h5>
<p>Modrofialová rybička, která je vhodná do větších akvárií...</p>

<h4>Polozubkovité</h4>

<h5>Polozubka jatuarana</h5>
<p>Agresivní rybka, hledající potravu u dna...</p>

<h5>Polozubka stříbřitá</h5>
<p>Má nejmenší šupiny ze všch a ploché zoubky ve 2 řadách...</p>
<h6>Obrázky polozubek</h6>
<p><img src="polozubka.png" alt="Polozubka u dna" /></p>
<p><img src="polozubka.png" alt="Polozubka při krmení" /></p>


<h3>Slanovodní</h3>
<p>Pěstování slanovodních ryb je složitější, musíte totiž vodu osolit.</p>

<h4>Mečounovité</h4>`,
        
        popisek: "V reálu by byly ryby rozděleny do několika podstránek a nepotřebovali bychom tedy tolik nadpisů. Výše uvedená ukázka je spíše teoretická a poslední 2 úrovně nadpisů se příliš nepoužívají.",
        
    },{
        nadpis: "<q> texty",
        obsah: "Tag <q> označuje krátkou řádkovou citaci. Používá se pro citaci části díla z jiného zdroje (např. z jiného webu nebo z knihy). Jedná se o řádkový element.",
        id: "<q> texty",
        kod: `<p>Včera jsem přečetl Ginsbergovo <cite>Kvílení</cite>.</p>`,
        popisek: "Tag <cite> se používá k označení názvu díla. Může se jednat o knihu, článek, hru, sochu, film apod. Tag bývá často špatně pochopen, nepoužívá se k označení jména autora:",
        
    },{
        nadpis: "<ins> a <del> texty",
        obsah: "Tag <ins> označuje text, který byl do dokumentu vložen (tedy text, který přibyl po jeho editaci). Obvykle je tento text prohlížeči vykreslen jako podtržený. Velmi často se používá v kontextu s tagem <del>, který označuje opak, tedy jaký text byl po editaci odstraněn. Můžeme specifikovat následující atributy: /cite/ - Obsahuje URL dokumentu, který objasňuje změnu textu. /datetime/ - Obsahuje datum změny ve formátu YYYY-MM-DD hh:mm:ss, kde YYYY = ROK, např. 2020 MM = MĚSÍC, např. 10 pro říjen, 01 pro leden DD = DEN, např. 26 hh = hodina, např. 23 mm = minuta, např. 48 a ss = sekunda, např. 03 Sekundy uvádět nemusíme, můžeme zadat např. pouze hodinu 2020-10-01 23:00.",
        id: "<ins> a <del> texty",
        kod: `<p>Můj současný stroj je notebook značky <del>Apple</del> <ins>ASUS</ins>.</p>`,
        images: ["images/15.png"],
        popisek: "Často se označuje smazaný text červeně a přidaný zeleně pomocí CSS, ve výsledku to vypadá mnohem lépe:",
        
    },{
        nadpis: "",
        obsah: "",
        id: "",
        kod: `<h1>Hello</h1>`,
        images: ["images/01.jpg"],
        popisek: "",
        
    },{
        nadpis: "",
        obsah: "",
        id: "",
        kod: `<h1>Hello</h1>`,
        images: ["images/01.jpg"],
        popisek: "",
        
    },{
        nadpis: "",
        obsah: "",
        id: "",
        kod: `<h1>Hello</h1>`,
        images: ["images/01.jpg"],
        popisek: "",
        
    },{
        nadpis: "",
        obsah: "",
        id: "",
        kod: `<h1>Hello</h1>`,
        images: ["images/01.jpg"],
        popisek: "",
        
    },{
        nadpis: "",
        obsah: "",
        id: "",
        kod: `<h1>Hello</h1>`,
        images: ["images/01.jpg"],
        popisek: "",
        
    },{
        nadpis: "",
        obsah: "",
        id: "",
        kod: `<h1>Hello</h1>`,
        images: ["images/01.jpg"],
        popisek: "",
        
    },{
        nadpis: "",
        obsah: "",
        id: "",
        kod: `<h1>Hello</h1>`,
        images: ["images/01.jpg"],
        popisek: "",
        
    },{
        nadpis: "",
        obsah: "",
        id: "",
        kod: `<h1>Hello</h1>`,
        images: ["images/01.jpg"],
        popisek: "",
        
    },{
        nadpis: "",
        obsah: "",
        id: "",
        kod: `<h1>Hello</h1>`,
        images: ["images/01.jpg"],
        popisek: "",
        
    },{
        nadpis: "",
        obsah: "",
        id: "",
        kod: `<h1>Hello</h1>`,
        images: ["images/01.jpg"],
        popisek: "",
        
    },{
        nadpis: "",
        obsah: "",
        id: "",
        kod: `<h1>Hello</h1>`,
        images: ["images/01.jpg"],
        popisek: "",
        
    },{
        nadpis: "",
        obsah: "",
        id: "",
        kod: `<h1>Hello</h1>`,
        images: ["images/01.jpg"],
        popisek: "",
        
    },{
        nadpis: "",
        obsah: "",
        id: "",
        kod: `<h1>Hello</h1>`,
        images: ["images/01.jpg"],
        popisek: "",
        
    },{
        nadpis: "",
        obsah: "",
        id: "",
        kod: `<h1>Hello</h1>`,
        images: ["images/01.jpg"],
        popisek: "",
        
    },{
        nadpis: "",
        obsah: "",
        id: "",
        kod: `<h1>Hello</h1>`,
        images: ["images/01.jpg"],
        popisek: "",
        
    },{
        nadpis: "",
        obsah: "",
        id: "",
        kod: `<h1>Hello</h1>`,
        images: ["images/01.jpg"],
        popisek: "",
        
    },{
        nadpis: "",
        obsah: "",
        id: "",
        kod: `<h1>Hello</h1>`,
        images: ["images/01.jpg"],
        popisek: "",
        
    },{
        nadpis: "",
        obsah: "",
        id: "",
        kod: `<h1>Hello</h1>`,
        images: ["images/01.jpg"],
        popisek: "",
        
    },{
        nadpis: "",
        obsah: "",
        id: "",
        kod: `<h1>Hello</h1>`,
        images: ["images/01.jpg"],
        popisek: "",
        
    },{
        nadpis: "",
        obsah: "",
        id: "",
        kod: `<h1>Hello</h1>`,
        images: ["images/01.jpg"],
        popisek: "",
        
    },{
        nadpis: "",
        obsah: "",
        id: "",
        kod: `<h1>Hello</h1>`,
        images: ["images/01.jpg"],
        popisek: "",
        
    },{
        nadpis: "",
        obsah: "",
        id: "",
        kod: `<h1>Hello</h1>`,
        images: ["images/01.jpg"],
        popisek: "",
        
    },{
        nadpis: "",
        obsah: "",
        id: "",
        kod: `<h1>Hello</h1>`,
        images: ["images/01.jpg"],
        popisek: "",
        
    },{
        nadpis: "",
        obsah: "",
        id: "",
        kod: `<h1>Hello</h1>`,
        images: ["images/01.jpg"],
        popisek: "",
        
    },



//Tady je vzor článku, v tomto pořadí se vykresluje, popisek je pod obrázkem, můžeme vynechat obsah, kod a images, potom se nic nezobrazí. Nadpis stručný, bude to zároveň heslo v levém navigačním okně//

    {
        nadpis: "",
        obsah: "",
        id: "",
        kod: `<h1>Hello</h1>`,
        images: ["images/01.jpg"],
        popisek: "",
        
    },




















];
