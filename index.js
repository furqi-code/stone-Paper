var player1, player2 ;
var rck=0, per=0, scr=0, tie=0, pl1Cnt=0, pl2Cnt=0 ;
let p1, p2 ;

function getName(choice)
{
    if(choice === 1) return "Scissor" ;
    if(choice === 2) return "Rock" ;
    if(choice === 3) return "Paper" ;
}
function updateWinner()
{
    // 1-scissor, 2-rock, 3-Paper  
    // if(player1==1 && player2==3){           // scissor and paper   
    //     $("#won").text(p1.val() + " wins") ;
    //     scr++ ;
    //     pl1Cnt++ ;
    // }else if(player1==1 && player2==2) {      // scissor and rock  
    //     $("#won").text(p2.val() + " wins") ;
    //     rck++ ;
    //     pl2Cnt++ ;
    // }else if(player1==2 && player2==3) {     // rock and paper
    //     $("#won").text(p2.val() + " wins") ;
    //     per++ ;
    //     pl2Cnt++ ;
    // }else if(player1==2 && player2==1) {     // rock and scissor
    //     $("#won").text(p1.val() + " wins") ;
    //     rck++ ;
    //     pl1Cnt++ ;
    // }else if(player1==3 && player2==1) {     // paper and scissor
    //     $("#won").text(p2.val() + " wins") ;
    //     scr++ ;
    //     pl2Cnt++ ;
    // }else if(player1==3 && player2==2) {     // paper and rock
    //     $("#won").text(p1.val() + " wins") ;
    //     per++ ;
    //     pl1Cnt++ ;
    // }else if(player1==player2){
    //     $("#won").text("Tie") ;
    //     tie++ ;
    // }

    // optimized code
    let winnerText;
    if(player1 === player2){
        winnerText = "Tie";
        tie++;
    }else if(   // player one won
        (player1 === 1 && player2 === 3) ||     // Scissor beats Paper
        (player1 === 2 && player2 === 1) ||     // Rock beats Scissor
        (player1 === 3 && player2 === 2)        // Paper beats Rock
    ){
        winnerText = $("#first").val() + " wins";
        if(player1 === 1) scr++;
        if(player1 === 2) rck++;
        if(player1 === 3) per++;
        pl1Cnt++ ;
    } else {    // player two won
        winnerText = $("#second").val() + " wins";
        if(player2 === 1) scr++;
        if(player2 === 2) rck++;
        if(player2 === 3) per++;
        pl2Cnt++ ;
    }
    $("#won").text(winnerText);
}
function updateStats()
{
    $(".pl1").text(p1.val() + " - " + pl1Cnt) ;
    $(".pl2").text(p2.val() + " - " + pl2Cnt) ;
    $(".r").text("Rock - " + rck) ; 
    $(".p").text("Paper - " + per) ;
    $(".s").text("Scissor - " + scr) ;
    $(".t").text("Tie - " + tie) ;
}

$("#start").on("click", function(){
    player1 = Math.floor(Math.random()*3)+1 ;
    player2 = Math.floor(Math.random()*3)+1 ;

    p1 = $("#first") ;
    p2 = $("#second") ;
    // Update images and choices
    $("#player1").attr("src","./"+player1+".png") ;
    $("#player2").attr("src","./"+player2+".png") ;
    $(".pick").text(getName(player1)) ;
    $(".pick1").text(getName(player2)) ;
    updateWinner() ;
    updateStats() ;
})

$("#user1").on("click", function(){
    player1 = Math.floor(Math.random()*3)+1 ;
    if(player1==1){           
        $(".pick").text("Scissor") ;
    }else if(player1==2) {       
        $(".pick").text("Rock") ;
    }else if(player1==3) {     
        $(".pick").text("Paper") ;
    }
    $("#player1").attr("src","./"+player1+".png") ;
    updateWinner() ;
    updateStats() ;
})

$("#user2").on("click", function(){
    player2 = Math.floor(Math.random()*3)+1 ;
    if(player2==1){           
        $(".pick1").text("Scissor") ;
    }else if(player2==2) {       
        $(".pick1").text("Rock") ;
    }else if(player2==3) {     
        $(".pick1").text("Paper") ;
    }
    $("#player2").attr("src","./"+player2+".png") ;
    updateWinner() ;
    updateStats() ;
})
