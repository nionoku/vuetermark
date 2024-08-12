const setTitle = (title: string, after = '— watermark editor') => {
  document.title = title + ' ' + after;
}

export {
  setTitle
}