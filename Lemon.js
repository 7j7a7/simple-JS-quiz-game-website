//lemonscript
let count = 0;
let currentQuestionIndex = 0;
const questionArr=['select one','choose 3','press 2'];

const MarkScheme=new Map();
MarkScheme.set("select one", 1);
MarkScheme.set("choose 3",3);
MarkScheme.set("press 2", 2);

//when started
function go(){
    alert("Welcome to the quiz, press start to begin");
    //map to store user answers to compare with markscheme answer map.
    // const answers= new Map();
    // answers.set("a",200);
    // alert(answers.get("a"));
    // bp=prompt("enter answer for b");
    // answers.set("b", bp);
    // alert(answers.get("b"));
}


let start=confirm("ready?");
if (start= true){
    // let q= document.querySelector("#questionDisplay");
    // q.textContent= "Question here!";

    go();
}else{
    console.error("No <aside> element found in the document.");
}


// alert(MarkScheme.get("b")) ---debugging
function displayQuestion(){

    const q = questionArr[currentQuestionIndex];
    document.querySelector("#questionDisplay").textContent = q;
    // const q = questionArr.shift();
    // alert(q); ---debugging
}

function check(){
    let userAnswer= document.querySelector("input").value;
    const questionRn = questionArr[currentQuestionIndex];

    //check match
    if(userAnswer==MarkScheme.get(questionRn)){
    alert("well done you chose the right number!");
        count +=1;
    }else{ 
        alert("wrong answer")
    }

    alert(`you have: ${count} points`); 
    currentQuestionIndex +=1;


    if (currentQuestionIndex < questionArr.length) {
        displayQuestion();
    } else {
        alert(`Quiz completed!`);
    }
}

function total(){
    alert(`Your final score: ${count}`)
}
    
