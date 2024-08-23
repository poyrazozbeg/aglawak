const paragraphs = [
    "Ben bazen anlayışsız, noromantik bir öküz olabiliyorum. Evet bana bazen sürekli bir şeyleri tekrar etmen gerekiyor, söylemen gerekiyor.",
    "Evet bazen söylediklerimi düşünmeden kalbini kırabiliyorum, bazen sana ne kadar değer verdiğimi gösteremiyorum.",
    "Ama lütfen bana birşeyleri söylemekten vazgeçme, lütfen yorulma. Ben senin öküzünüm.",
    "Seni seviyorum, devam et'e bas ve bekle."
];

const asciiFlower = `
                    .-~~-.--.
                     :         )
               .~ ~ -.\       /.- ~~ .
               >       '.   .'       <
              (         .- -.         )
               '- -.-~  '- -'  ~-.- -'
                 (        :        )           _ _ .-:
                  ~--.    :    .--~        .-~  .-~  }
                      ~-.-^-.-~ \_      .~  .-~   .~
                               \ \'     \ '_ _ -~
                                '.'.    //
                       . - ~ ~-.__'.'-.//    
                   .-~   . - ~  }~ ~ ~-.~-.
                 .' .-~      .-~       :/~-.~-./:
                /_~_ _ . - ~                 ~-.~-._
                                                 ~-.< 

`;

let currentParagraph = 0;
let currentCharIndex = 0;
let isShowingASCII = false;

function showNextParagraph() {
    if (isShowingASCII) return;

    if (currentParagraph < paragraphs.length) {
        showTextParagraph(currentParagraph);
        currentParagraph++;
    } else {
        showASCIIFlower();
    }
}

function showTextParagraph(paragraphIndex) {
    const textContainer = document.getElementById("text-container");
    textContainer.innerHTML = "";
    currentCharIndex = 0;
    const text = paragraphs[paragraphIndex];
    
    const typingInterval = setInterval(() => {
        if (currentCharIndex < text.length) {
            textContainer.innerHTML += text[currentCharIndex];
            currentCharIndex++;
        } else {
            clearInterval(typingInterval);
        }
    }, 70); // Her harf 100ms'de bir yazılır
}

function showASCIIFlower() {
    const textContainer = document.getElementById("text-container");
    textContainer.innerHTML = ""; // Mevcut içeriği temizle
    textContainer.style.whiteSpace = "pre"; // Boşlukları ve satır sonlarını korur
    textContainer.style.fontFamily = "monospace"; // ASCII sanatının düzgün görünmesi için
    currentCharIndex = 0;
    const text = asciiFlower;

    const typingInterval = setInterval(() => {
        if (currentCharIndex < text.length) {
            textContainer.innerHTML += text[currentCharIndex];
            currentCharIndex++;
        } else {
            clearInterval(typingInterval);
            isShowingASCII = true;
        }
    }, 50); // Her harf 50ms'de bir yazılır
}

