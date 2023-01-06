function getSanityImageDimensions(input: string) {
  const regex = /([0-9]+([x]+)[0-9]+)/i
  const result = input.match(regex)
  if (!result) return null
  const [width, height] = result[0].split('x')

  return [width, height].map(Number)
}

export function getImageDimensions(url: string, maxWidth = 1000) {
  const dimensions = getSanityImageDimensions(url)

  if (dimensions) {
    const [w, h] = dimensions as [number, number]
    const width = w > maxWidth ? maxWidth : w
    const height = w > maxWidth ? h * (maxWidth / w) : h

    return [width, height].map(Math.floor)
  }

  return null
}
