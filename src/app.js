import { Koala, html } from "./koala.js"
import { projects } from "./projects.js"
import { books } from "./books.js"
import { skills,achievements } from "./skills.js"


const app = Koala()
// event handlers


// components
const Header = props => html`
<header>
  <h1 class="text-center white-text italic brand padding">Hey! <span class="hand">👋</span> I'm <b class=${`${Math.random() < 0.25 ? "neonBlue" : Math.random() < 0.33 ? "neonPink" : Math.random() < 0.5 ? "neonGreen" : "neonYellow"}-text glow`}>Daz</b></h1>
  <div class="align-center"><h2 class="display-2 margin-center gradient-text padding">Full stack developer who 💜s JavaScript</h2></div>

  <nav class="nav align-center">
  <a class="neonPink button" href="https://www.github.com/daz4126/"><i class="fa-brands fa-github"></i> GitHub</button>
  <a class="neonBlue button" href="https://www.linkedin.com/in/daz4126/"><i class="fa-brands fa-linkedin"></i> LinkedIn</button>
  </nav>
  <p class="padding text-center bold italic">I'm currently available for work. Get in touch if you see something you like!</p>
</header>`

const Gallery = props => html`
<main id="gallery">
  <div class="align-center"><h2 class="display-3 gradient-text padding-horizontal no-margin">Here's some of my work ...</h2></div>
  <ul class="no-bullet grid">
    ${projects.map(project => html`<${Project} ...${project}/>`)}
  </ul>
</main>`

const Books = props => html`
<main id="books">
  <div class="align-center"><h2 class="display-3 gradient-text padding-horizontal no-margin">I've also written some books ...</h2></div>
  <ul class="no-bullet three column grid">
    ${books.map(book => html`<${Book} ...${book}/>`)}
  </ul>
</main>`

const Skills = props => html`
<main id="skills">
  <div class="align-center"><h2 class="display-3 gradient-text padding-horizontal no-margin">My Skillset ...</h2></div>
  <ul class="skills">
    ${skills.map(skill => html`<li>${skill}</li>`)}
  </ul>
  <div class="align-center"><h2 class="display-3 gradient-text padding-horizontal no-margin">Some of my achievements ...</h2></div>
  <ul class="skills">
    ${achievements.map(skill => html`<li>${skill}</li>`)}
  </ul>
</main>`

const Project = props => html`
  <li class="card">
    <header><h3 class="h2 no-margin text-center glow lightPink-text text-uppercase">${props.title}</h3></header>
    <main>
      <img src="${props.image}" class="drop-shadow"/>
      <p>${props.description}</p>
      <p>${props.technology.map(tech => html`<span class="tag">${tech}</span>`)}</p>
    </main>
    <footer>
      <a href="${props.link}"><i class="fa-brands fa-github"></i> View code on GitHub</a>
    </footer>
  </li>
`
  const Book = props => html`
  <li class="card">
    <header><h3 class="h2 no-margin text-center glow lightPink-text text-uppercase">${props.title}</h3></header>
    <main>
      <img src="${props.image}" class="drop-shadow"/>
      <p>${props.description}</p>
      <p>${props.tags.map(tag => html`<span class="tag">${tag}</span>`)}</p>
    </main>
    <footer>
      <a href="${props.link}">See on Amazon <i class="fa-brands fa-amazon"></i></a>
    </footer>
  </li>
`

const Footer = props => html`
<footer class="text-center">
<small>This website was made with 💜 by DAZ</small>
</footer>
`

// main template
app.template(data => html`
<${Header} />
<${Skills} />
<${Gallery} />
<${Books} />
<${Footer} />
`)
// initial render
app.render()