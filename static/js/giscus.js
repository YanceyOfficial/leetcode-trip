function registerGiscus() {
  const metaDOM = '<meta http-equiv="Permissions-Policy" content="interest-cohort=()">'
  const headDOM = document.querySelector('head')
  headDOM.insertAdjacentHTML('beforeend', metaDOM)

  const giscusDOM = '<div class="giscus"></div>'
  const prevnextDOM = document.querySelector('.theme-doc-footer')
  prevnextDOM.insertAdjacentHTML('beforebegin', giscusDOM)
}

// function registerHistoryEvent() {
//   const _wr = function (type) {
//     const orig = history[type]
//     return function () {
//       const rv = orig.apply(this, arguments)
//       const e = new Event(type)
//       e.arguments = arguments
//       window.dispatchEvent(e)
//       return rv
//     }
//   }
//   history.pushState = _wr('pushState')
//   history.replaceState = _wr('replaceState')
// }

// registerHistoryEvent()

window.addEventListener('load', function () {
  registerGiscus()
})

// window.addEventListener('pushState', function () {
//   location.reload()
//   registerGiscus()
// })
