
class UniqueId {
  current = 0;
  
  nextWithout = excepts => {
    this.current++;
    while ( ! this.acceptable(excepts)) {
      this.current++;
    }
    return this.current;
  };

  acceptable = excepts => {
    return excepts.filter(e => e == this.current).length === 0;
  };

  next = () => this.current++;
}

export default new UniqueId;

