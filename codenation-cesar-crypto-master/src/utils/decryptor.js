function decryptor(string, shift) {
  string = string.toLowerCase();
  let newString = "";

  for (let i = 0; i < string.length; i++) {
    let charCode = string.charCodeAt(i);

    if (!/[a-z]/g.test(string[i])) {
    } else if (charCode - shift < 97) {
      charCode = 122 - 97 + (charCode - shift) + 1;
    } else {
      charCode -= shift;
    }

    newString += String.fromCharCode(charCode);
  }

  return newString;
}

module.exports = decryptor;
