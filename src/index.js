import ScrollReveal from 'scrollreveal'
import Vivus from 'vivus'

import registerServiceWorker from './registerServiceWorker'

import './styles/styles.css'

window.sr = new ScrollReveal()

window.sr.reveal('section')

if (document.querySelectorAll('#signature').length > 0) {
  const signature = new Vivus(
    'signature',
    { type: 'oneByOne', duration: 200, start: 'manual' },
    () => {
      const paths = document.querySelectorAll('#signature path')
      paths.forEach(el => {
        el.style['fill'] = '#fff'
      })
    }
  )

  setTimeout(() => {
    const svg = document.querySelector('#signature')
    svg.style['visibility'] = 'visible'
    signature.play(0)
  }, 1000)
}

registerServiceWorker()
