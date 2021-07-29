export function debounce(func, wait, option = {leading: false, trailing: true}) {

  let timerId = null;
  let lastArgs = null;

  if(!option.leading && !option.trailing) return () => null;

  return function(...args) {

    if(!timerId && option.leading) {
      func.apply(this, args);
    } else {
      lastArgs = args;
    }

    clearTimeout(timerId);

    timerId = setTimeout(() => {

      if(option.trailing && lastArgs) func.apply(this, lastArgs);

      lastArgs = null;
      timerId = null;
    }, wait);
  }
}

