export function updateSearchParams(key: string, value: string) {
  const params = new URLSearchParams(window.location.search);
  params.set(key, value);

  const newUrl = `?${params
    .toString()
    .split('&')
    .filter((search) => search[search.length - 1] !== '=')
    .join('&')}`;
  window.history.replaceState({}, '', newUrl);
}

export function readSearchParams(key: string) {
  const params = new URLSearchParams(window.location.search);

  return params.get(key);
}
