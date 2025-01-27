export default function Layout({ children }) {
    return (
      <div className="flex flex-col min-h-screen">
        <header className="py-4 bg-primary text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-xl font-bold">Bacco</h1>
          </div>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="py-4 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            © 2025 Bacco. All rights reserved.
          </div>
        </footer>
      </div>
    );
  }