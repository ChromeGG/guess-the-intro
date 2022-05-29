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
    url: 'THX.mp3',
    image: 'THX.jpg',
  },
  {
    name: 'Warner Bros',
    category: 'MovieIntros',
    url: 'Warner-Bros.mp3',
    image: 'Warner-Bros.jpg',
  },
  {
    name: 'Disney',
    category: 'MovieIntros',
    url: 'Disney.mp3',
    image: 'Disney.jpg',
  },
  {
    name: 'Paramount',
    category: 'MovieIntros',
    url: 'Paramount.mp3',
    image: 'Paramount.jpg',
  },
  {
    name: 'Pixar',
    category: 'MovieIntros',
    url: 'Pixar.mp3',
    image: 'Pixar.jpg',
  },
  {
    name: 'Metro Goldwyn Mayer',
    category: 'MovieIntros',
    url: 'Metro-Goldwyn-Mayer.mp3',
    image: 'Metro-Goldwyn-Mayer.jpg',
  },
  {
    name: 'Dreamworks',
    category: 'MovieIntros',
    url: 'Dreamworks.mp3',
    image: 'Dreamworks.jpg',
  },
  {
    name: 'Sony Pictures',
    category: 'MovieIntros',
    url: 'Sony-Pictures.mp3',
    image: 'Sony-Pictures.jpg',
  },
  {
    name: 'The Weinstein Company',
    category: 'MovieIntros',
    url: 'The-Weinstein-Company.mp3',
    image: 'The-Weinstein-Company.jpg',
  },
]

export const allSounds = [...movieSounds]
