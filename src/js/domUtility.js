export const setVisibilidad = (item, visible) => {
  if (visible) {
    item.classList.remove('invisible');
    item.classList.add('visible');
  }
  else {
    item.classList.remove('visible');
    item.classList.add('invisible');
  }
}