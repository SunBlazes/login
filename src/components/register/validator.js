class Validator {
  caches = []
  setValidate(dom, patterns) {
    patterns.forEach((pattern) => {
      let { rule, trigger, callback } = pattern
      trigger = trigger.startsWith("on") ? trigger.slice(2) : trigger
      const verify = function() {
        callback(rule.test(dom.value))
        return rule.test(dom.value)
      }
      this.caches.push(verify)
      dom.addEventListener(trigger, verify)
    })
  }
  verifyAll() {
    let flag = true
    this.caches.forEach((cache) => {
      let res = cache()
      if (flag) {
        flag = res
      }
    })
    return flag
  }
}

export default Validator
