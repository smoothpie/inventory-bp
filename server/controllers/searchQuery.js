module.exports = {
  search(query) {
    console.log('bla');
    return item => {
      for (var i in query) {
        if (query[i] != item[i]) {
          return false;
        }
      }
      return true;
    }
  }
}
