// This file should import the fruits and both array helpers. It should then:

// - Randomly draw a fruit from the array
// - Log the message “I’d like one *RANDOMFRUIT*, please.”
// - Log the message “Here you go: *RANDOMFRUIT*”
// - Log the message “Delicious! May I have another?”
// - Remove the fruit from the array of fruits
// - Log the message “I’m sorry, we’re all out. We have *FRUITSLEFT* left.”

import { choice, remove } from "./helpers";
import fruitArray from "./foods";

const logRandFruit = () => {
  let randFruit1 = choice(fruitArray);
  console.log(`I’d like one ${randFruit1}, please.`);
  let randFruit2 = choice(fruitArray);
  console.log(`Here you go: ${randFruit2}`);
  console.log(`Delicious! May I have another?`);
  let remainingFruits = remove(fruitArray, randFruit2);
  console.log(`I’m sorry, we’re all out. We have  ${remainingFruits} left.`);
};

logRandFruit();
