import Cite from 'citation-js'
import '@citation-js/plugin-bibtex'

export async function getBib() {
  const baseURL = new URL('..', import.meta.url).href
  const response = await fetch(`${baseURL}/vue-app/data/refs.bib`)
  const bibtexContent = await response.text()

  const cite = new Cite(bibtexContent)
  const formatted = cite.format('bibliography', {
    template: 'ieee', // Or 'vancouver', 'ieee', etc.
    lang: 'en-US',
  })
  return formatted
    .split('\n')
    .filter(Boolean)
    .map((entry) => `${entry}`)
}
