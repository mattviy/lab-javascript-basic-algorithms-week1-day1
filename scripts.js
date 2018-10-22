var hacker1 = "Maat";
var hacker2 = prompt("What's your name?");
var inputString = prompt("Input a strign to check if it's a palindrome");
var loremInput = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus pellentesque sem, non pharetra mi euismod id. Donec euismod congue justo a eleifend. Etiam hendrerit lobortis vulputate. Donec porta lorem in ligula aliquet, vel porta ipsum consequat. Nunc congue pulvinar feugiat. Proin ac purus sed sem eleifend pulvinar. Suspendisse eleifend tincidunt tristique. Aenean aliquam cursus nunc in pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer eget interdum felis. Fusce nibh sapien, ultricies pretium viverra in, tincidunt et nisl. Fusce facilisis lobortis varius. Aenean placerat, metus et bibendum tempor, nisl orci placerat nisi, a ornare sapien felis sit amet augue. Nullam feugiat dictum mauris a bibendum. Aliquam blandit accumsan metus nec sollicitudin. Mauris nunc lorem, lobortis vel ultricies a, sollicitudin a arcu. Sed rutrum, nisl non viverra aliquet, magna massa venenatis diam, tempus congue neque elit et lorem. Morbi blandit posuere tempus. Nullam iaculis hendrerit mi in hendrerit. Phasellus scelerisque felis id felis tempus, eget semper justo hendrerit. Maecenas enim velit, imperdiet ut scelerisque sit amet, tempus in libero. Morbi pretium ligula quis nulla finibus malesuada. Pellentesque blandit porta leo, et interdum odio pharetra commodo. Cras accumsan posuere orci, eu lobortis quam posuere eget. Donec lacinia ullamcorper faucibus. Sed elementum velit eu ex scelerisque pretium. Curabitur vel ultricies sapien. In et est quis turpis mollis aliquam. Duis non velit ut nibh laoreet semper quis vel sapien. Quisque semper leo eu pretium eleifend. Phasellus ac auctor odio. Duis lobortis lacus odio, at tristique risus maximus at. Sed fringilla congue rutrum."
var testString = ["matt", "john", "rick", "bob", "michelle", "aron", "sam"]; 

//[assignment 5] function to print the longest name.
function longestName(driver, navigator){
    if (driver.length > navigator.length){
        console.log("The Driver has the longest name, it has " + driver.length + " characters");
    } else if (driver.length == navigator.length){
        console.log("wow, you both got equally long names, " + driver.length + " characters!!");
    } else {
        console.log("Yo, navigator got the longest name, it has " + navigator.length + " characters");
    }
}

//[assignment 6] function to print al characters of a name with spacing and in capitals
function printWithSpace(name){
    var x = [];
    for (i = 0; i < name.length; i++) {
        x.push(name[i].toUpperCase() + " ");    
    }
    console.log(x.join(""));
}

//[assignment 7] function to print name in reverse
function printInReverse(name){
    var x = [];
    for (i = name.length; i >= 0; i--){
        x.push(name[i]);
    }
    console.log(x.join(""));
    return x.join("");
}

//[assignment 8] function to print name in lexicongraphical order
function printLexicographical(driver, navigator){
    if (driver < navigator){
        console.log("The driver's name goes first");
    } else if (driver == navigator){
        console.log("What?! You both got the same name?");
    } else {
        console.log("Yo, the navigator goes first definitely");
    }

}

//[assignment 9] function to check if the input is a palindrome
function checkIfPalindrome(inputString){
    if (inputString === printInReverse(inputString)){
        console.log("Yes this is a palindrome!");
    } else {
        console.log("The string you've entered is not a palindrome :(")
    }
}

//[assignment 10] function to count the amount of words in the string
function countWords(input){
     var str = input.split(" ");
     console.log(str.length);
 }

//[assigment 10] (i've created the function using two seperate inputs, one for the string and one for the word to check which in this case was "et"
 function checkAppearance(input, checkWord){
    var str = input.split(" ");
    var amount = 0;
    for (i = 0; i < str.length; i++){
        if (str[i] === checkWord){
            amount++;
        }
    }
    console.log(amount);
}

//[bonus assignment from jurgen] function that bubble sorts the input string. 
function bubbleSort(input){
    let x;
    for (let j = 0; j < input.length; j++){
        for (let i = 0; i < input.length; i++){
            if (input[i] > input[i+1]){
                x = input[i];
                input[i] = input[i+1];
                input[i+1] = x;
            } 
        }
    }
    console.log(input);
}



// all functions regarding the exercise are called underneath.


//[assignment 5] function to print the longest name.
longestName(hacker1, hacker2);

//[assignment 6] function to print al characters of a name with spacing and in capitals
printWithSpace(hacker2);

//[assignment 7] function to print name in reverse (2 times for both names)
printInReverse(hacker1);
printInReverse(hacker2);

//[assignment 8] function to print name in lexicongraphical order
printLexicographical(hacker1, hacker2);

//[assignment 9] function to check if the input is a palindrome
checkIfPalindrome(inputString);

//[assignment 10] function to count the amount of words in the string
countWords(loremInput);

//[assigment 10] i've created the function using two seperate inputs, one for the string and one for the word to check which in this case was "et"
checkAppearance(loremInput, "et");

//[bonus assignment from jurgen] Following function bubblesorts the inputted string 
bubbleSort(testString);
