portfolioSection = document.getElementById("portfolioSection");
let name = document.getElementById("name");

let url = "#";
async function getTodoList() {
  let response = await fetch(url);
  if (response.ok) {
    let data = await response.json();
    let cardHTML = "";
    data.map((element) => {
      cardHTML += "";
    });
    document.getElementsByClassName("portfolio")[0].innerHTML = cardHTML;
  }
}

getTodoList();
