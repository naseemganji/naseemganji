function loopyLighthouse(range, multiples, words) {
  for (var num = range[0]; num <= range[1]; num++) {
    var buffer = [];
    for (var i = 0; i < multiples.length; i++) {
      if (num % multiples[i] === 0) {
        buffer.push(words[i]);
      }
    }
    if (buffer.length !== 0) {
      console.log(buffer.join(''));
    } else {
      console.log(num);
    }
  }
}
