function matchJavaScript(text) { //task-1
    const regex = /JavaScript/g;
    const matches = text.match(regex);
    console.log("Matches for 'JavaScript':", matches);
}
matchJavaScript("JavaScript is great. I love JavaScript because JavaScript is versatile.");

function matchDigits(text) { //task-2
    const regex = /\d+/g;
    const matches = text.match(regex);
    console.log("Matches for digits:", matches);
}
matchDigits("There are 2 apples, 10 oranges, and 300 bananas.");

function matchCapitalWords(text) { //task-3
    const regex = /\b[A-Z][a-z]*\b/g;
    const matches = text.match(regex);
    console.log("Capital words:", matches);
}
matchCapitalWords("Alice went to Wonderland. Bob was with her.");

function matchDigitSequences(text) { //task-4
    const regex = /\d+/g;
    const matches = text.match(regex);
    console.log("Sequences of digits:", matches);
}
matchDigitSequences("Phone numbers: 123, 4567, 89012. Call me at 1234567890.");


function capturePhoneNumberComponents(phoneNumber) { //task-5
    const regex = /\((\d{3})\) (\d{3})-(\d{4})/;
    const match = phoneNumber.match(regex);
    if (match) {
        const [, areaCode, officeCode, lineNumber] = match;
        console.log("Area Code:", areaCode);
        console.log("Central Office Code:", officeCode);
        console.log("Line Number:", lineNumber);
    } else {
        console.log("No match found.");
    }
}
capturePhoneNumberComponents("(123) 456-7890");

function captureEmailComponents(email) { //task-6
    const regex = /^(\w+)@(\w+\.\w+)$/;
    const match = email.match(regex);
    if (match) {
        const [, username, domain] = match;
        console.log("Username:", username);
        console.log("Domain:", domain);
    } else {
        console.log("No match found.");
    }
}

captureEmailComponents("example.user@example.com");

function matchWordAtBeginning(text, word) { //task-7
    const regex = new RegExp(`^${word}\\b`);
    const match = text.match(regex);
    console.log(`Matches for '${word}' at the beginning:`, match);
}

matchWordAtBeginning("JavaScript is great.", "JavaScript");

function matchWordAtEnd(text, word) { //task-8
    const regex = new RegExp(`\\b${word}$`);
    const match = text.match(regex);
    console.log(`Matches for '${word}' at the end:`, match);
}
matchWordAtEnd("I love programming with JavaScript", "JavaScript");

function validatePassword(password) { //task-9
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isValid = regex.test(password);
    console.log("Password is valid:", isValid);
}

validatePassword("Passw0rd@2024");

function validateURL(url) { //task-10
    const regex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/.*)?$/;
    const isValid = regex.test(url);
    console.log("URL is valid:", isValid);
}

validateURL("https://www.example.com/path/to/resource");





