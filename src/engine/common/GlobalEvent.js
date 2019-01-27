
class GlobalEvent {
  events = {
    "click": {}
  };

  constructor() {
    const storedEvents = this.events;
    document.body.addEventListener("click", function(originalEvent) {
      Object.values(storedEvents["click"]).forEach(listener => {
        listener && listener(originalEvent);
      });
    });
  }
  
  addEvent = (type, key, listener) => {
    if (typeof(type) !== "string") {
      console.warn("Event type must be a string! but got: " + typeof(type));
      return;
    }
    if (typeof(listener) !== "function") {
      console.log("Listener must be a function! but got: " + typeof(listener));
      return;
    }
    if (type !== "click") {
      console.log("Event type [" + type + "] do not supported yet!");
    }
    var keyAsString = ''+key;
    if (keyAsString === '') {
      console.log("Listener key must not be blank");
      return;
    }
    this.events[type][keyAsString] = listener;
  };

  removeEvent = (type, key) => {
    var keyAsString = ''+key;
    if (this.events[type]) {
      this.events[type][keyAsString] = undefined;
    }
  };

}

export default new GlobalEvent();
