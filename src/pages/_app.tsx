import type { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react'
import { theme } from '../theme/main'
import { AudioPlayerProvider } from 'react-use-audio-player'
import { GlobalStyles } from '@mui/material'
// import { CssBaseline } from '@mui/material'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <AudioPlayerProvider>
        {/* <CssBaseline /> */}
        <GlobalStyles styles={{ body: { bgcolor: '#eee' } }} />
        <Component {...pageProps} />
      </AudioPlayerProvider>
    </ThemeProvider>
  )
}

export default MyApp
