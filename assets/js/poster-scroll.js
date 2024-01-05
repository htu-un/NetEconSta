$(document).ready(function() {


        //$("#goal8_table_g4").hide();
        //$("#goal8_table_g5").hide();



         $(".dropdown-menu li a").click(function(){
            $("." + $(this).data("id")).fadeIn('slow').siblings().hide();


          });
    });


    $(function(){
        $("#tabs li a").click(function(){
            $(".newscontainer").hide();
            var myDiv = $(this).attr("href");
            $(myDiv).show();
        });
    });
