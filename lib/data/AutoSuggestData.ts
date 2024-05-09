export interface AutoSuggestProps {
  [k: string]: string | number | JSX.Element
}

function getRandomString() {
  return Math.random().toString(36).substring(7)
}

const randomObjects = Array.from({ length: 100 }, () => ({
  value: getRandomString(),
  label: getRandomString(),
}))

export const AutoSuggestData: AutoSuggestProps[] = randomObjects
