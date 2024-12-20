import Image from "next/image";
import Link from "next/link";

export default function Partners() {
  return (
    <div className="p-20">
      <div>
        <h2 className="text-center text-5xl pt-12 font-bold">São diversos parceiros, trazendo <br /><span className="text-primary">grande variedade</span> em suas compras</h2>
      </div>

      <div className="flex flex-col md:flex-row mt-16 items-center">
        <div className="flex-1 p-2 md:p-8">
          <Image src="/partner01.jpg" width={300} height={300} alt="Central de Carnes Pantanal" />
        </div>

        <div className="flex-1 p-2 md:p-8">
          <Image src="/partner02.jpg" width={300} height={300} alt="Angracel" />
        </div>

        <div className="flex-1 p-2 md:p-8">
          <Image src="/partner03.jpg" width={300} height={300} alt="Bambú Açaí" />
        </div>

        <div className="flex-1 p-2 md:p-8">
          <Image src="/partner04.jpg" width={300} height={300} alt="Barbearia do Bruno" />
        </div>

        <div className="flex-1 p-2 md:p-8">
          <Image src="/partner05.jpg" width={300} height={300} alt="Boteco do Coronel" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-8 items-center">
        <div className="flex-1 p-2 md:p-8">
          <Image src="/partner07.jpg" width={300} height={300} alt="Luna Utilidades & Decorações" />
        </div>

        <div className="flex-1 p-2 md:p-8">
          <Image src="/partner08.jpg" width={300} height={300} alt="Marlana Boutique" />
        </div>

        <div className="flex-1 p-2 md:p-8">
          <Image src="/partner09.jpg" width={300} height={300} alt="MFJ Auto Center" />
        </div>

        <div className="flex-1 p-2 md:p-8">
          <Image src="/partner10.jpg" width={300} height={300} alt="Nacional Gás" />
        </div>

        <div className="flex-1 p-2 md:p-8">
          <Image src="/partner11.jpg" width={300} height={300} alt="Óticas Diniz" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-8 items-center">
        <div className="flex-1 p-2 md:p-8">
          <Image src="/partner13.jpg" width={300} height={300} alt="TUCA Parafusos & Ferramentas" />
        </div>

        <div className="flex-1 p-2 md:p-8">
          <Image src="/partner14.jpg" width={300} height={300} alt="Yes! Idiomas" />
        </div>

        <div className="flex-1 p-2 md:p-8">
          <Image src="/partner06.jpg" width={300} height={300} alt="FS Tintas" />
        </div>

        <div className="flex-1 p-2 md:p-8">
          <Image src="/partner12.jpg" width={300} height={300} alt="Floral Cosméticos" />
        </div>
      </div>

      <div className="text-center justify-center mt-12">
        <Link
          href="#"
          className="bg-primary text-white px-6 py-3 text-2xl font-bold block max-w-xs mx-auto rounded-xl"
        >
          Conheça todos os nossos parceiros
        </Link>
      </div>

    </div>
  )
}