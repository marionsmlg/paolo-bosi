export default function Atelier() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-4">
        <h2 className="mb-12 text-2xl font-bold uppercase leading-tight tracking-[0.2em]">
          ATELIER
        </h2>
        <div className="w-full flex flex-col md:flex-row gap-4">
          <div
            className="flex-1 aspect-[3/4] bg-cover bg-center bg-no-repeat rounded"
            style={{
              backgroundImage: 'url("/images/atelier/Atelier.jpg")'
            }}
            role="img"
            aria-label="Vue de l'atelier de sculpture"
          />
          <div
            className="flex-1 aspect-[3/4] bg-cover bg-center bg-no-repeat rounded"
            style={{
              backgroundImage: 'url("/images/atelier/Totem_En_Travail.jpg")'
            }}
            role="img"
            aria-label="Totem en cours de travail dans l'atelier"
          />
        </div>
        <div className="mt-8 max-w-4xl text-center text-base leading-relaxed text-text-secondary dark:text-text-secondary-dark space-y-4">
          <p>
            L'atelier de Vallauris est un monde en soi : briques trouées, sciure de bois, câbles, poulies, fragments de matière tranchés net.<br />
            Un apparent chaos d'où émergent des formes d'une précision presque prothétique.
          </p>
          <p>
            Paolo travaille le bois dense, celui qui résiste, celui qui oblige à écouter avant d'agir.<br />
            Son geste est longuement médité, précédé d'heures de silence où la forme se révèle peu à peu.
          </p>
          <p>
            Dans ses sculptures, il associe parfois la terre cuite — une argile qu'il façonne puis imbrique comme un contrepoint au bois.<br />
            Ces inserts ajustent les volumes, créent des tensions, relient les différentes masses comme des articulations secrètes.
          </p>
          <p>
            Dans cette lumière filtrée, parmi les outils, la poussière et les chutes de matière, les sculptures attendent leur transformation —<br />
            comme des corps en devenir.
          </p>
        </div>
      </div>
    </section>
  );
}
