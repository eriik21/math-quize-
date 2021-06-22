player1name=localStorage.getItem("player1_name")
player2name=localStorage.getItem("player2_name")
player1score=0
player2score=0
document.getElementById("player1_name").innerHTML=player1name
document.getElementById("player2_name").innerHTML=player2name
document.getElementById("player1_score").innerHTML=player1score
document.getElementById("player2_score").innerHTML=player2score
document.getElementById("player_question").innerHTML="questonturn-"+player1name
document.getElementById("player_answer").innerHTML="answerturn-"+player2name
function send(){
    getword=document.getElementById("word").value
    word=getword.toLowerCase()
    console.log(word)
   charat1=word.charAt(1)
   console.log(charat1)
   charat2=word.charAt(3)
   console.log(charat2) 
   charat3=word.charAt(5)
   console.log(charat3)
   removecharat1=word.replace(charat1,"_")
   removecharat2=removecharat1.replace(charat2,"_") 
   removecharat3=removecharat2.replace(charat3,"_")
   console.log(removecharat3)
   queston="<h4 id='word_display'>q."+removecharat3+"</h4>"
   inputbox="<br>answer:<input type='text'id='input_checkbox'>"
   checkbutton="<br><br><button class='btn-info'onclick='check()'>check</button>"
   row=queston+inputbox+checkbutton
   document.getElementById("output").innerHTML=row
   document.getElementById("word").value=""  
}
questionturn="player1"
   answerturn="player2"
   function check(){
       getanswer=document.getElementById("input_checkbox").value
       answer=getanswer.toLowerCase()
       console.log(answer)
       if(answer==word){
           if(answerturn=="player1"){
               player1_score=player1_score+1
               document.getElementById("player1_score").innerHTML=player1_score
           }
           else{
               player2_score=player2_score+1
               document.getElementById("player2_score").innerHTML=player2_score
           }
       }
       if(questionturn=="player1"){
           questionturn="player2"
           document.getElementById("player_question").innerHTML="questoniturn-"+player2_name
       }
       else{
           questionturn="player1"
           document.getElementById("player_question").innerHTML="questionturn-"+player1_name

       }
       if(answerturn=="player1"){
           answerturn="player2"
           document.getElementById("player_answer").innerHTML="answerturn-"+player2_name
       }
       else{
           answerturn="player1"
           document.getElementById("player_answer").innerHTML="answerturn-"+player1_name
       }
   } 

