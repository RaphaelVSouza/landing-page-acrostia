function fakeResponse() {
  return new Promise(function (resolve, reject) {
    setInterval(function () {
      resolve();
    }, 1000 * 2.5);
  });
}

export default fakeResponse;
