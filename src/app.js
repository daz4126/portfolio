import { Koala, html } from "./koala.js"
import { projects } from "./projects.js"

const app = Koala()
// event handlers


// components
const Header = props => html`
<header>
  <h1 class="text-center lightGrey-text italic brand">Hey! 👋 I'm <b class="neonPink-text glow">Daz</b></h1>
  <h2 class="display-2 text-center gradient-text padding">I make stuff for the web ...</h2>

  <nav class="nav align-center">
  <button class="neonBlue"><i class="fa-brands fa-github"></i> GitHub</button>
  <button class="neonBlue"><i class="fa-brands fa-linkedin"></i> LinkedIn</button>
  </nav>
  <p class="padding text-center bold italic">I'm currently available for work. Get in touch if you see something you like!</p>
</header>`

const Gallery = props => html`
<main id="gallery">
  <h2 class="display-3 gradient-text padding">Here's  some stuff I've made ...</h2>
  <ul class="no-bullet grid">
    ${projects.map(project => html`<${Project} ...${project}/>`)}
  </ul>
</main>`

const Project = props => html`
  <li class="card">
    <header><h3 class="text-center lightGrey-text">${props.title}</h3></header>
    <main>
      <img src="${props.image}" class=""/>
      <p>${props.description}</p>
      <p>${props.technology.map(tech => html`<span class="tag">${tech}</span>`)}</p>
    </main>
    <footer>
      <a href="${props.link}">View Code</a>
    </footer>
  </li>
`

const Footer = props => html`
<footer>
</footer>
`

// main template
app.template(data => html`
<${Header} />
<${Gallery} />
<${Footer} />
`)

// initialise the data
app.update(data => ({
  
}))

// initial render
app.render()