import '@styles/globals.css'
import {theme} from '@styles/theme'
import type {AppProps} from 'next/app'
import {RecoilRoot} from 'recoil'
import {ThemeProvider} from 'styled-components'

function App({Component, pageProps}: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default App
