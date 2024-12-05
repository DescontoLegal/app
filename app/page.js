import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-12">

      <main className="flex flex-col items-center p-6">
        <Image
          src="/logo.png"
          alt="Cartão Desconto Legal"
          width={300}
          height={38}
          priority
        />
        <h3 className="text-3xl text-center font-bold p-6">Nosso site está passando por uma manutenção preventiva.</h3>
        <h4 className="text-xl text-center">Em poucos dias, você poderá conferir todas as vantagens de ser um cliente do <span className="font-bold">Cartão Desconto Legal!</span></h4>
      </main>

      <footer className="flex items-center justify-center text-center p-6">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-sm font-bold"
          href="https://rixxer.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Todos os Direitos Reservados. Em desenvolvimento por Rixxer (www.rixxer.com.br).
        </a>
      </footer>
    </div>

  );
}
