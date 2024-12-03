import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          src="/logo.png"
          alt="Cartão Desconto Legal"
          width={300}
          height={38}
          priority
        />
        <h3 className="text-3xl text-center">Site em desenvolvimento</h3>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://rixxer.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Em desenvolvimento por Rixxer (www.rixxer.com.br)
        </a>
      </footer>
    </div>
  );
}
