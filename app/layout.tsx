import './globals.css';
import '@/node_modules/react-modal-video/scss/modal-video.scss';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';


export const metadata = {
  title: 'epec - Escola Pernambucana de Economia Criativa',
  description: 'A epec é uma escola para formação de profissionais criativos e jovens empreendedores. Utilizamos o cenário cultural e histórico do nosso estado, para despertar o senso criativo dos nossos alunos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
