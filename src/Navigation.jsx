import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isInGallery, setIsInGallery] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const gallerySection = document.getElementById('gallery');
      if (gallerySection) {
        const rect = gallerySection.getBoundingClientRect();
        // Apparaît quand on atteint la section gallery et reste visible après
        const shouldShow = rect.top <= 0;
        setIsInGallery(shouldShow);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false); // Ferme le menu après le clic sur mobile
    }
  };

  const navItems = [
    { id: 'hero', label: 'Accueil' },
    { id: 'gallery', label: 'Galerie' },
    { id: 'philosophy', label: 'Philosophie' },
    { id: 'about', label: 'À Propos' },
    { id: 'exhibitions', label: 'Expositions' },
    { id: 'atelier', label: 'Atelier' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Navigation Desktop - Horizontale centrée sticky */}
      <nav className={`hidden lg:block fixed top-8 left-1/2 -translate-x-1/2 z-50 transition-opacity duration-500 ${isInGallery ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <ul className="flex gap-6 backdrop-blur-md bg-white/30 dark:bg-gray-800/30 rounded-full px-6 py-3 shadow-lg">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="text-sm text-gray-700 dark:text-gray-300 hover:text-text-primary dark:hover:text-text-primary-dark transition-colors whitespace-nowrap"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Navigation Mobile - Menu Burger */}
      <div className="lg:hidden fixed top-8 right-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 rounded-full p-3 shadow-lg"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-text-primary dark:text-text-primary-dark"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Dropdown Menu Mobile */}
        {isOpen && (
          <div className="absolute top-16 right-0 backdrop-blur-md bg-white/30 dark:bg-gray-800/30 rounded-lg shadow-lg overflow-hidden">
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left px-6 py-3 text-sm text-gray-700 dark:text-gray-300 hover:text-text-primary dark:hover:text-text-primary-dark hover:bg-white/20 dark:hover:bg-gray-700/20 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
