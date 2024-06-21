import { generate, count } from "random-words";

console.log(generate(5));
console.log(generate({ minLength: 2 }));
console.log(
    generate({
      exactly: 15,
      wordsPerString: 3,
      formatter: (word) => word.toUpperCase(),
    })
  );
  