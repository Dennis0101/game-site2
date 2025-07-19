import '../styles/globals.css'
import { ThemeProvider } from '../components/ThemeProvider'
import DarkModeToggle from '../components/DarkModeToggle'

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <DarkModeToggle />
    </ThemeProvider>
  )
}
