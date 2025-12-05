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
        <p className="mt-8 max-w-xl text-center text-base leading-relaxed text-text-secondary dark:text-text-secondary-dark">
          L'atelier est mon sanctuaire. Un lieu où la poussière de marbre raconte
          des histoires et où chaque outil est une extension de ma main. C'est ici,
          dans cette lumière filtrée, que les idées prennent corps et que la pierre
          commence à parler.
        </p>
      </div>
    </section>
  );
}
