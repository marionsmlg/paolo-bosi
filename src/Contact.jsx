export default function Contact() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="mx-auto flex max-w-md flex-col items-center px-4">
        <div className="flex items-center justify-center gap-6">
          {/* <a
            className="text-text-secondary dark:text-text-secondary-dark transition-colors hover:text-text-primary dark:hover:text-text-primary-dark"
            href="#"
            aria-label="Facebook"
            target="_blank"
          >
            <svg
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a> */}
          <a
            className="text-text-secondary dark:text-text-secondary-dark transition-colors hover:text-text-primary dark:hover:text-text-primary-dark"
            href="https://www.instagram.com/bosi5439/"
            aria-label="Instagram"
            target="_blank"
          >
            <svg
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
            </svg>
          </a>
          {/* <a
            className="text-text-secondary dark:text-text-secondary-dark transition-colors hover:text-text-primary dark:hover:text-text-primary-dark"
            href="#"
            aria-label="YouTube"
            target="_blank"
          >
            <svg
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
              <path d="m10 15 5-3-5-3z"></path>
            </svg>
          </a> */}
        </div>
        <div className="mt-8 flex flex-col items-center gap-3 text-center text-base text-text-secondary dark:text-text-secondary-dark">
          <a
            href="tel:+33672786209"
            className="hover:text-text-primary dark:hover:text-text-primary-dark transition-colors"
          >
            06 72 78 62 09
          </a>
          <a
            href="mailto:paolobosi63@gmail.com"
            className="hover:text-text-primary dark:hover:text-text-primary-dark transition-colors"
          >
            paolobosi63@gmail.com
          </a>
          <p>Avenue Jean Gerbino, 06220 Vallauris</p>
        </div>
      </div>
    </section>
  );
}
