export type Categories =
  | 'Games'
  | 'OperatingSystems'
  | 'Communicators'
  | 'MovieIntros'

export interface Sound {
  name: string
  category: Categories
  url: string
  image: string
}

// source: https://www.youtube.com/watch?v=OlMKPpy0Z-I
export const movieSounds: Sound[] = [
  {
    name: '20th Century Fox',
    category: 'MovieIntros',
    url: '20th-Century-Fox.mp3',
    image: '20th-Century-Fox.jpg',
  },
  {
    name: 'Colombia',
    category: 'MovieIntros',
    url: 'Columbia.mp3',
    image: 'Columbia.jpg',
  },
  {
    name: 'Universal',
    category: 'MovieIntros',
    url: 'Universal.mp3',
    image: 'Universal.jpg',
  },
  {
    name: 'THX',
    category: 'MovieIntros',
    url: '',
    image: '',
  },
  {
    name: 'Warner Bros',
    category: 'MovieIntros',
    url: '',
    image: '',
  },
  {
    name: 'Disney',
    category: 'MovieIntros',
    url: '',
    image: '',
  },
  {
    name: 'Paramount',
    category: 'MovieIntros',
    url: '',
    image: '',
  },
  {
    name: 'Pixar',
    category: 'MovieIntros',
    url: '',
    image: '',
  },
  {
    name: 'Metro Goldwyn Mayer',
    category: 'MovieIntros',
    url: '',
    image: '',
  },
  {
    name: 'Dreamworks',
    category: 'MovieIntros',
    url: '',
    image: '',
  },
]

export const allSounds = [movieSounds[0], movieSounds[1], movieSounds[2]]

// ^ 10
// {
//   name: 'Skype Ringtone',
//   category: Categories.Communicators,
//   url: '',
//   image: '',
// },
// {
//   name: 'Gadu-Gadu', // https://www.youtube.com/watch?v=VSnzPU7b5-0
//   category: Categories.Communicators,
//   url: '',
//   image: '',
// },
// ]
