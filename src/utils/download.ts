const download = (url: string, filename: string) => {
  const link = document.createElement('a');
  link.href = url;
  link.target = '_self';
  link.download = filename;
  link.click();

  link.remove()
}

export {
  download
}