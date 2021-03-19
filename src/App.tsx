import { Dashboard } from './components/Dashboard'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

export function App() {
  return (
    <>
        <Header />
        <Dashboard />
        <Footer />
        <GlobalStyle />
    </>
  );
}
