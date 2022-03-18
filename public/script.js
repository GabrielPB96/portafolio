let btnMenu, menu, main;
let skills = [];
let tecnologias = ["java", "python", "javascript", "css", "html"];

const mySkills = [
  {
    name: "java",
    porcentaje: 70
  },
  {
    name: "python",
    porcentaje: 40
  },
  {
    name: "javascript",
    porcentaje: 60
  },
  {
    name: "css",
    porcentaje: 60
  },
  {
    name: "html",
    porcentaje: 70
  }
];

const d = document;
const getE = id => d.getElementById(id);

function init() {
  if (window.screen.width <= 980) {
    getE('btn-volver-home').href = '#container-menu';
  }

  btnMenu = getE('btn-menu');
  menu = getE('container-nav');
  main = getE('main');

  btnMenu.addEventListener('click', () => {
    menu.classList.toggle('show');
    main.classList.toggle('desplazar');
  });

  d.querySelectorAll('.links-menu').forEach(e => {
    e.addEventListener('click', () => {
      menu.classList.toggle('show');
      main.classList.toggle('desplazar');
      let href = getHref(e);
      console.log(window);
      if (window.screen.availWidth <= 980) {
        setTimeout(() => {
          document.location.href = href;
        }, 950);
      } else document.location.href = href;
    });
  });
  readSkills();
  updateSkills();
}

const getHref = element => {
  if (element.getAttribute("data-href") === "home") {
    return "#container-home";
  }
  if (element.getAttribute("data-href") === "about") {
    return "#container-about";
  }
  if (element.getAttribute("data-href") === "skills") {
    return "#container-skills";
  }
  if (element.getAttribute("data-href") === "works") {
    return "#container-works";
  }
  if (element.getAttribute("data-href") === "contact") {
    return "#container-contact";
  }
}

const readSkills = () => {
  let i = 1;
  for (let t of tecnologias) {
    skills.push(
      {
        barra: getE(t),
        info: getE("porcentaje" + i)
      }
    );
    i++;
  }
};

const updateSkills = () => {
  for (let i = 0; i < mySkills.length; i++) {
    let current = mySkills[i];
    let barra = skills[i];
    barra.info.textContent = current.porcentaje + "%";
    barra.barra.style.width = current.porcentaje + "%";
    barra.barra.style.backgroundColor = getBackgroundColor(current.porcentaje);
  }
};

const getBackgroundColor = porcentaje => {
  if (porcentaje > 60) return "green";
  if (porcentaje > 40 && porcentaje <= 60) return "orange";
  return "red";
};



window.addEventListener('load', init);