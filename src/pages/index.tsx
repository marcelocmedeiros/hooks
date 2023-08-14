import { Inter } from 'next/font/google'
import Pagina from '../components/template/Pagina'
import Logo from '../components/template/Logo'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Pagina>
        <Logo grande col subtitulo="Todo o poder do React em componentes funcionais"></Logo>
      </Pagina>
  )
}
