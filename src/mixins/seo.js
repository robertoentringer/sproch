const getValue = (key, vm) => {
  const value = vm.$options[key] || null
  if (value) return typeof value === "function" ? value.call(vm) : value
}

export default {
  created() {
    const title = getValue("title", this)
    if (title) document.title = title
    const description = getValue("description", this)
    if (description) document.head.querySelector("[name=Description]").setAttribute("content", description)
  }
}
