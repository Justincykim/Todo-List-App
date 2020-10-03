// Check Off Specific Todos By Clicking
// $("li").click(function(){
//     //if li is gray
//     if($(this).css("color") === "rgb(128, 128, 128)"){
//         $(this).css({
//             color: "black",
//             textDecoration: "none"
//         });
//     }else{
//         $(this).css({
//             color: "grey",
//             textDecoration: "line-through"
//         });
//     }
// })

// Move Items in the list


// Check off Specific Todos By Clicking Using toggleClass
$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});


// Click on X to delete Todo
$("ul").on("click","span",function(event){
    //use parent() to get the parent of the element
    $(this).parent().fadeOut(500, function(){
        //this refers to the parent element
        $(this).remove();
    });
    //this code below would stop bubbling up to other parents
    event.stopPropagation();
});


$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var todoText = $(this).val();
        $("ul").append('<li><span><i class="fa fa-trash"></i></span> ' + todoText + "</li>");
        $(this).val("");
    };
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});


