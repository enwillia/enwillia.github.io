//vars getElementById 
const checkButton = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");
const textInputElm = document.getElementById("text-input");

//add event listener to form button only need one
checkButton.addEventListener("click", checkPalindrome);


function checkPalindrome(){
//test with innerText
let arg = textInputElm.value.toString();//use 
if(arg.length==0){
   alert("Please input a value");
}
else{
   //alert("you entered "+arg);

//cleanUserInput
arg = cleanUserInput(arg);


//backward const array, not sure new Array(arg) will work
const forward = Array.of(arg);
//alert("you entered forward "+forward); // running

//using reverse method instead
const backward = forward.toReversed();
//alert("you entered backward "+backward);//trying now


//isPalindrome
//alert("isPal returns "+isPalindrome(forward, backward));//returns false
if(isPalindrome(forward, backward)==true){     
   resultDiv.innerText = `${textInputElm.value.toString()}  is a palindrome`;
}
else{
   resultDiv.innerText =  `${textInputElm.value.toString()} is not a palindrome`;

}
}//end of main if else checking for input
}//end of checkPalinedrome main func


//test w/ @AAA A@

function cleanUserInput(arg){     
 
    let cleanedup = arg;
   
    //no punct using regex
    const noPunctRegex = /\/\\\"\!\?\*\&^\%\$\#\@\(\)\-\+\_\`\~\<\,\>\{\}\[\]\:\;/; //keep for now
    
    cleanedup = cleanedup.replace(noPunctRegex, "");
    //NOW RUNS
    //no whitespace 
    cleanedup = cleanedup.toLowerCase();//works
    //alert("cleanUserInput > to lower case "+cleanedup);
    cleanedup = cleanedup.replace(/\s/, "");   //works
   

    // returned in lowercase
    return cleanedup;
   
}


//true or false, regular expression?, feels good code to separate the main palindrome 
function isPalindrome(argfor, argback){

    if(argfor.toString() == argback.toString()){    
      return true;
     }
    else{
      return false;
   }
}