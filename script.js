const clankyContainer = document.getElementById("clanky");
const menuContainer = document.getElementById("menu");

// Generování článků
clanky.forEach(clanek => {
    const article = document.createElement("article");
    article.className = "clanek";
    article.id = clanek.id;

    const h2 = document.createElement("h2");
    h2.textContent = clanek.nadpis;
    article.appendChild(h2);

    const p = document.createElement("p");
    p.textContent = clanek.obsah;
    article.appendChild(p);

    if (clanek.kod) {
        const codeContainer = document.createElement("div");
        codeContainer.className = "code-container";

        const copyButton = document.createElement("button");
        copyButton.textContent = "Zkopírovat kód";
        copyButton.className = "copy-button";

        copyButton.addEventListener("click", () => {
            navigator.clipboard.writeText(clanek.kod).then(() => {
                copyButton.textContent = "Zkopírováno!";
                setTimeout(() => copyButton.textContent = "Zkopírovat kód", 2000);
            }).catch(() => {
                copyButton.textContent = "Chyba kopírování";
            });
        });

        const pre = document.createElement("pre");
        const code = document.createElement("code");
        code.className = "language-html";
        code.textContent = clanek.kod;
        pre.appendChild(code);

        codeContainer.appendChild(copyButton);
        codeContainer.appendChild(pre);
        article.appendChild(codeContainer);
    }

    if (clanek.kod) {
        const iframe = document.createElement("iframe");
        iframe.className = "vysledek";
        iframe.srcdoc = clanek.kod;
        iframe.sandbox = "allow-scripts";
        article.appendChild(iframe);
    }

    if (clanek.popisek) {
        const popisek = document.createElement("p");
        popisek.className = "popisek";
        popisek.textContent = clanek.popisek;
        article.appendChild(popisek);
    }

    if (clanek.images && clanek.images.length > 0) {
        clanek.images.forEach(imagePath => {
            const img = document.createElement("img");
            img.src = imagePath;
            img.alt = "Obrázek článku";
            img.classList.add("article-image");
            article.appendChild(img); // Použijeme správně 'article', ne 'articleDiv'
        });
    }

    clankyContainer.appendChild(article);
});

// Funkce pro generování a filtrování menu
function renderMenu(filter = "") {
    menuContainer.innerHTML = ""; // Vyprázdnění menu

    // Seřazení článků podle nadpisu
    const sortedClanky = clanky
        .slice()
        .sort((a, b) => a.nadpis.localeCompare(b.nadpis));

    // Filtrace podle vyhledávání
    const filteredClanky = sortedClanky.filter(clanek =>
        clanek.nadpis.toLowerCase().includes(filter.toLowerCase())
    );

    filteredClanky.forEach(clanek => {
        const link = document.createElement("a");
        link.href = `#${clanek.id}`;
        link.textContent = clanek.nadpis;
        menuContainer.appendChild(link);
    });
}

// Vytvoření vyhledávacího pole
const searchInput = document.createElement("input");
searchInput.type = "text";
searchInput.placeholder = "Hledat...";
searchInput.className = "search-box";

// Přidání vyhledávání nad menu (pokud menu existuje)
if (menuContainer) {
    menuContainer.parentNode.insertBefore(searchInput, menuContainer);
}

// Poslouchá změny v textovém poli a filtruje menu
searchInput.addEventListener("input", () => {
    renderMenu(searchInput.value);
});

// První vykreslení menu
renderMenu();
//konec