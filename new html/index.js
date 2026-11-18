const containerEl = document.querySelector(".container");
const careers = ["Youtuber", "Web Developer", "Freelancer", "Instructor"];

let careerIndex = 0;

let characterIndex = 0;

//const counter = careers.length;
const scrollText = "I am a ";

//updateText();
//updateTextNew();

let tmp = 0;
console.log('Before tmp => ', tmp)
setInterval(()=>{
    console.log("Inside timeout tmp => ", tmp)
    tmp++
}, 1000)

console.log('After tmp => ', tmp)


function updateText() {
    characterIndex++;
    containerEl.innerHTML = `<h1>I am a ${careers[careerIndex].slice(0, characterIndex)}</h1>`;

    if (characterIndex === careers[careerIndex].length) {
        careerIndex++;
        characterIndex = 0;
    }
    if (careerIndex === careers.length) {
        careerIndex = 0;
    }
    setTimeout(updateText, 100);
}

function updateTextNew() {
    // for(let i = 0; i< counter; i++) {
    //     console.log(`${scrollText} => ${i}`)
    // }
    for (let careerIndexNew = 0; careerIndexNew < careers.length; careerIndexNew++) {
        console.log(`${scrollText} => ${careerIndexNew}`)
        const currentCareer = careers[careerIndexNew];

        for (let characterIndexNew = 0; characterIndexNew < currentCareer.length; characterIndexNew++) {
            const updatedScrollText = "<h1>" + scrollText + currentCareer.slice(0, characterIndexNew) + "</h1>";
            setTimeout(()=>{
                console.log(updatedScrollText)
                containerEl.innerHTML = updatedScrollText
            }, 1000)
        }
    }
}
//setTimeout(updateTextNew, 100);

