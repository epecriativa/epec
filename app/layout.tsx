import './globals.css';
import '@/node_modules/react-modal-video/scss/modal-video.scss';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';
import Image from 'next/image';


import Script from 'next/script';

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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PSYBP2QTYQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-PSYBP2QTYQ');
          `}
        </Script>
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <a 
          href="https://wa.me/5581991337935" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 hover:scale-110 transition-transform duration-300"
        >
          <Image 
            src="/whatsapp popup icon.svg" 
            alt="WhatsApp Contato" 
            width={60} 
            height={60} 
          />
        </a>
      </body>
    </html>
  )
}
