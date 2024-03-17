import { html } from "htm/preact"
import { render } from "htm/preact"

const Koala = () => {
  // secret settings that nobody can access
  const settings = {
    root: document.body,
    data: {},
    html: data => html`<h1>Hello Koala</h1>`
  }
  
  // methods to return to app object
  const template = func => settings.html = func
  const update = func => {
    settings.data = {...structuredClone(settings.data),...func(settings.data)}
    render(settings.html(settings.data),settings.root)
  }
  
  return {
    render: () => render(settings.html(settings.data),document.body),
    template,
    update
  }
}

export { Koala, html }