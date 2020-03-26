var randomWordList = ["apple", "banana", "orange", "berry"];
    var randomWord = randomWordList[Math.floor(Math.random() * randomWordList.length)];

    var s;
    var score = 0;
    var lives = randomWord.length + 5;
    var answerArray = [];

    startUp();

    function startUp(){
      for (var i=0; i < randomWord.length; i++){
          answerArray[i] = "_";
      }
      s = answerArray.join(" ");
      document.getElementById("answer").innerHTML = s;
    }

    function Letter(){
        var letter = document.getElementById("letter").value;

        for (var i = 0; i < randomWord.length; i++)
        {
          if (randomWord[i] === letter){
            answerArray[i] = letter;
            score = score + 1000;
            document.getElementById("score").innerHTML = "$" + score + ": Score";
            
          }
        }
        lives--;
        document.getElementById("lives").innerHTML = lives + " : Lives";
        
        
        document.getElementById("lifeInfo").innerHTML = "Lives calculated by length of word + 5";






        document.getElementById("answer").innerHTML = answerArray.join(" ");
    
        if(lives < 1){
          document.getElementById("wordWas").innerHTML = "The word was " + randomWord;
            document.getElementById("stat").innerHTML = "Oh No! - Out of Guesses!";
        }
    }
