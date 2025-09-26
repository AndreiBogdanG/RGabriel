import list from "./pipes.js";

const mainDiv = document.getElementById("gallery-div");

// Mobile menu toggle
document.getElementById("menu-btn").addEventListener("click", function () {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
});

// Initialize animations and icons
AOS.init({
  duration: 800,
  once: true,
});
feather.replace();

function changeLargeImage(imageSrc) {
  const largeImage = document.getElementById("large-image");
  largeImage.src = imageSrc; // Schimbă sursa imaginii mari cu sursa imaginii mici
}

// Create the cards:
for (let i = 1; i < list.length; i++) {
  // Verifica daca linkul e "#" si daca da, adauga proprietatea "onclick = return false"
  let onClickProp = "";
  if ((list[i].link = "#")) {
    onClickProp = "return false";
  } else {
    onClickProp = "";
  }

  const flipCardDiv = document.createElement("div");
  flipCardDiv.style.height = "100%";
  flipCardDiv.id = `flipDiv${i + 1}`;
  flipCardDiv.className = "group relative overflow-hidden rounded-lg shadow-lg";
  flipCardDiv.setAttribute("data-aos", "fade-up");
  flipCardDiv.setAttribute("data-aos-delay", `${list[i].dataAosDelay}`);

  flipCardDiv.innerHTML = ` 
    <img
      src="${list[i].image}"
      alt="Pipe 1"
      class="w-full h-64 object-cover transition duration-500 group-hover:scale-105"
    />
    <div
      class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
    >
      <div class="text-center p-4">
        <h3 class="text-white text-xl font-bold">${list[i].title}</h3>
        <p class="text-amber-200">${list[i].shortDescription}</p>
        <a href="product.html?item=${list[i].item}" class="btn inline-block briar-light hover:briar-dark text-white px-8 py-3 rounded-full text-lg font-medium transition">
          ${list[i].btnText1}
        </a>
        <a href="${list[i].link}" onclick="${onClickProp}" class="btn inline-block briar-light hover:briar-dark text-white px-8 py-3 rounded-full text-lg font-medium transition">
          ${list[i].btnText2}
        </a>
      </div>
    </div>
  `;
  if (mainDiv) {
    mainDiv.appendChild(flipCardDiv);
  }
}

// 1. Preia parametrul "item" din URL
const params = new URLSearchParams(window.location.search);
var item = params.get("item"); // ex: "produs1"

if (!list[item]) {
  item = "0";
}

// Crează detaliile din pagina product.html
const productDiv = document.getElementById("product-div");
const newProductDiv = document.createElement("div");
newProductDiv.style.height = "100%";

newProductDiv.setAttribute("data-aos", "fade-up");
newProductDiv.setAttribute("data-aos-delay", `${list[item].dataAosDelay}`);

// Verifică dacă linkul este "#"
let onClickProp = "";

if (list[item].link === "#") {
  onClickProp = "return false";
} else {
  onClickProp = "";
}

const errorDiv = `
  <div class="text-3xl md:text-4xl font-bold text-center text-briar mb-16">
    <div class="product-div">                  
      <img 
        src="${list[item].image}"
        alt="Pipe 1"
        class="normalImage"
      />                      
    </div>
    <div class="center-div">          
      <a
        href="gallery.html"
        class="btn inline-block briar-brown hover:briar-dark text-white px-8 py-3 rounded-full text-lg font-medium transition"
      >
        Back to Gallery
      </a>    
    </div>
  </div>
`;

const noErrorDiv = `
  <div class="text-3xl md:text-4xl font-bold text-center text-briar mb-16">
    ${list[item].title}
  </div>
  <div class="itemDescription">
    ${list[item].fullDescription}                
  </div>

  <!-- Imagini mici pe un singur rând -->
  <div class="product-images-div flex overflow-x-auto space-x-4 mb-8">
    <img 
      src="${list[item].image}" 
      alt="Pipe 1" 
      class="small-image cursor-pointer w-1/6" />
    <img 
      src="${list[item].image1}" 
      alt="Pipe 2" 
      class="small-image cursor-pointer w-1/6" />
    <img 
      src="${list[item].image2}" 
      alt="Pipe 3" 
      class="small-image cursor-pointer w-1/6" />
    <img 
      src="${list[item].image3}" 
      alt="Pipe 4" 
      class="small-image cursor-pointer w-1/6" />
    <img 
      src="${list[item].image4}" 
      alt="Pipe 5" 
      class="small-image cursor-pointer w-1/6" />
    <img 
      src="${list[item].image5}" 
      alt="Pipe 6" 
      class="small-image cursor-pointer w-1/6" />
  </div>

  <!-- Imagine mare -->
  <div class="large-image-container mb-8">
    <img 
      id="large-image"
      src="${list[item].image}" 
      alt="Large Image"
      class="fullImage w-full"
    />
  </div>

  <!-- Butoane -->
  <div class="center-div">
    <a
      href="${list[item].link}"
      class="btn inline-block briar-brown hover:briar-dark text-white px-8 py-3 rounded-full text-lg font-medium transition"
      onclick="${onClickProp}"
    >
      ${list[item].btnText2}
    </a>
    <a
      href="gallery.html"
      class="btn inline-block briar-brown hover:briar-dark text-white px-8 py-3 rounded-full text-lg font-medium transition"
    >
      Back to Gallery
    </a>    
  </div>
`;

if (list[item] && item !== "0") {
  newProductDiv.className =
    "group relative overflow-hidden rounded-lg shadow-lg";
  newProductDiv.innerHTML = noErrorDiv;
} else {
  newProductDiv.innerHTML = errorDiv;
}

if (productDiv) {
  productDiv.appendChild(newProductDiv);
}

// Atașează evenimentul de click pentru fiecare imagine mică
const smallImages = newProductDiv.querySelectorAll(".small-image");
smallImages.forEach((img) => {
  img.addEventListener("click", function () {
    changeLargeImage(img.src); // Schimbă imaginea mare la click pe o mică
  });
});
