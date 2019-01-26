
class GlobalConfig {
  
  configurations = {}
  
  loadConfig = () => {
    this.configurations = window.TPUR.config;
  }

  get = key => {
    return this.configurations[key];
  }
}

const GC = new GlobalConfig
GC.loadConfig()

export default GC

