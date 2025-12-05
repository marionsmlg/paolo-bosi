const exhibitions = {
  column1: [
    { year: "2024", title: "Exposition de groupe Nomad art contemporain Chapelle des Pénitents Blancs Vence" },
    { year: "2024", title: "Exposition de groupe « Rencontres d'artistes » La Gaude en Mai et a Nice en Novembre" },
    { year: "2023", title: "Exposition personnelle a l'agence Tosca « Fayoum » Nice" },
    { year: "2023", title: "Exposition de groupe Nomad Chapelle des Pénitents Blancs Vence" },
    { year: "2023", title: "Exposition de groupe Enzo Maio Paolo Bosi « Lisières des Territoires »Beaux Arts de Cannes" },
    { year: "2023", title: "Exposition de groupe La Gaia Scienza centre d'art Nice" },
    { year: "2023", title: "Exposition de groupe Trans art café « calepin d'artiste » Antibes" },
    { year: "2022", title: "Exposition personnelle Vallauris Galerie BB" },
    { year: "2022", title: "Exposition de groupe EXODE à Saint-Raphaël" },
    { year: "2021", title: "Exposition de groupe TERRE DE JEUX à Antibes – atelier du safranier" },
    { year: "2020", title: "Exposition de groupe CAMIN'ART à Vence" },
    { year: "2019", title: "Exposition de groupe au Centre d'Art Châteauvert « Centre nature ou les fictions d'un promeneur contemporain d'aujourd'hui »" }
  ],
  column2: [
    { year: "2017", title: "Exposition personnelle, Galerie Palmieri, Busto Arsizio, Italie" },
    { year: "2016", title: "Exposition personnelle, musée de Céramique de Biot « Du bois à la terre »" },
    { year: "2015", title: "Exposition personnelle, Galerie Bazik, Cannes" },
    { year: "2013", title: "Exposition personnelle, Chapelle de la Miséricorde, Vallauris « La fracture silencieuse »" },
    { year: "2011", title: "Exposition personnelle, Galerie XXI, Paris" },
    { year: "2009", title: "Exposition personnelle, Galerie Sintitulo, Mougins" },
    { year: "2005", title: "Exposition personnelle, Galerie Sintitulo, Mougins" },
    { year: "2004", title: "Exposition de groupe « De l'idée à l'œuvre » Cagnes sur mer" },
    { year: "2003", title: "Exposition personnelle – Atelier 49 – Vallauris" },
    { year: "2002", title: "Installation définitive de l'œuvre « Le Maschere di Ubaga» Pieve Di Teco, Italie" },
    { year: "2001", title: "XVIII Biennale Méditerranéenne de la jeune peinture, sculpture et gravure – UMAM – Exposition de groupe 32 artistes de l'Atelier 49 – Galerie Art 7 - Nice" }
  ]
};

export default function Exhibitions() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-2xl font-bold uppercase leading-tight tracking-[0.2em] text-center mb-12">
          EXPOSITIONS
        </h2>
        <div className="grid grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-2">
          <div className="flex flex-col space-y-6 text-sm text-text-secondary dark:text-text-secondary-dark">
            {exhibitions.column1.map((exhibition, index) => (
              <p key={index}>
                <b className="font-bold text-text-primary dark:text-text-primary-dark">
                  {exhibition.year}
                </b>{" "}
                {exhibition.title}
              </p>
            ))}
          </div>
          <div className="flex flex-col space-y-6 text-sm text-text-secondary dark:text-text-secondary-dark">
            {exhibitions.column2.map((exhibition, index) => (
              <p key={index}>
                <b className="font-bold text-text-primary dark:text-text-primary-dark">
                  {exhibition.year}
                </b>{" "}
                {exhibition.title}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
