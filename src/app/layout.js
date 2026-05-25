import './globals.css'; // Assume this file holds standard Tailwind configuration imports

export const metadata = {
  title: 'Portfolio | Intelligent Systems & Robotics',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0F0F11] text-gray-200 antialiased font-sans min-h-screen flex flex-col justify-between">
        
        {/* Micro-carbon gradient backdrop style emulation */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-50 mix-blend-overlay bg-[linear-gradient(0deg,transparent_24%,#fff_25%,#fff_26%,transparent_27%,transparent_74%,#fff_75%,#fff_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,#fff_25%,#fff_26%,transparent_27%,transparent_74%,#fff_75%,#fff_76%,transparent_77%,transparent)] bg-[size:24px_24px]" />

        {/* Header / Navigation */}
        <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#0F0F11]/80 border-b border-[#1F2026]">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <a href="/#" className="font-mono text-lg font-bold tracking-wider text-white">
              <span className="text-[#104E8B]">&lt;</span>Ing. Michal Chovanec, PhD.<span className="text-[#104E8B]"> /&gt;</span>
            </a>
            <nav className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
              <a href="/#about" className="hover:text-[#104E8B] transition-colors">About</a>
              <a href="/#projects" className="hover:text-[#104E8B] transition-colors">Projects</a>
              <a href="/#publications" className="hover:text-[#104E8B] transition-colors">Publications</a>
              <a href="/#photography" className="hover:text-[#104E8B] transition-colors">Photography</a>
              <a href="/#contact" className="hover:text-[#104E8B] transition-colors">Contact</a>
            </nav>
          </div>
        </header>

        {/* Dynamic content rendering injection area */}
        <main className="max-w-5xl w-full mx-auto px-4 py-12 flex-grow">
          {children}
        </main>
      
        {/* Sticky/Constant Footer */}
        <footer className="w-full py-8 text-center text-xs text-gray-600 border-t border-[#1F2026]/40">
          &copy; 2026 Ing. Michal Chovanec, PhD. Built with Next.js & Tailwind. Seamlessly deployed via Vercel.
        </footer>

      </body>
    </html>
  );
}