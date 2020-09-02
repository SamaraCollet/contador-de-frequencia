document.getElementById("countButton").onclick = function() {  

    let typedText = document.getElementById("textInput").value;
     
    // Isto muda todas as letras para minúsculas
    typedText = typedText.toLowerCase();

    // Isso se livra de todos os caracteres exceto letras comuns, espaços e apóstrofos. 
    // Iremos aprender mais sobre como usar a função replace numa lição mais à frente.
    typedText = typedText.replace(/[^a-z'\s]+/g, ""); 
    
    // Separar a string de entrada em palavras separando-a nos espaços
    words = typedText.split(/\s/);

    // armazena o array gerado
    const wordCounts = {}
    const letterCounts = {};

    // faz algo com cada letra 
    for (let i = 0; i < typedText.length; i++) {
        currentLetter = typedText[i];
        
        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1; 
        } else { 
            letterCounts[currentLetter]++; 
        }
    }

    // cria um span com cada letra e coloca na pagina
    for (let letter in letterCounts) { 
        const span = document.createElement("span"); 
        const textContent = document.createTextNode('"' + letter + "\": " + letterCounts[letter] + ", "); 
        span.appendChild(textContent); 
        document.getElementById("lettersDiv").appendChild(span); 
    }

    // faz algo com cada palavra 
    for (let i = 0; i < words.length; i++) {
        currentWord = words[i];
 
        if (wordCounts[currentWord] === undefined) {
            wordCounts[currentWord] = 1; 
        } else { 
            wordCounts[currentWord]++; 
        }
    }

    // cria um span com cada palavra e coloca na pagina
    for (let word in wordCounts) { 
        const spanWord = document.createElement("span"); 
        const textContentWord = document.createTextNode('"' + word + "\": " + wordCounts[word] + ", "); 
        spanWord.appendChild(textContentWord); 
        document.getElementById("wordsDiv").appendChild(spanWord); 
    }
    
}




 