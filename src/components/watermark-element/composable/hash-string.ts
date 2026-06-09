const hashString = (value: string) => {
  let hash = 0

  for (let index = 0; index < value.length; index++) {
    hash = ((hash << 5) - hash) + value.charCodeAt(index)
    hash |= 0
  }

  return Math.abs(hash)
}

export {
  hashString
}
