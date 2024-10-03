import "./styles.css";

// Menu data structure (as provided)
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  // ... (other menu items)
  var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
];

// Part 1 and 2 (as provided)
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");

const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

// Part 3: Adding Menu Buttons (modified)
menuLinks.forEach((link) => {
  const linkEl = document.createElement("a");
  linkEl.href = link.href;
  linkEl.textContent = link.text;
  if (link.subLinks) {
    linkEl.classList.add("has-submenu");
  }
  topMenuEl.appendChild(linkEl);
});

// Part 4: Adding the sub-menu
const subMenuEl = document.querySelector("#sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

let currentSubLinks = [];
let showingSubMenu = false;

topMenuEl.addEventListener("click", function(evt) {
  evt.preventDefault();
  const link = evt.target;
  if (link.tagName !== "A") return;
  
  if (link.classList.contains("active")) {
    link.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    return;
  }
  
  topMenuEl.querySelectorAll("a").forEach(a => a.classList.remove("active"));
  link.classList.add("active");
  
  const linkData = menuLinks.find(item => item.text === link.textContent);
  showingSubMenu = linkData && linkData.subLinks;
  
  if (showingSubMenu) {
    buildSubMenu(linkData.subLinks);
    subMenuEl.style.top = "100%";
  } else {
    subMenuEl.style.top = "0";
  }
});

function buildSubMenu(subLinks) {
  subMenuEl.innerHTML = "";
  currentSubLinks = subLinks;
  subLinks.forEach(link => {
    const linkEl = document.createElement("a");
    linkEl.href = link.href;
    linkEl.textContent = link.text;
    subMenuEl.appendChild(linkEl);
  });
}

subMenuEl.addEventListener("click", function(evt) {
  evt.preventDefault();
  const link = evt.target;
  if (link.tagName !== "A") return;
  
  showingSubMenu = false;
  subMenuEl.style.top = "0";
  
  topMenuEl.querySelectorAll("a").forEach(a => a.classList.remove("active"));
  
  mainEl.innerHTML = `<h1>${link.textContent}</h1>`;
});