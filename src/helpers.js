// This file should export two array helper functions:

// - *choice(items)*: returns a randomly selected item from array of items
export const choice = (items) => {
  let randIdx = Math.floor(Math.random() * items.length);
  return items[randIdx];
};

// - *remove(items, item)*: removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined.

export const remove = (items, item) => {
  for (let i = 0; i < items.length; i++) {
    if (items[i] === item) {
      return [...items.slice(0, i), ...items.slice(i + 1)];
    }
  }
};
