function LoadingComponent({ imageUrl }) {
  const Loading = document.createElement('img');
  Loading.classList.add('loading');
  Loading.setAttribute('src', imageUrl);
  return Loading;
}

export default LoadingComponent;
