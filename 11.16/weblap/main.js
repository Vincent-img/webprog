let userPoint = 0;
let computerPoint = 0;

function jatek(userChoice){
    let valasztasok = ['ko', 'papir', 'ollo'];
    let random = Math.floor(Math.random()*3);

    let computerChoice = valasztasok[random]

    document.getElementById("er").src = "\"

    console.log(computerChoice)

    if(userChoice == 'ko' && computerChoice == 'papir' ||userChoice == 'papir' && computerChoice == 'ollo' || userChoice == 'ollo' && computerChoice == 'ko'){
        computerPoint++;
        console.log("comp:" + computerPoint)
    }
    
    else if(userChoice == 'ollo' && computerChoice == 'papir' || userChoice == 'papir' && computerChoice == 'ko' || userChoice == 'ko' && computerChoice == 'ollo'){
        userPoint++;
        console.log("user" + userPoint)
    }
    else{
        console.log("döntetlen")
    }
    











}