
class Quiz {
 
 
  constructor(){}
  
 
  
  
  getState(){
  
    var gameStateRef  = database.ref('gameState');
  
    gameStateRef.on("value",function(data){
  
       gameState = data.val();
  
    })
  
 
  
  
  }
  
 
  
  
  update(state){
  
    database.ref('/').update({
  
      gameState: state
  
    });
  
  }
  
 
  
  
 start(){
  
   
  
      contestant = new Contestant();
  
     
  
        contestant.getCount();
  
     
  
      question = new Question()
  
      question.display();
  
   
  
  }
  
 
  
  
  play(){
  
    question.hide();
  
    background("Yellow");
  
    fill(0);
  
    textSize(30);
  
    text("Resultado do Questionário",250, 50);
  
    text("------------------------------------",250, 65);
  
    Contestant.getPlayerInfo();
  
    if(allContestants !== undefined){
  
      debugger;
  
      var display_Answers = 230;
  
      fill("Blue");
  
      textSize(15);
  
      text("*OBSERVAÇÃO: O jogador que respondeu corretamente está destacado na cor verde!",130,230);
  
 
  
  
      for(var plr in allContestants){
  
        debugger;
  
        var correctAns = "3";
  
        if (correctAns === allContestants[plr].answer)
  
          fill("Green")
  
        else
  
          fill("red");
  
 
  
  
        display_Answers+=30;
  
        textSize(20);
  
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)
  
      }
  
    }
  
  }
  
 }
 
  
 