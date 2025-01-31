function greeter(person: string[]): string {
  return "Hello, "+ person.join(" ") +"!";
}

let user = ["Jane", "Doe"];
console.log(greeter(user)); //This is now working correctly because the function expects an array of strings as input.