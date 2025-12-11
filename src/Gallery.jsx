import { useState, useRef } from 'react';

const sculptures = [
  {
    id: 1,
    title: "Buste Dotage I",
    category: "bustes",
    image: "/images/gallery/Buste_Dotage_1.webp",
    alt: "Buste en sculpture"
  },
  {
    id: 2,
    title: "Graine d'Érable I",
    category: "graines",
    image: "/images/gallery/Graine_Derable_1.webp",
    alt: "Graine d'érable sculptée"
  },
  {
    id: 3,
    title: "Graine d'Érable II",
    category: "graines",
    image: "/images/gallery/Graine_Derable_2.webp",
    alt: "Graine d'érable sculptée"
  },
  {
    id: 4,
    title: "Paysage Graine",
    category: "graines",
    image: "/images/gallery/Paysage_Graine.webp",
    alt: "Paysage avec graine"
  },
  {
    id: 5,
    title: "Aile",
    category: "ailes",
    image: "/images/gallery/Aile.webp",
    alt: "Aile sculptée"
  },
  {
    id: 6,
    title: "Plaques I",
    category: "plaques",
    image: "/images/gallery/Plaques_1.webp",
    alt: "Plaques murales"
  },
  {
    id: 7,
    title: "Plaques II",
    category: "plaques",
    image: "/images/gallery/Plaques_2.webp",
    alt: "Plaques murales"
  },
  {
    id: 8,
    title: "Plaques III",
    category: "plaques",
    image: "/images/gallery/Plaques_3.webp",
    alt: "Plaques murales"
  },
  {
    id: 9,
    title: "Plaques Terre Cuite I",
    category: "plaques",
    image: "/images/gallery/Plaques_Terre_Cuite_1.webp",
    alt: "Plaques en terre cuite"
  },
  {
    id: 10,
    title: "Plaques Terre Cuite II",
    category: "plaques",
    image: "/images/gallery/Plaques_Terre_Cuite_2.webp",
    alt: "Plaques en terre cuite"
  },
  {
    id: 11,
    title: "Plaques Terre Cuite III",
    category: "plaques",
    image: "/images/gallery/Plaques_Terre_Cuite_3.webp",
    alt: "Plaques en terre cuite"
  },
  {
    id: 12,
    title: "Plaques Terre Cuite et Bois I",
    category: "plaques",
    image: "/images/gallery/Plaques_Terres_Cuite_Et_Bois_1.webp",
    alt: "Plaques en terre cuite et bois"
  },
  {
    id: 13,
    title: "Plaques Terre Cuite et Bois II",
    category: "plaques",
    image: "/images/gallery/Plaques_Terres_Cuite_Et_Bois_2.webp",
    alt: "Plaques en terre cuite et bois"
  },
  {
    id: 14,
    title: "Plaques Terres Cuites IV",
    category: "plaques",
    image: "/images/gallery/Plaques_Terres_Cuites_4.webp",
    alt: "Plaques en terre cuite"
  },
  {
    id: 15,
    title: "Plaques Terres Cuites V",
    category: "plaques",
    image: "/images/gallery/Plaques_Terres_Cuites_5.webp",
    alt: "Plaques en terre cuite"
  },
  {
    id: 16,
    title: "Totem 2023",
    category: "totems",
    image: "/images/gallery/Totem_2023.webp",
    alt: "Totem 2023"
  },
  {
    id: 17,
    title: "Totem 2024",
    category: "totems",
    image: "/images/gallery/Totem_2024.webp",
    alt: "Totem 2024"
  },
  {
    id: 18,
    title: "Totem 2025",
    category: "totems",
    image: "/images/gallery/Totem_2025.webp",
    alt: "Totem 2025"
  },
  {
    id: 19,
    title: "Gongshi",
    category: "paysages",
    image: "/images/gallery/Gongshi.webp",
    alt: "Gongshi"
  },
  {
    id: 20,
    title: "Matrice Paysage",
    category: "paysages",
    image: "/images/gallery/Matrice_Paysage.webp",
    alt: "Matrice paysage"
  },
  {
    id: 21,
    title: "Sculpture Paysage Pierre de Lettré I",
    category: "paysages",
    image: "/images/gallery/Sculpture_Paysage_Pierre_de_Lettre_1.webp",
    alt: "Sculpture paysage en pierre de lettré"
  },
  {
    id: 22,
    title: "Sculpture Paysage Pierre de Lettré II",
    category: "paysages",
    image: "/images/gallery/Sculpture_Paysage_Pierre_de_Lettre_2.webp",
    alt: "Sculpture paysage en pierre de lettré"
  },
  {
    id: 23,
    title: "Sculptures Longues",
    category: "autres",
    image: "/images/gallery/Sculptures_Longues.webp",
    alt: "Sculptures longues"
  },
  {
    id: 24,
    title: "Buste Dotage II",
    category: "bustes",
    image: "/images/gallery/Buste_Dotage_2.webp",
    alt: "Buste en sculpture"
  }
];

