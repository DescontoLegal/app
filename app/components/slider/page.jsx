import Image from "next/image";

export default function Slider() {
  return (
    <div className="flex flex-col md:flex-row bg-primary">

      <div className="flex-1 flex items-center">
        <div>
          <h2 className="text-5xl md:text-6xl text-white font-bold pt-10 md:pt-0 p-10 text-center md:text-left md:pl-20 md:p-0">
            São muitos descontos com o <span className="text-secondary">Cartão Desconto Legal</span>
          </h2>

          <div className="relative px-10 text-center md:text-left md:pl-20 md:pt-6">
            <div className="absolute top-6 left-20 h-full w-1 bg-transparent md:bg-white"></div>
            <p className="text-white text-xl md:pl-4 md:pr-20">
              Obtenha <span className="font-bold">descontos</span> nas principais lojas da cidade,
              e aproveite para <span className="font-bold">comprar presentes para toda sua família.</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 relative">
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 h-1 w-3/4 bg-white md:bg-transparent"></div>
        <Image src="/woman-slider.png" alt="Cartão Desconto Legal" width={1000} height={666} className="mt-8 md:mt-0" />
      </div>

    </div>

  )

}