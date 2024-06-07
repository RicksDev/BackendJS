const container = document.getElementById("container-card");
const dataBase = `dataBaseTeste.json`;
const initialImage = "public/image/curtida-vazia.png";
const alternateImage = "public/image/curtida-vermelha.png";

fetch(dataBase)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Erro ao recuperar dados da API");
    }
    return response.json();
  })
  .then((data) => cards(data.results))
  .catch((error) => console.error("Erro:", error));

function cards(dataArray) {
  dataArray.forEach((post) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <div class="top-card">
            <div class="user">
                <img src="${post.user_image}" alt="">
                <h1 class="username">${post.username}</h1>
            </div>
            <div class="button-edit">
                <button class="options__icon" id="optionsIcon">
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                  <div class="options__menu" id="optionsMenu">
                    <button class="option" id="editOption">Editar</button>
                    <button class="option" id="deleteOption">Excluir</button>
                  </div> 
            </div>
            </div>
            <div class="mid-card">
                <div class="desc-post">
                    <p>${post.desc}</p>
                </div>
                <div class="img-post">
                    <img src="${post.post_image}" alt="">
                </div>
            </div>
            <div class="bot-card">
                <div class="actions">
                    <button class="button-like like">
                    <img src="${initialImage}" alt="like" class="img like-img" />
                    </button>
                </div>
            </div>
        </div>`;

    const likeButton = card.querySelector(".like");
    likeButton.addEventListener("click", () => {
      const likeImg = likeButton.querySelector(".like-img");
      if (likeImg.src.includes(initialImage)) {
        likeImg.src = alternateImage;
      } else {
        likeImg.src = initialImage;
      }
    });

    container.appendChild(card);
  });
}

document.addEventListener("click", function(event) {
  const icon = event.target.closest("#optionsIcon");
  if (icon) {
    const optionsMenu = icon.nextElementSibling;
    optionsMenu.classList.toggle("show");
  }
});
