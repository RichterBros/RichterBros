
$(document).ready(function(){
   
   $("#card1").hide()
   $("#card2").hide()
    
   $("#item0").click(function( event ) {
    //event.preventDefault();
    
    card.cardCount =0;
    card.cardSwitch();
    console.log(card.cardCount)
    
});
   
   
   
   $("#item1").click(function( event ) {
        //event.preventDefault();
        
        card.cardCount =1;
        card.cardSwitch();
        console.log(card.cardCount)
        
    });

    $("#item2").click(function( event ) {
        //event.preventDefault();
        
        card.cardCount =2;
        card.cardSwitch();
        console.log(card.cardCount)
        
    });


    
   
});

    
    
    function Card(){
    }    
    
    
    var card = new Card(); 
  

    Card.prototype.cardSwitch = function(){

 if (this.cardCount ===0){
    $("#card0").show()
    $("#card1").hide()
    $("#card2").hide()
        
     }


 if (this.cardCount ===1){
    $("#card0").hide()
    $("#card1").show()
    $("#card2").hide()

  }
  if (this.cardCount ===2){
    $("#card0").hide()
    $("#card1").hide()
    $("#card2").show()

  }
}          
        

    

//$("#card0").hide(),$("#card1").hide(),$("#card2").hide(),$("#card3").hide(),$("#card4").hide()

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        //     //$(this).css({"background-color":"red"});
    //     $("#card1").toggle();
       
        
    //     $("#card2").hide();
       
           
      
    // });   
    
    
    
    
    
    
    
    
    
    
    
    //     $("#item2").click(function( event ) {
    //         $("#card2").toggle()
       
    //         $("#card1").hide();
          
        
        
        
    //     });
    
    
    
       
    // });
    
    
    
    
    
    
    
    
    