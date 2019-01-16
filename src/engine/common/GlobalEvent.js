
class GlobalEvent {
  events = {
    "click": []
  };

  constructor() {
    const events = this.events;
    document.body.addEventListener("click", function(originalEvent) {
      events["click"].forEach(listener => {
        listener(originalEvent);
      });
    });
  }
  
  addEvent = (type, listener) => {
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
    this.events[type][this.events[type].length] = listener;
  }

}

export default new GlobalEvent();
