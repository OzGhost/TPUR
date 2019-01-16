
class IncreasementIndexer {

  index = 0;
  
  next = () => {
    return ++this.index;
  }
}

export default new IncreasementIndexer();
