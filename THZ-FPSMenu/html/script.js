const buttons = document.querySelectorAll(".btn");

window.addEventListener('message', event => {
  console.log(event.data.action)
    if (event.data.action === 'showmenu') {
      var item = event.data;
      var boxactions = $(".menu-container");
      console.log(item.ShowUI)
      if (item.ShowUI == true) {
        boxactions.fadeIn();
      }
    }
});

buttons.forEach(button => {
  button.addEventListener("click", (event) => {
    const clickedButton = event.target;
    const buttonText = clickedButton.textContent;
    console.log("FPS : ", buttonText); 
    fetch(`http://THZ-FPSMenu/choosefps`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          typefps : buttonText
        })
      }).then(resp => resp.json()).then(resp => console.log(resp));
      $('.menu-container').fadeOut();
  });
});


document.addEventListener("keydown", function (event) {
    if (event.code === "Escape") {
      $.post("http://THZ-FPSMenu/closemenu", JSON.stringify());
      $('.menu-container').fadeOut();
    }
});