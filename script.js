
function Game(){
  // Generate two random numbers in the range of 1 - 3
  let random1 = Math.floor(Math.random() * 3) + 1; // 1-3
  let random2 = Math.floor(Math.random() * 3) + 1; // 1-3


  // Assign the appropriate image

  if(random1===1){
  var randomImageName = "rock.png" 
  }else if (random1 ===2){
    var randomImageName = "scissors.png" 
  }else  if(random1===3){
    var randomImageName = "hand.png" 
    }
  let ImageSource1 = "img/" + randomImageName; // imgs/rock.png or  imgs/scissors.png or  imgs/paper.png

  if(random2===1){
    var randomImageName = "rock.png" 
    }else if (random2 ===2){
      var randomImageName = "scissors.png" 
    }else  if(random2===3){
      var randomImageName = "hand.png" 
      }
  let ImageSource2 = "img/" + randomImageName; // imgs/rock.png or  imgs/scissors.png or  imgs/paper.png



  // Update images
  //document.querySelectorAll("img")[0].setAttribute("src", "img/hand.png");
  document.querySelectorAll("img")[0].setAttribute("src", ImageSource1);
  document.querySelectorAll("img")[1].setAttribute("src", ImageSource2);

  // Print the winner. Use if statement or other appropriate logic.

  if(random1===1 && random2===3 || random1===2 && random2===1 || random1===3 && random2===2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  }else   if(random1===1 && random2===2 || random1===2 && random2===3 || random1===3 && random2===1){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
  }else if (random1===random2){
    document.querySelector("h1").innerHTML= "it's a draw!";
  }



}
