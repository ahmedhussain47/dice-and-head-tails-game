var dice = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }
  
  
  
  //Prints dice roll to the page
  
  function printNumber(number) {
    var placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number;
  }
  
  var button = document.getElementById('button');
  
  button.onclick = function() {
    var result = dice.roll();
    printNumber(result);
  };
  
  document.getElementById('click').onclick = click;

  var heads = 0;
  var tails = 0;
  function click() {  
      x = (Math.floor(Math.random() * 2) == 0);
      if(x){
          flip("heads");
      }else{
          flip("tails");
      }
  };
  function flip(coin) {
      document.getElementById("result").innerHTML = coin;
  };  