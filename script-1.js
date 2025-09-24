const mainDiv = document.getElementById("gallery-div");
// const numberOfDivs = document.getElementsByClassName("flip-card").length;

const list = [];

const pipe1 = {
  image: "Gallery/LO.jpg",
  title: "Acartar 1.01",
  textEn: `Smooth finish, cool smoke`,
  link: "https://etsy.com",
  btnTextEn: "Buy Now",
  dataAosDelay: "0",
};

const pipe2 = {
  image: "Gallery/P1_1.jpg",
  title: "Sailor Craft",
  textEn: `Rough finish, great look`,
  link: "#",
  btnTextEn: "SOLD",
  dataAosDelay: "200",
};

const pipe3 = {
  image: "Gallery/P2_1.jpg",
  title: "Bulldog",
  textEn: `Rough finish, bold impression`,
  link: "https://etsy.com",
  btnTextEn: "Buy Now",
  dataAosDelay: "300",
};

const pipe4 = {
  image: "Gallery/P3_1.jpg",
  title: "Popeye",
  textEn: `A carmui peste om este arta artelor, sau ceva de genul...`,
  link: "#",
  btnTextEn: "SOLD",
  dataAosDelay: "0",
};

const pipe5 = {
  image: "Gallery/p5.jpg",
  title: "(Numele pipei)",
  textEn: `A carmui peste om este arta artelor, sau ceva de genul...`,
  link: "#",
  btnTextEn: "SOLD",
  dataAosDelay: "200",
};

const pipe6 = {
  image: "Gallery/p6.jpg",
  title: "(Numele pipei)",
  textEn: `A carmui peste om este arta artelor, sau ceva de genul...`,
  link: "#",
  btnTextEn: "SOLD",
  dataAosDelay: "300",
};

const pipe7 = {
  image: "Gallery/p7.jpg",
  title: "(Numele pipei)",
  textEn: `A carmui peste om este arta artelor, sau ceva de genul...`,
  link: "https://etsy.com",
  btnTextEn: "Buy Now",
  dataAosDelay: "0",
};

const pipe8 = {
  image: "Gallery/p8.jpg",
  title: "(Numele pipei)",
  textEn: `A carmui peste om este arta artelor, sau ceva de genul...`,
  link: "https://etst.com",
  btnTextEn: "Buy Now",
  dataAosDelay: "200",
};

const pipe9 = {
  image: "Gallery/p9.jpg",
  title: "(Numele pipei)",
  textEn: `A carmui peste om este arta artelor, sau ceva de genul...`,
  link: "#",
  btnTextEn: "SOLD",
  dataAosDelay: "300",
};

const pipe10 = {
  image: "Gallery/p10.jpg",
  title: "(Numele pipei)",
  textEn: `A carmui peste om este arta artelor, sau ceva de genul...`,
  link: "#",
  btnTextEn: "SOLD",
  dataAosDelay: "0",
};

const pipe11 = {
  image: "Gallery/p11.jpg",
  title: "(Numele pipei)",
  textEn: `A carmui peste om este arta artelor, sau ceva de genul...`,
  link: "#",
  btnTextEn: "SOLD",
  dataAosDelay: "200",
};

const pipe12 = {
  image: "Gallery/p12.jpg",
  title: "(Numele pipei)",
  textEn: `A carmui peste om este arta artelor, sau ceva de genul...`,
  link: "#",
  btnTextEn: "SOLD",
  dataAosDelay: "300",
};

list.push(pipe1);
list.push(pipe2);
list.push(pipe3);
list.push(pipe4);
list.push(pipe5);
list.push(pipe6);
list.push(pipe7);
list.push(pipe8);
list.push(pipe9);
list.push(pipe10);
list.push(pipe11);
list.push(pipe12);

let tempHTML = "";
//create the cards:
for (let i = 0; i < list.length; i++) {
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
                <p class="text-amber-200">${list[i].textEn}</p>
                
                    <a href="${list[i].link}" class="btn inline-block briar-light hover:briar-dark text-white px-8 py-3 rounded-full text-lg font-medium transition">
                   ${list[i].btnTextEn}</a>
                
              </div>
            </div>
         
  `;

  mainDiv.appendChild(flipCardDiv);
}

// flip the cards:
let flipDivs = [];
for (let i = 0; i < list.length + 1; i++) {
  flipDivs[i] = document.getElementById(`flipDiv${i}`);
  flipDivs[i].addEventListener("click", function () {
    flipDivs[i].classList.toggle("flipped");
  });
}

const today = new Date();
const currentYear = today.getFullYear();

const copyright = document.getElementById("copyright");
copyright.innerHTML = `Copyright ${currentYear} &copy; Andrei Bogdan Georgescu`;
