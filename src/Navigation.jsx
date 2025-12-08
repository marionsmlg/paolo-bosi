export default function Navigation() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
    <nav className="fixed top-8 right-8 z-50 hidden md:block">
      <ul className="flex flex-col gap-3 backdrop-blur-md bg-white/30 dark:bg-gray-800/30 rounded-lg p-4 shadow-lg">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className="text-sm text-text-secondary dark:text-text-secondary-dark hover:text-text-primary dark:hover:text-text-primary-dark transition-colors"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
