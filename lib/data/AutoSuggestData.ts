export interface AutoSuggestProps {
  [k: string]: string | number
}

function getRandomString() {
  return Math.random().toString(36).substring(7)
}

const randomObjects = Array.from({ length: 100 }, () => {
  const string = getRandomString()
  return {
    value: string,
    label: string,
  }
})

export const AutoSuggestData: AutoSuggestProps[] = randomObjects
