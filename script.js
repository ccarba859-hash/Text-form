
let input = document.getElementById("input");
let output = document.getElementById("output");
 


function UPPERCASE(){
    const text = input.value;
    const UPPER  = text.trim().toUpperCase();
let html="";
html+=`
${UPPER}
`;
output.innerHTML =html
};
//function lower case 

function lowercase(){
const text = input.value;
const lower = text.trim().toLowerCase()
let html=""   
html+=`
${lower}
`
output.innerHTML =html
};
function Capitalizeword(){
  const text = input.value;
  const Capitalizeword = text.charAt(0).toUpperCase()+ text.slice(1)
  let html =""
  html=`
  ${Capitalizeword}`
  output.innerHTML =html
};
function Removeextraspace(){
  const text =input.value;
  const Removeextraspace =text.trim();;
  let html=""
  html=`
  ${Removeextraspace}`
  output.innerHTML =html
};

//fix replace word

function Replaceword(){
   const text = input.value;
   let word1 = prompt("Enter a word to replace");
   let word2 = prompt("Enter a new word")
   const Replaceword =text.replace(word1, word2);

  let html=""
  html=`
  ${Replaceword}
  `
   output.innerHTML =html

   return
};


function CountCharacters(){
  const text = input.value;
  const CountCharacters=text.length
   let html=""
  html=`
  ${CountCharacters}
  `
   output.innerHTML =html
}