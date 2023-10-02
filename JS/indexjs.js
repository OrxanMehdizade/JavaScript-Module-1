/*1  . Write a function that takes a string and displays statistics about
it: number of letters, number of digits, and number of other
characters. */

/*let line=prompt('Enter the string')
let linefunction= function(linetp){
    let NumberOfLetters=0;
    let NumberOfDigits=0;
    let NumberOfCharacters=0;

    for(let i=0; i<linetp.length;i++){
        const indexline=linetp[i];
        if(/[a-zA-Z]/.test(indexline))
            NumberOfLetters++;
        else if(/[0-9]/.test(linetp))
            NumberOfDigits++;
        else{
            NumberOfCharacters++;
        }
    }
    alert(`Number Of Letters-> ${NumberOfLetters}\nNumber Of Digits-> ${NumberOfDigits}\nNumber Of Characters-> ${NumberOfCharacters}`)
}

linefunction(line);
 */






/*2  Write a function that takes a two-digit number and returns it
in text form.
For example: 35 – thirty five, 89 – eighty nine,
12 – twelve.  */

// let num =parseInt(prompt('Enter the Number'));
// function numberConvertText (numfun){
//     const singleDigits=["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
//     const teens = ["", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
//     const cutreqemliler=["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
//     if (numfun < 1 || numfun > 99)
//         alert('the number you entered is not between 1 and 99')
//
//     if (numfun === 10){
//         alert('ten')
//     }
//     else if(numfun > 10 && numfun < 20){
//         return alert(`number Convert Text-> ${teens[numfun-11]}`)
//     }
//     else{
//         const single=Math.floor(numfun/10);
//         const cut=numfun%10;
//         alert(`number Convert Text-> ${cutreqemliler[single] + (cut !== 0 ? " " + singleDigits[cut] : "")}`);
//     }
//
// }
//
// numberConvertText(num)






/*3  Write a function that replaces capital letters with small,
small with capital, and numbers with underscore in the
received string.  */


// const text =prompt('Enter the string');
// function textfun(txt){
//     const big =txt.replace(/[A-Z]/g,(a)=>a.toLowerCase())
//
//     const numsinvol =big.replace(/[0-9]/g,'_')
//
//     alert(numsinvol);
//
// }
//
// textfun(text)





/*4  Write a function that converts names of css styles with a hyphen
to a name in the CamelCase style: font-size to fontSize,
background-color to backgroundColor, text-align to
textAlign. */


/*const text =prompt('Enter the CamelCase');
function casetxt (txt){
    alert(txt.replace(/-([a-z])/g, function (a,b){return b.toUpperCase()}));
}
console.log(casetxt(text));*/





/*5   Write a function that takes a phrase and converts it to an abbreviation.
For example: cascading style sheets to CSS, object-oriented
programming to OOP.*/

/*const text =prompt('Enter to convert to abbreviation');
function abbreviationFun(txt){
    const txtsplits = txt.split(' ');
    let abbreviation='';
    for(let i=0;i<txtsplits.length;i++){
        const txtsplit=txtsplits[i];
        if(txtsplit.length>0){
            abbreviation+=txtsplit[0].toUpperCase();
        }
    }
    alert(abbreviation);
}

abbreviationFun(text);*/




/*6  Write a function that takes any number of strings, combines
them into one long string and returns it*/

// let arr=['Hello', ' ', 'world', '!', ' This', ' is', ' a', ' test.'];
// function  functionarr(txt){
//     alert(txt.join(''))
// }
// functionarr(arr);




/*7 Write a calculator function. The function takes a string with
an example, determines what is to be done (+ – * /), converts
operands to numbers, solves it, and returns the result.  */

// let Calculator =prompt('Enter calculations like this example -> 2 + 3 * 5');
// function sumfun(Calc){
//     try {
//         alert(eval(Calc))
//     }
//     catch (error){
//         alert('Error: Invalid calc')
//     }
// }
// sumfun(Calculator);

/*8  rite a function that gets a url and displays detailed information about it.*/



/*9 Write a function that takes a string and delimiter and returns
an array of substrings that are broken up using the specified
delimiter.
For example: line “10/08/2020”, separator “/”, the result: “10”,
“08”, “2020”.
While performing the task, do not use the split() function. */

// const textDate =prompt('Enter the Date like this example-> 10/10/2000 ');
// const textDelimiter =prompt('Enter the Delimiter like this example-> / ');
//
// function  txtdate(inputString, delimiter){
//     const txt=[];
//     let indexstart=0;
//     for (let i=0;i<inputString.length;i++){
//         if(inputString[i] === delimiter){
//             txt.push(inputString.slice(indexstart,i))
//             indexstart=i+1;
//         }
//
//     }
//     txt.push(inputString.slice(indexstart));
//     alert(txt);
// }
// txtdate(textDate,textDelimiter);


/*10  Write a function to output text according to a given template.
As the first parameter, the function takes a template that can
use % in the text, index of the input parameter is specified after
the % sign. When outputting index instead of %, output value
of the corresponding input parameter.
For example: print(“Today is %1 %2.%3.%4”, “Monday”,
10, 8, 2020) must print “Today is Monday 10.8.2020”*/



/*function textformat(txtdate, ...txt){
    let result =txtdate;
    for (let i=1;i<=txt.length;i++){
        const faiz= `%${i}`;
        result=result.replace(faiz,txt[i-1]);
    }
    alert(result)

}

textformat("Today is %1 %2.%3.%4", "Monday", 10, 8, 2020);*/

