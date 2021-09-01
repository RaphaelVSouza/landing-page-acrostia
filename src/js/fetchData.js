function fetchData() {
  return fetch('../../info/home.json')
    .then((response) => response.json())
    .then((data) => data)
    .catch(() => {
      alert('An error occurred on page loading, click to refresh the page.');
      Location.reload();
    });
}

export default fetchData;
