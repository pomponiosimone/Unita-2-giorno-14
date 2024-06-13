const apiKey = "vVNtbzKMBo7vpMQ6NiWAO89VHtwUw9njI2Z4LEAyLqAIwDjJuLMIDiy8";

document
  .getElementById("load")
  .addEventListener("click", () => loadImages("cat"));
document
  .getElementById("load-secondary")
  .addEventListener("click", () => loadImages("dog"));

function loadImages(query) {
  const url = `https://api.pexels.com/v1/search?query=${query}`;

  fetch(url, {
    headers: {
      Authorization: apiKey,
    },
  })
    .then(response => response.json())
    .then(data => {
      const imagesContainer = document.querySelector(".album .container .row");
      imagesContainer.innerHTML = "";

      data.photos.forEach(photo => {
        const col = document.createElement("div");
        col.className = "col-md-4";

        const card = document.createElement("div");
        card.className = "card mb-4 shadow-sm";

        const img = document.createElement("img");
        img.src = photo.src.medium;
        img.className = "bd-placeholder-img card-img-top";
        img.alt = photo.alt;

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        cardTitle.textContent = photo.photographer;

        const cardText = document.createElement("p");
        cardText.className = "card-text";
        cardText.textContent = photo.alt;

        const divButtons = document.createElement("div");
        divButtons.className =
          "d-flex justify-content-between align-items-center";

        const btnGroup = document.createElement("div");
        btnGroup.className = "btn-group";

        const viewButton = document.createElement("button");
        viewButton.type = "button";
        viewButton.className = "btn btn-sm btn-outline-secondary";
        viewButton.textContent = "View";

        const editButton = document.createElement("button");
        editButton.type = "button";
        editButton.className = "btn btn-sm btn-outline-secondary";
        editButton.textContent = "Edit";

        btnGroup.appendChild(viewButton);
        btnGroup.appendChild(editButton);

        divButtons.appendChild(btnGroup);
        divButtons.appendChild(document.createElement("small")).className =
          "text-muted";
        divButtons.querySelector("small").textContent = "9 mins";

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(divButtons);

        card.appendChild(img);
        card.appendChild(cardBody);

        col.appendChild(card);

        imagesContainer.appendChild(col);
      });
    })
    .catch(error =>
      console.error("Errore nel caricamento delle immagini:", error)
    );
}
