let userPoint = 0;
let osszPont = 0;
let computerPoint = 0;
let gameOver = false;

function letiltKepek() {
    gameOver = true;
    document.querySelectorAll(".kepek img").forEach(kep => {
        kep.style.pointerEvents = "none";
        kep.style.opacity = "1";
    });
}
function engedKepek() {
    userPoint = 0;
    osszPont = 0;
    computerPoint = 0;
    gameOver = false;

    document.getElementById("tePontod").innerHTML = userPoint;
    document.getElementById("gepPontja").innerHTML = computerPoint;
    document.getElementById("eredmenyKiir").innerHTML = "";
    document.getElementById("vegeredmeny").innerHTML = "";
    document.getElementById("eredmenykep").removeAttribute("src");

    document.querySelectorAll(".kepek img").forEach(kep => {
        kep.style.pointerEvents = "auto";
        kep.style.borderWidth = "0px";
    });
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
let email = document.getElementById("email").value;
let felhNev = document.getElementById("felhasznalonev").value;


function bejelentkezes(){
    let email = document.getElementById("email").value;
    let felhNev = document.getElementById("felhasznalonev").value;  
    let emailhossz = email.lenght;
    let felhnevhossz = felhNev.lenght;
    let vankukac = false;
    let vanpont = false;
    let joahosszfelhnev = false;
    let joahosszemail = false;

    console.log(email);
    console.log(felhNev);
    
    // email ellenőrzés

    if(email.includes("@")){
        vankukac = true;
        
    }
    if(email.includes(".")){
        vanpont = true;
    }
    if(emailhossz >= 10 || emailhossz < 50 ){
        joahosszemail = true;
    }




    console.log("@")
    console.log(vankukac)
    console.log(".")
    console.log(vanpont)
    console.log("jo a nev")
    console.log(joahosszfelhnev)
    console.log("jo az email")
    console.log(joahosszemail)
    console.log("@")
    console.log()
    
}