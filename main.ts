import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.magenta("\n\t wellcome to Quiz about typescript by SARA ATIF\n"));
console.log("~~".repeat(40));

let user = await inquirer.prompt({
    name: "username",
    type: "input",
    message: "Please Enter your name: "
})

let score:number = 0;

let ques1 = await inquirer.prompt({
        name: "first",
        type: "list",
        message: "Q1: TypeScript is a ?",
        choices: ["strongly typed", "object oriented", "compiled language", "All of the above"]
    })
    if (ques1.first == "All of the above") {
        console.log(chalk.greenBright.italic("\nCorrect answer!\n"))
        score++
    } else {
        console.log(chalk.red.italic("\nIncorrect answer!"))
        console.log(chalk.blueBright.italic("The correct answer is `All of the above`\n"))
    };

  let ques2 =await inquirer.prompt({
    name: "second",
    type: "list",
    message: "Q2: Who developed Typescript language? ",
    choices: ["Apple", "IBM", "Microsoft", "Google"]
})
if (ques2.second == "Microsoft") {
    console.log(chalk.greenBright.italic("\n Correct answer!\n"))
    score++
} else {
    console.log(chalk.red.italic("\n Incorrect answer!"))
    console.log(chalk.blueBright.italic("The correct answer is `Microsoft`\n"))
};

let ques3 =await inquirer.prompt({
    name: "third",
    type: "list",
    message: "Q3: Extension of typescript is: ",
    choices: [".d.tp", ".d.td", ".d.ts", ".d.ty"]
})
if (ques3.third == ".d.ts") {
    console.log(chalk.greenBright.italic("\nCorrect answer!\n"))
    score++
} else {
    console.log(chalk.red.italic("\n Incorrect answer!"))
    console.log(chalk.blueBright.italic("The correct answer is `.d.ts`\n"))
};

let ques4 =await inquirer.prompt({
    name: "fourth",
    type: "list",
    message: "Q4: Typescript supports how many types of comments? ",
    choices: ["1", "2", "3", "4"]
})
if (ques4.fourth == "2") {
    console.log(chalk.greenBright.italic("\n Correct answer!\n"))
    score++
} else {
    console.log(chalk.red.italic(" \n Incorrect answer!"))
    console.log(chalk.blueBright.italic("The correct answer is `2`\n"))
};

let ques5 =await inquirer.prompt({
    name: "fifth",
    type: "list",
    message: "Q5: What are the three main `simple types` in typeScript? ",
    choices: ["Object,Array,Symbol", "Array,Object,Boolean", "Boolean,Number,String", "Object,String,Number"]
})
if (ques5.fifth == "Boolean,Number,String") {
    console.log(chalk.greenBright.italic("\n Correct answer!\n "))
    score++
} else {
    console.log(chalk.red.italic("\n Incorrect answer!"))
    console.log(chalk.blueBright.italic("The correct answer is `Boolean,Number,String`\n"))
};

console.log(`Dear ${chalk.green.bold.italic(user.username)}, Your score is: ${chalk.cyanBright.bold(score)} out of ${chalk.cyanBright.bold(`5`)} `);