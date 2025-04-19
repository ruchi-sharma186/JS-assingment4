console.log("Q1. Count Characters ");

function countCharacters(S) {
    let A_count = 0;
    let D_count = 0;
    for (let i = 0; i < S.length; i++) {
        
        if (S[i]=="A") {
            A_count++;
  
        }else if(S[i]=="D"){
            D_count++;
        }
    }
    return [A_count,D_count];   
}
console.log(countCharacters("AbaDd"));


console.log("Q2. Count the Heads");
function CountHead(S) {
    let freq = {}; // to store frequency of each character

    // Count frequency of each character
    for (let i = 0; i < S.length; i++) {
        let char = S[i];
        freq[char] = (freq[char] || 0) + 1;
    }

    // Create array of characters that occur more than once, sorted alphabetically
    let result = '';
    let chars = Object.keys(freq).sort();

    for (let char of chars) {
        if (freq[char] > 1) {
            result += char + freq[char];
        }
    }

    return result;
}

// Example usage:
let S = "prepbytes";
console.log(CountHead(S)); // Output: e2p2

console.log("Q3. Count the Vowels ");

function Count_Vowel(vowels) {
    // Define a set of vowels (both uppercase and lowercase)
    // const vowels = "aeiouAEIOU";
    let count = 0;
 
    // Loop through the string
    for (let i = 0; i < vowels.length; i++) {
        // if (vowels.includes(S[i])) {
        if( vowels[i]=="a" || vowels[i] =="e" || vowels[i] =="o" || vowels[i] == "u"){
            count++;
        }
    }

    return count;
}

// Example usage:
let input = "Prepbytes";
console.log(Count_Vowel(input)); // Output: 2


console.log("Q4. Concatenate the Strings ");
let str1 = "prep";
let str2 = "bytes";
let str3 = str1.concat(str2);
console.log(str3);


console.log("Q5. Find Length ");

function findLength(s) {
    let length= 0;
    for (let i= 1; i <= s.length; i++) {
        length++;
        
    }
    return length;
}
console.log(findLength("CeDqe"));

console.log(" Q6.Find the Winner");
function Game_Winner(S) {
    let adityaWins = 0;
    let danishWins = 0;

    // Loop through the string and count wins
    for (let i = 0; i < S.length; i++) {
        if (S[i] === 'A') {
            adityaWins++;
        } else if (S[i] === 'D') {
            danishWins++;
        }
    }

    // Determine the winner
    if (adityaWins > danishWins) {
        return "Aditya";
    } else if (danishWins > adityaWins) {
        return "Danish";
    } else {
        return "Draw";
    }
}
console.log(Game_Winner("ADDAAADDDDD")); // Danish
console.log(Game_Winner("ADDAAADD"));    // Draw



console.log("Q7. Join Strings");
let str11 = " PrepBytes";
let str12 = "Technologies";
let result = str11.concat(str12);
console.log(result);


console.log("Q8. Plaindrome Check");

function Plain_Check(S) {
    // Check if the string is exactly the same as its reverse
    let reversed = S.split("").reverse().join("");

    // Return "True" or "False" as string
    if (S === reversed) {
        return "True";
    } else {
        return "False";
    }
}

// Sample Test Cases
console.log(Plain_Check("Naman")); // False
console.log(Plain_Check("naman")); // True

console.log("Q9. Reverse the String");

let string = " I am utkarsh raj ";
let results = "";

for(let i = string.length-1; i>=0; i--)
    {
        results += string[i];
    }   
console.log(results);



console.log("Q10. Match the Strings");
function String_Match(S1, S2) {
    if (S1 === S2) {
        return "YES";
    } else {
        return "NO";
    }
}

// Sample Test Case
console.log(String_Match("Prepbytes", "Prepbytes")); // YES
console.log(String_Match("prepbytes", "Prepbytes")); // NO


console.log("Q11. String Replace");
let s1 = " Hi, I am You. You Prepbytes "
let s2 = " Hi, I am Prepbytes."
let r1 = s2.replace(s1);
console.log(r1);

console.log("Q12. Split the String ");
// let st = " I am utkarsh raj ";
// r2 = st.split("");
// console.log(r2);

function Split(S) {
    return S.split(" ");
}

// Sample Test Case
let result1 = Split("I am utkarsh raj");
result1.forEach(word => console.log(word));

console.log("Q13. Count the Vowels and Consonants");
function Count_Vowels(S) {
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (let i = 0; i < S.length; i++) {
        if (vowels.includes(S[i])) {
            count++;
        }
    }

    return count;
}

function Count_Consonants(S) {
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (let i = 0; i < S.length; i++) {
        let char = S[i];
        // Check if it's a letter and not a vowel
        if (/[a-zA-Z]/.test(char) && !vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

// Sample Input
let inp = "Prepbytes";

console.log(Count_Vowels(inp), Count_Consonants(inp)); // Output: 2 7

