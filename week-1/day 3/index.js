
// Task 1
function printEven(num) {
    if (num % 2 == 0) {
        console.log(num)
    }
}

// Task 2
function fibonacciSequence(len) {
    counter = 0
    num1 = 0;
    num2 = 1;
    while (counter < len) {
        console.log(num1 + " ")
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
    }
}

// Task 3
function averageOfArray(array){
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum / array.length);
}

// Task 4
function maxOfArray(array) {
    winner = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] > winner) {
            winner = array[i];
        }
    }
    console.log(winner);
}

// Task 5
function minOfArray(array) {
    winner = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] < winner) {
            winner = array[i]
        }
    }
    console.log(winner)
}

// Task 6

function vowelsInString(str) {
    numberOfVowels = 0
    for (let i = 0; i < str.length; i++) {
        if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u") {
            numberOfVowels += 1;
        }
    }
    console.log(numberOfVowels);
}

// Task 7
function add(num1, num2) {
    console.log(num1 + num2);
}

// Task 8
function mult(num1, num2) {
    console.log(num1 * num2);
}

// Task 9: given a city, return the postal code

// Task 10
function alphabetize_strings(array) {
    console.log(array.sort())
}

// Task 11
function sortNum(array, rev) {
    if (rev == False) {
        console.log(array.sort())
    }
    else {
        forward = array.sort()
        console.log(forward.reverse())
    }
}

// Task 12
function rev(num) {
    reverse = 0
    while (num != 0) {
        reverse = reverse * 10 + num % 10;
        num /= 10;
    }
    console.log(reverse)
}

// Task 13
function capitalize(str) {
    // do you need to create a new variable or does it modify the original
    for (i = 0; i < str.length; i++) {
        i.toUpperCase()
    }
    console.log(str)
}

// Task 14
function returnOccurences(word, letter) {
    occurences = 0
    for (i = 0; i < word.length; i++) {
        if (i = letter) {
            occurences += 1
        }
    }
    console.log(occurences)
}

// Task 15
function filtered(array, string) {
    let filteredArr = array.filter((x) => x = string)
    console.log(filteredArr)
}

// Task 16
function filteredNum(array, num) {
    let filteredArr = array.filter((x) => x = num)
    console.log(filteredArr)
}

// Task 17
function filteredId(array, id) {
    let filteredArray = array.filter(x => x.id === id)
    console.log(filteredArray)
}

// Task 18
function findId(array, objId) {
    for (i = 0; i < array.length; i++) {
        if (i.id = objId) {
            console.log(i)
        }
    }
}

// Task 19
// find date & time

// Task 20
function higherval(array, val) {
    newArr = []
    for (i = 0; i < array.length; i++) {
        if (i > 10) {
            newArr += i   // figure this out later
        }
    }
    console.log(newArr)
}

