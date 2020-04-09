
$(document).ready(function(){
   
   $("#card1").hide()
   $("#card2").hide()
   $("#card3").hide()
   $("#card4").hide()
   
   $("#item0").click(function( event ) {
       card.cardCount=0;
       card.cardSwitch();
       console.log(card.cardCount)
    });
    
    $("#item1").click(function( event ) {
        card.cardCount=1;
        card.cardSwitch();
        console.log(card.cardCount)
    });

    $("#item2").click(function( event ) {
        card.cardCount=2;
        card.cardSwitch();
        console.log(card.cardCount)
    });
    
    $("#item3").click(function( event ) {
        card.cardCount=3;
        card.cardSwitch();
        console.log(card.cardCount)
    });

    $("#item4").click(function( event ) {
        card.cardCount=4;
        card.cardSwitch();
        console.log(card.cardCount)
    });
});

function Card(){}    
    
var card = new Card(); 
  
Card.prototype.cardSwitch = function(){

if (this.cardCount ===0){
    $("#card0").show()
    $("#card1").hide()
    $("#card2").hide()
    $("#card3").hide()
    $("#card4").hide()   
}else if 
    (this.cardCount ===1){
    $("#card0").hide()
    $("#card1").show()
    $("#card2").hide()
    $("#card3").hide()
    $("#card4").hide()   
}else if 
    (this.cardCount ===2){
    $("#card0").hide()
    $("#card1").hide()
    $("#card2").show()
    $("#card3").hide()
    $("#card4").hide()             
}else if 
    (this.cardCount ===3){
    $("#card0").hide()
    $("#card1").hide()
    $("#card2").hide()
    $("#card3").show()
    $("#card4").hide()          
}else if 
    (this.cardCount ===4){
    $("#card0").hide()
    $("#card1").hide()
    $("#card2").hide()
    $("#card3").hide()
    $("#card4").show()           
    }
}          
        

    
    
    
    
    
    
    
    
    
    
    