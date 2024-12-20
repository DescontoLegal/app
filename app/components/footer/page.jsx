import Image from "next/image";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="bg-primary text-white flex flex-col md:flex-row p-20">

        <div className="flex-1 md:py-0 py-6">
          <h3 className="text-secondary font-bold mb-2">Siga-nos nas Redes Sociais</h3>
          <FacebookIcon fontSize="large" className="mr-2" />
          <InstagramIcon fontSize="large" />
        </div>

        <div className="flex-1 md:py-0 py-6">
          <h3 className="text-secondary font-bold mb-2">Institucional</h3>
          <p>- Sobre o Cartão Desconto Legal</p>
          <p>- Termos de Uso</p>
          <p>- Política de Privacidade</p>
          <p>- Uso de Cookies</p>
        </div>

        <div className="flex-1 md:py-0 py-6">
          <h3 className="text-secondary font-bold mb-2">Suporte</h3>
          <p>- Central de Ajuda</p>
          <p>- Contato</p>
        </div>

        <div className="flex-1 md:py-0 py-6">
          <Image src="/logo.png" width={283} height={176} alt="Cartão Desconto Legal" />
        </div>

      </div>

      <div className="bg-primary text-white px-20 py-6 text-center border-t border-white">
        <p>2025 - Cartão Desconto Legal - Todos os Direitos Reservados.</p>
        <p>
          Desenvolvido por <Link href="https://rixxer.com.br" target="_blank">Rixxer</Link>
        </p>
      </div>

    </>
  )
}