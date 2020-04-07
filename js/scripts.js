
$(document).ready(function(){
    
    $("#card1").hide();
    $("#card2").hide();   
    
    $("#item1").click(function( event ) {
        //$(this).css({"background-color":"red"});
        $("#card1").toggle();
       
        
        $("#card2").hide();
       
           
      
    });   
    
    
    
    
    
    
    
    
    
    
    
        $("#item2").click(function( event ) {
            $("#card2").toggle()
       
            $("#card1").hide();
          
        
        
        
        });
    
    
    
       
    });
    
    
    
    
    
    
    
    
    