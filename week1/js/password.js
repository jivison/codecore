const userInput = process.argv[2];

if (!userInput) {
    console.log("A password is required");
} else {
    console.log((userInput === "opensesame") ? "714" : "Wrong password...")
}