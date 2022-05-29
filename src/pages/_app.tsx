import type { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react'
import { theme } from '../theme/main'
import { AudioPlayerProvider } from 'react-use-audio-player'
// import { CssBaseline } from '@mui/material'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <AudioPlayerProvider>
        {/* <CssBaseline /> */}
        <Component {...pageProps} />
      </AudioPlayerProvider>
    </ThemeProvider>
  )
}

export default MyApp
