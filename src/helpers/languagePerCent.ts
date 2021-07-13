const total = (obj: any): number => {
  const values: number[] = Object.values(obj)

  return values.reduce((a, b) => a + b, 0)
}

export const languagePerCent = (obj: any) => {
  const objKeys = Object.keys(obj)

  return objKeys.map((language: any) => {
    const percentage = Math.round((obj[language] / total(obj)) * 100)

    return { language, percentage }
  })
}
