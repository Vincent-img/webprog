let userPoint = 0;
let osszPont = 0;
let computerPoint = 0;
let gameOver = false;
document.getElementById("gomb").onclick = function(){engedKepek}
function letiltKepek() {
    gameOver = true;
    document.querySelectorAll(".kepek img").forEach(kep => {
        kep.style.pointerEvents = "none";
        kep.style.opacity = "1";
    });
    
}
function engedKepek(){
         letiltKepek.gameOver = false
}

function jatek(playerChoice) {
    if (gameOver) return;

    let valasztasok = ["ko", "papir", "ollo"];
    let random = Math.floor(Math.random() * 3);

    document.getElementById("koImg").style.borderWidth = "0px";
    document.getElementById("papirImg").style.borderWidth = "0px";
    document.getElementById("olloImg").style.borderWidth = "0px";

    if (playerChoice == "ko") {
        document.getElementById("koImg").style.borderWidth = "2px";
    }
    else if (playerChoice == "papir") {
        document.getElementById("papirImg").style.borderWidth = "2px";
    }
    else {
        document.getElementById("olloImg").style.borderWidth = "2px";
    }

    let computerChoice = valasztasok[random];

    document.getElementById("eredmenykep").src = `img/${computerChoice}.png`

    console.log(computerChoice)

    if ((playerChoice == "ko" && computerChoice == "papir") || (playerChoice == "papir" && computerChoice == "ollo") || (playerChoice == "ollo" && computerChoice == "ko")) {
        computerPoint++;
        if(computerPoint >= 10){
            console.log("a gép nyert")
            document.getElementById("vegeredmeny").innerHTML = "Sajnos elbuktál"
            letiltKepek();
        }
        console.log("comp:" + computerPoint);
        document.getElementById("eredmenyKiir").innerHTML = "A gép nyert. haha";
        document.getElementById("gepPontja").innerHTML = computerPoint;
    }
    else if ((playerChoice == "ko" && computerChoice == "ollo") || (playerChoice == "papir" && computerChoice == "ko") || (playerChoice == "ollo" && computerChoice == "papir")) {
        userPoint++;
        osszPont++; 
        if(userPoint >= 10){
            console.log("te nyertél")
            document.getElementById("vegeredmeny").innerHTML = "Sikeresen legyőzted a gépet"
            letiltKepek();
        }
        console.log("user:" + userPoint)
        document.getElementById("eredmenyKiir").innerHTML = "Te nyertél!"
        document.getElementById("tePontod").innerHTML = userPoint;
    }
    else {
        
        console.log("döntetlen......")
        document.getElementById("eredmenyKiir").innerHTML = "Döntetlen...."
    }
}