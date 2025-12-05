export default function About() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="mx-auto flex max-w-5xl flex-col md:flex-row items-center gap-8 px-4">
        <div className="flex-1">
          <img
            src="/images/paolo_totem.png"
            alt="Paolo Bosi avec un totem"
            className="w-full h-auto object-cover rounded"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-2xl font-bold uppercase leading-tight tracking-[0.2em] mb-6">
            À PROPOS
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-text-secondary dark:text-text-secondary-dark">
            <p>
              Paolo Bosi, né près du lac Majeur en Italie, découvre très jeune le dessin et la peinture avant d'étudier la sculpture aux Beaux-Arts de Milan. Installé depuis 1992 à Vallauris, il y développe une œuvre reconnue à Nice, Paris, Mougins ou Cannes.
            </p>
            <p>
              Sculpteur du bois brut, il crée des formes épurées où se mêlent torsion, fragilité et émotion. Il intègre aussi l'argile à ses pièces, jouant sur les matières, la lumière et les contrastes, toujours nourri par ses trois fondements : le bois, l'argile et le dessin.
            </p>
            <p>
              Depuis deux ans, son travail explore le thème de « la tête d'otage », où terres et chambres à air symbolisent l'enfermement et la vulnérabilité. Artiste patient et sincère, Paolo Bosi poursuit une recherche où seule compte l'œuvre achevée, fidèle à sa vision et à son exigence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
