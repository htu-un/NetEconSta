/**************************************************************/
/* Prepares the cv to be dynamically expandable/collapsible   */
/**************************************************************/
function prepareList() {
    $('#expList').find('li:has(ul)')
    .click( function(event) {
        if (this == event.target) {
            $(this).toggleClass('expanded');
            $(this).children('ul').toggle('medium');
        }
        return false;
    })
    .addClass('collapsed')
    .children('ul').hide();

    //Hack to add links inside the cv
    $('#expList a').unbind('click').click(function() {
    	window.open($(this).attr('href'));
    	return false;
    });

//expList2
    $('#expList2').find('li:has(ul)')
    .click( function(event) {
        if (this == event.target) {
            $(this).toggleClass('expanded');
            $(this).children('ul').toggle('medium');
        }
        return false;
    })
    .addClass('collapsed')
    .children('ul').hide();


    $('#expList2 a').unbind('click').click(function() {
      window.open($(this).attr('href'));
      return false;
    });


    //expList3
        $('#expList3').find('li:has(ul)')
        .click( function(event) {
            if (this == event.target) {
                $(this).toggleClass('expanded');
                $(this).children('ul').toggle('medium');
            }
            return false;
        })
        .addClass('collapsed')
        .children('ul').hide();


        $('#expList3 a').unbind('click').click(function() {
          window.open($(this).attr('href'));
          return false;
        });


    //Create the button funtionality
    $('#expandList')
    .unbind('click')
    .click( function() {
        $('.collapsed').addClass('expanded');
        $('.collapsed').children().show('medium');
    })
    $('#collapseList')
    .unbind('click')
    .click( function() {
        $('.collapsed').removeClass('expanded');
        $('.collapsed').children().hide('medium');
    })

    $('#expandList2')
    .unbind('click')
    .click( function() {
        $('.collapsed').addClass('expanded');
        $('.collapsed').children().show('medium');
    })
    $('#collapseList2')
    .unbind('click')
    .click( function() {
        $('.collapsed').removeClass('expanded');
        $('.collapsed').children().hide('medium');
    })

};



/**************************************************************/
/* Functions to execute on loading the document               */
/**************************************************************/

/* Expandable-collapsable list: */

$(document).ready( function() {
    prepareList()
});


jQuery(document).ready(function() {
    App.init();
    OwlCarousel.initOwlCarousel();
    StyleSwitcher.initStyleSwitcher();
});


jQuery(document).ready(function() {
  jQuery(".owl-slider-unsd-publications").owlCarousel({
    items:4,
    itemsDesktop : [1000,4],
    itemsTablet : [600,3],
    itemsMobile : [479,1],
    navigation : false, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,
    //Autoplay
    autoPlay : true,
    stopOnHover : true,
  });
});


jQuery(document).ready(function() {
  jQuery(".owl-slider-unsd-dssb").owlCarousel({
    items:1,
    itemsDesktop : [1000,4],
    itemsTablet : [600,3],
    itemsMobile : [479,1],
    navigation : false, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,
    //Autoplay
    autoPlay : true,
    stopOnHover : false,
  });
});

jQuery(document).ready(function() {
    jQuery(".owl-slider-unsd-dssb-gf").owlCarousel({
      items:3,
      itemsDesktop : [1000,4],
      itemsTablet : [600,3],
      itemsMobile : [479,1],
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      //Autoplay
      autoPlay : true,
      stopOnHover : false,
    });
  });


jQuery(document).ready(function() {
  jQuery(".owl-slider-unsd-census").owlCarousel({
    items:4,
    itemsDesktop : [1000,4],
    itemsTablet : [600,3],
    itemsMobile : [479,1],
    navigation : false, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,
    //Autoplay
    autoPlay : true,
    stopOnHover : true,
  });
});
