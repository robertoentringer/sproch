const getValue = (key, vm) => {
  const value = vm.$options[key] || null
  if (value) return typeof value === 'function' ? value.call(vm) : value
}

export default {
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      const title = getValue('title', vm)
      if (title) document.title = title.concat(' — Sproch.lu')
      const description = getValue('description', vm)
      if (description)
        document.head.querySelector('[name=Description]').setAttribute('content', description)
    })
  }
}
