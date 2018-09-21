
class StaticStore {
  store = {}

  getStore = () => this.store

  initStore = data => {
    if ("object" === typeof(data))
      this.store = data
    else
      throw new Error('Only accept object or array as input!')
  }

}

export default new StaticStore
