// 1. Variables and Scope
// Challenge: Create a function that demonstrates the difference between block scope and function scope. Inside this function, use let and const to declare variables within different scopes (global, function, and block). Show how reassigning variables works with let in a loop, and attempt to reassign a const to trigger an error. Illustrate how variables declared with var in a loop become accessible outside of the loop, highlighting the difference in scope handling.

// Global variable
var globalVar = "Global Value";


function scopeDemo() {

  const functionVar = "Function Scope";

  for (let i = 0; i < 3; i++) {
    let blockVarLet = `Block Variable (let) - Iteration ${i + 1}`;
    console.log(`Iteration ${i + 1}:`);
    console.log(`  Global variable: ${globalVar}`);
    console.log(`  Function variable: ${functionVar}`);

    blockVarLet = "Reassigned Block Variable (let)";
    console.log(`  Block variable (let): ${blockVarLet}`);

    const blockVarConst = `Block Variable (const) - Iteration ${i + 1}`;
    console.log(`  Block variable (const): ${blockVarConst}`);
   
    // blockVarConst = "Reassigned Block Variable (const)"; // Error: Cannot reassign a const
  }

}

// Call the function
scopeDemo();
