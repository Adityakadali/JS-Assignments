let words = document.getElementById("words");
let charecters = document.getElementById("charecters");



function update() {
    let text = document.getElementById("textarea").value.trim();
    if (text == "") {
        words.innerText = 0;
        charecters.innerText = 0;
    }
    else {
        let wordCount = () => {
            let wordArr = text.split(" ");
            return wordArr.length;
        }
        words.innerText = wordCount();
    
        let charCount = text.length;
        charecters.innerText = charCount;
    }
}