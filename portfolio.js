let portfolioSection = document.getElementById("portfolioSection");
let name = document.getElementById("name");

let url = "https://api.github.com/users/chasmkhasan/repos";
async function getportfolioList() {
  let response = await fetch(url);
  if (response.ok) {
    let data = await response.json();

    let cardHTML = "";
    data.map((element) => {
      cardHTML +=
        '<div>\
        <a class ="download" href= ' +
        element.html_url +
        ' target="_blank"> \
         <h3>' +
        element.name +
        "</h3>\
        <p>"; /* +
        element.full_name + */
      ("</p>\
        </a>\
        </div>\
        ");
    });
    document.getElementsByClassName("project-file")[0].innerHTML = cardHTML;
  }
}
getportfolioList();
