const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  const stack = [];

  let i = 0;
  let size = 10;

  while (i < expr.length) {
    stack.push(
      expr
        .split('')
        .slice(i, size + i)
        .join('')
    );
    i += size;
  }
    
  const newArr = stack.map((el) => {
    return el.replace(/11/g, '-').replace(/10/g, '.').replace(/0/g, '');
  });

  let str = '';
    
  for (const key of newArr) {
    if (key === '**********') {
      str += ' ';
    } else {
      str += MORSE_TABLE[key];
    }
  }
    
  return str;
}

module.exports = {
    decode
}
