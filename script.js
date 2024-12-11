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

    // Okno s kódem
    const codeContainer = document.createElement("div");
    codeContainer.className = "code-container";

    // Tlačítko "Zkopírovat kód"
    const copyButton = document.createElement("button");
    copyButton.textContent = "Zkopírovat kód";
    copyButton.className = "copy-button";

    // Akce tlačítka
    copyButton.addEventListener("click", () => {
        navigator.clipboard.writeText(clanek.kod).then(() => {
            copyButton.textContent = "Zkopírováno!";
            setTimeout(() => copyButton.textContent = "Zkopírovat kód", 2000);
        }).catch(() => {
            copyButton.textContent = "Chyba kopírování";
        });
    });

    // Kód v okně
    const pre = document.createElement("pre");
    const code = document.createElement("code");
    code.className = "language-html"; // Změna podle jazyka
    code.textContent = clanek.kod;
    pre.appendChild(code);

    codeContainer.appendChild(copyButton);
    codeContainer.appendChild(pre);
    article.appendChild(codeContainer);

    // Výsledek kódu (iframe)
    const iframe = document.createElement("iframe");
    iframe.className = "vysledek";
    iframe.srcdoc = clanek.kod;
    iframe.sandbox = "allow-scripts";
    article.appendChild(iframe);

    const popisek = document.createElement("p");
    popisek.className = "popisek";
    popisek.textContent = clanek.popisek;
    article.appendChild(popisek);

    clankyContainer.appendChild(article);

    const link = document.createElement("a");
    link.href = `#${clanek.id}`;
    link.textContent = clanek.nadpis;
    menuContainer.appendChild(link);
});


