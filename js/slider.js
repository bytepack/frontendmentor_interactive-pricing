for (let e of document.querySelectorAll('.slider')) {
    e.style.setProperty('--value', e.value);
    e.style.setProperty('--min', e.min == '' ? '0' : e.min);
    e.style.setProperty('--max', e.max == '' ? '100' : e.max);
    e.addEventListener('input', () => {
      e.style.setProperty('--value', e.value)
      e.style.setProperty("--fill-lower", e.value == e.max ? "#10d5c2" : "#a5f3eb")
    });
  }