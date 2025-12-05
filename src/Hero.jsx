export default function Hero() {
  return (
    <section className="flex w-full flex-col items-center justify-center py-16 md:py-32">
      <div className="flex flex-col gap-2 text-center px-4">
        <h1 className="text-4xl font-bold leading-tight tracking-[-0.033em] md:text-6xl opacity-0 animate-fadeIn">
          PAOLO BOSI
        </h1>
        <h2 className="text-base font-normal italic leading-normal text-text-secondary dark:text-text-secondary-dark opacity-0 animate-fadeIn" style={{ animationDelay: '1s' }}>
          Sculpteur
        </h2>
      </div>
    </section>
  );
}
