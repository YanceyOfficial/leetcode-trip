function registerGitalk() {
  const gitalkDOMId = `gitalk-wrapper_${Math.random().toString(32)}`
  const prevnextDOM = document.querySelector('.theme-doc-footer')
  const gitalkDOMStr = `<section id=${gitalkDOMId}></section>`
  prevnextDOM.insertAdjacentHTML('beforebegin', gitalkDOMStr)

  const gitalk = new Gitalk({
    clientID: 'bf6ed307b237a1074dce',
    clientSecret: '23c1d1aa082bce400eb9fb493baf118635c718a4',
    repo: 'leetcode-trip',
    owner: 'YanceyOfficial',
    admin: ['YanceyOfficial'],
    id: location.pathname,
    distractionFreeMode: false,
  })

  gitalk.render(gitalkDOMId)
}

function registerHistoryEvent() {
  const _wr = function (type) {
    const orig = history[type]
    return function () {
      const rv = orig.apply(this, arguments)
      const e = new Event(type)
      e.arguments = arguments
      window.dispatchEvent(e)
      return rv
    }
  }
  history.pushState = _wr('pushState')
  history.replaceState = _wr('replaceState')
}

registerHistoryEvent()

window.addEventListener('load', function () {
  registerGitalk()
})

window.addEventListener('pushState', function () {
  location.reload()
  registerGitalk()
})
