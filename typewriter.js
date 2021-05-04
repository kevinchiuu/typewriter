const sentence = "hello there from lighthouse labs";

const typeWriter = function(str) {
  for (let i = 0; i < str.length; i++) {
    //process.stdout.write(char);
    
    setTimeout(() => {
      process.stdout.write(str[i]);
    }, i * 500);
  }
};

typeWriter(sentence);