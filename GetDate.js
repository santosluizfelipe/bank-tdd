class GetDate{
  getCurrentDate() {
    const today = new Date();
    const date = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    return `${date < 10 ? "0" + date : date}/${month < 10 ? "0" + month : month}/${year}`;
  }
}

module.exports = GetDate