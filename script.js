window.addEventListener("load", function(){
  var screen = this.document.querySelector('#calculatorScreen');
  screen.innerText = "";
  const buttons = document.querySelectorAll("button");
  for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", function(e){
      text = buttons[index].innerHTML;
      newText = "";
      if (text == "Ac"){
        screen.innerText = "";
      }else if (index == 1){
        // clear last index of screen
        for (let index = 0; index < screen.innerHTML.length; index++) {
          if (index == screen.innerHTML.length-1){
            continue;
          }
          newText+= screen.innerHTML[index]
        }
        screen.innerHTML = newText;
        newText="";
      }else if (text == "="){
        screen.innerHTML = eval(screen.innerHTML)
      }else{
        screen.innerHTML+=text;
      }
    });
  }
})
