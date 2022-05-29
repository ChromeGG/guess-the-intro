import { Categories, movieSounds, Sound } from './data/sounds'
// import seedrandom from 'seedrandom'

export function shuffleArray(array: Sound[]) {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}

export function getAnswers(category: Categories) {
  if (category === 'MovieIntros') {
    return movieSounds
  }

  throw new Error('Unknown category')
}
