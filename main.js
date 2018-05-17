function start() {
    $("#appetizers").mouseenter(function() {
        $(".appetizer_choices").removeClass("hide_flex");
        $(".appetizer_choices").addClass("show_flex");
        $(".appetizer_choices").slideDown(); 
    });
    $("#appetizers").mouseleave(function() {
        $(".appetizer_choices").slideUp();
    });
    $("#entrees").mouseenter(function() {
        $(".entree_choices").removeClass("hide_flex");
        $(".entree_choices").addClass("show_flex");
        $(".entree_choices").slideDown();
    });
    $("#entrees").mouseleave(function() { 
        $(".entree_choices").slideUp(); 
    });
    
    $("#desserts").mouseenter(function() {
        $(".dessert_choices").removeClass("hide_flex"); 
        $(".dessert_choices").addClass("show_flex");
        $(".dessert_choices").slideDown();
    });
    $("#desserts").mouseleave(function() {
        $(".dessert_choices").slideUp();
    });
}

start()



