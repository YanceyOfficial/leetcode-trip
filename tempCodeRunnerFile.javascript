/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();

  for (const str of strs) {
    const formattedStr = str.split("").sort().join("");
    map.set(formattedStr, map.has(formattedStr) ? [...map.get(formattedStr), str] : [str]);
  }

  console.log(Object.values(map))

  return [...map.values()]
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))