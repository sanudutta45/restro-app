export function debounce(cb, delay) {
  let timeout;
  return function () {
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => cb(...args), delay);
  };
}
