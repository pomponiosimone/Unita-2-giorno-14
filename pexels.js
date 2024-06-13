const apiKey = "vVNtbzKMBo7vpMQ6NiWAO89VHtwUw9njI2Z4LEAyLqAIwDjJuLMIDiy8";
document.getElementById("load").addEventListener("click", modificaImg);

function modificaImg() {
  const query = "cat";
  const url = `https://api.pexels.com/v1/search?query=${query}`;

  fetch(url, {
    headers: {
      Authorization: apiKey,
    },
  })
    .then(response => response.json())
    .then(app => {
      const imagesContainer = document.querySelector(".album .container .row");
      imagesContainer.innerHTML = "";

      app.photos.forEach(photo => {
        const colDiv = document.createElement("div");
        colDiv.className = "col-md-4";

        const cardDiv = document.createElement("div");
        cardDiv.className = "card mb-4 shadow-sm";

        const img = document.createElement("img");
        img.src = photo.src.medium;
        img.alt = photo.alt;
        img.className = "bd-placeholder-img card-img-top";

        const cardBodyDiv = document.createElement("div");
        cardBodyDiv.className = "card-body";

        const cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        cardTitle.textContent = "Lorem Ipsum";

        const cardText = document.createElement("p");
        cardText.className = "card-text";
        cardText.textContent =
          "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.";

        const cardFooterDiv = document.createElement("div");
        cardFooterDiv.className =
          "d-flex justify-content-between align-items-center";

        const btnGroupDiv = document.createElement("div");
        btnGroupDiv.className = "btn-group";

        const viewBtn = document.createElement("button");
        viewBtn.className = "btn btn-sm btn-outline-secondary";
        viewBtn.textContent = "View";

        const hideBtn = document.createElement("button");
        hideBtn.className = "btn btn-sm btn-outline-secondary hide-button";
        hideBtn.textContent = "Hide";

        hideBtn.addEventListener("click", () => {
          colDiv.style.display = "none";
        });

        btnGroupDiv.appendChild(viewBtn);
        btnGroupDiv.appendChild(hideBtn);

        const imageId = document.createElement("small");
        imageId.className = "text-muted";
        imageId.textContent = photo.id;

        cardFooterDiv.appendChild(btnGroupDiv);
        cardFooterDiv.appendChild(imageId);

        cardBodyDiv.appendChild(cardTitle);
        cardBodyDiv.appendChild(cardText);
        cardBodyDiv.appendChild(cardFooterDiv);

        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBodyDiv);

        colDiv.appendChild(cardDiv);

        imagesContainer.appendChild(colDiv);
      });
    })
    .catch(error =>
      console.error("Errore nel caricamento delle immagini:", error)
    );
}
