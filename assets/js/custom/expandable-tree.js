// http://tutorials.jenkov.com/jquery/creating-an-expandable-tree.html                                                                         
$(document).ready(function() {                                                               
  jQuery("#tree ul").hide();                                                       

  jQuery("#tree li").each(function() {                                                  
    var handleSpan = jQuery("<span></span>");                            
    handleSpan.addClass("handle");                                       
    handleSpan.prependTo(this);                                          

    if(jQuery(this).has("ul").size() > 0) {                              
      handleSpan.addClass("collapsed");                        
      handleSpan.click(function() {                            
        var clicked = jQuery(this);                  
        clicked.toggleClass("collapsed expanded");   
        clicked.siblings("ul").toggle();             
      });                                                      
    }                                                                    
  });                 
                                                                       
});           