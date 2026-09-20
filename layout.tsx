import type { Metadata } from 'next';
import { Inter, Syne } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import CustomCursor from '@/components/ui/CustomCursor';
import WhatsAppFab from '@/components/ui/WhatsAppFab';
import AnimatedGrid from '@/components/ui/AnimatedGrid';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CX BPO Financeiro | Gestão Financeira Terceirizada de Alta Performance',
  description:
    'Departamento financeiro terceirizado especializado para clínicas médicas, estética e empresas de serviços. Zere a inadimplência e tenha fluxo de caixa previsível.',
  icons: {
    icon: '/logo-cx.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${syne.variable} scroll-smooth`}>
      <body className="bg-slate-950 text-slate-100 antialiased min-h-screen flex flex-col relative selection:bg-white selection:text-slate-950">
        <CustomCursor />
        <AnimatedGrid />
        <Navbar />
        <main className="flex-1 relative z-10 pt-20">{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