const categories = [
  { id: "tous", label: "Tous" },
  { id: "bustes", label: "Bustes" },
  { id: "graines", label: "Graines" },
  { id: "ailes", label: "Ailes" },
  { id: "plaques", label: "Plaques" },
  { id: "totems", label: "Totems" },
  { id: "paysages", label: "Paysages" },
  { id: "autres", label: "Autres" }
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("tous");
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  const filteredSculptures = selectedCategory === "tous"
    ? sculptures
    : sculptures.filter(sculpture => sculpture.category === selectedCategory);

  const scroll = (direction) => {
    const scrollAmount = 220;
    const scrollValue = direction === 'left' ? -scrollAmount : scrollAmount;

    if (row1Ref.current) {
      row1Ref.current.scrollBy({
        left: scrollValue,
        behavior: 'smooth'
      });
    }
    if (row2Ref.current) {
      row2Ref.current.scrollBy({
        left: scrollValue,
        behavior: 'smooth'
      });
    }
  };

  // Détermine si on affiche sur deux lignes (seulement si "tous" ou plus de 3 images)
  const shouldSplitRows = selectedCategory === "tous" || filteredSculptures.length > 3;
  // Active l'animation automatique si "tous" ou plus de 8 images
  const shouldAutoScroll = selectedCategory === "tous" || filteredSculptures.length > 8;
  const displaySculptures = shouldAutoScroll ? [...filteredSculptures, ...filteredSculptures] : filteredSculptures;

  return (
    <section className="w-full py-8">
      <div className="mx-auto flex max-w-[90%] flex-col items-center px-4">
        <h2 className="text-2xl font-bold uppercase leading-tight tracking-[0.2em]">
          GALERIE
        </h2>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`text-sm font-normal leading-normal transition-all ${
                selectedCategory === category.id
                  ? 'text-text-primary dark:text-text-primary-dark font-medium underline underline-offset-4'
                  : 'text-text-secondary dark:text-text-secondary-dark hover:text-text-primary dark:hover:text-text-primary-dark'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="mt-12 w-full relative">
          <div className="flex flex-col gap-6">
            {shouldSplitRows ? (
              <>
                {/* Première ligne */}
                <div
                  ref={row1Ref}
                  className="overflow-x-auto scrollbar-hide px-8"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  <div
                    className={`flex gap-6 ${shouldAutoScroll ? '' : 'justify-center md:justify-center'} ${shouldAutoScroll ? 'animate-scroll' : ''}`}
                    style={shouldAutoScroll ? {} : { minWidth: 'max-content' }}
                  >
                    {displaySculptures
                      .filter((_, index) => index % 2 === 0)
                      .map((sculpture, index) => (
                      <div key={`${sculpture.id}-${index}-row1`} className="flex-shrink-0">
                        <div className="flex flex-col gap-3 w-[200px] sm:w-[250px] md:w-[300px]">
                          <div
                            className="aspect-[3/4] w-full bg-cover bg-center bg-no-repeat rounded"
                            style={{ backgroundImage: `url("${sculpture.image}")` }}
                            role="img"
                            aria-label={sculpture.alt}
                          />
                          <div>
                            <p className="text-base font-medium leading-normal">
                              {sculpture.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Deuxième ligne */}
                <div
                  ref={row2Ref}
                  className="overflow-x-auto scrollbar-hide px-8"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  <div
                    className={`flex gap-6 ${shouldAutoScroll ? '' : 'justify-center md:justify-center'} ${shouldAutoScroll ? 'animate-scroll' : ''}`}
                    style={shouldAutoScroll ? {} : { minWidth: 'max-content' }}
                  >
                    {displaySculptures
                      .filter((_, index) => index % 2 === 1)
                      .map((sculpture, index) => (
                      <div key={`${sculpture.id}-${index}-row2`} className="flex-shrink-0">
                        <div className="flex flex-col gap-3 w-[200px] sm:w-[250px] md:w-[300px]">
                          <div
                            className="aspect-[3/4] w-full bg-cover bg-center bg-no-repeat rounded"
                            style={{ backgroundImage: `url("${sculpture.image}")` }}
                            role="img"
                            aria-label={sculpture.alt}
                          />
                          <div>
                            <p className="text-base font-medium leading-normal">
                              {sculpture.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              /* Une seule ligne pour 3 images ou moins */
              <div
                ref={row1Ref}
                className="overflow-x-auto scrollbar-hide px-8"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <div className="flex gap-6 justify-center md:justify-center" style={{ minWidth: 'max-content' }}>
                  {displaySculptures.map((sculpture, index) => (
                    <div key={`${sculpture.id}-${index}-single`} className="flex-shrink-0">
                      <div className="flex flex-col gap-3 w-[200px] sm:w-[250px] md:w-[300px]">
                        <div
                          className="aspect-[3/4] w-full bg-cover bg-center bg-no-repeat rounded"
                          style={{ backgroundImage: `url("${sculpture.image}")` }}
                          role="img"
                          aria-label={sculpture.alt}
                        />
                        <div>
                          <p className="text-base font-medium leading-normal">
                            {sculpture.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {shouldAutoScroll && (
            <>
              <button
                onClick={() => scroll('left')}
                className="absolute left-4 top-1/2 -translate-y-1/2 backdrop-blur-sm dark:bg-gray-800/30 rounded-full p-3 shadow-lg hover:bg-white/30 dark:hover:bg-gray-800/40 transition-all z-10"
                aria-label="Scroll left"
              >
                <svg className="w-6 h-6 text-text-primary dark:text-text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={() => scroll('right')}
                className="absolute right-4 top-1/2 -translate-y-1/2 backdrop-blur-sm dark:bg-gray-800/30 rounded-full p-3 shadow-lg hover:bg-white/30 dark:hover:bg-gray-800/40 transition-all z-10"
                aria-label="Scroll right"
              >
                <svg className="w-6 h-6 text-text-primary dark:text-text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          <div className="absolute inset-y-0 left-0 w-4 md:w-12 pointer-events-none z-10" style={{
            background: 'linear-gradient(to right, var(--gradient-color) 0%, var(--gradient-color) 2%, transparent 100%)'
          }}></div>
          <div className="absolute inset-y-0 right-0 w-4 md:w-12 pointer-events-none z-10" style={{
            background: 'linear-gradient(to left, var(--gradient-color) 0%, var(--gradient-color) 2%, transparent 100%)'
          }}></div>
        </div>
      </div>
    </section>
  );
}