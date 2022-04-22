import MessageComponent from "./message.vue"

const Message = {
  count: 0,
}

Message.install = function(Vue) {
  const MessageConstructor = Vue.extend(MessageComponent)

  Vue.prototype.$message = function(options) {
    let count = document.getElementsByClassName("message").length + 1

    const instance = new MessageConstructor()

    instance.$mount(document.createElement("div"))

    document.body.appendChild(instance.$el)

    Object.keys(options).forEach((key) => {
      instance[key] = options[key]
    })
    instance.show = true
    instance.count = count
  }
}

export default Message
