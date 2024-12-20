"use client";
import { Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (

    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <Image src="/logo.png" alt="Cartão Desconto Legal" width={138} height={86} />
      </Navbar.Brand>

      <Navbar.Toggle />

      <Navbar.Collapse>
        <Navbar.Link
          href="#"
          className="relative text-xl text-black md:hover:text-primary md:transition md:duration-300 md:ease-in-out before:content-[''] before:absolute before:w-full before:h-[2px] before:bg-current before:scale-x-0 before:origin-left before:bottom-[-2px] before:left-0 hover:before:scale-x-100 hover:before:transition hover:before:duration-300 mr-10"
        >
          Produtos
        </Navbar.Link>

        <Navbar.Link
          href="#"
          className="relative text-xl text-black md:hover:text-primary md:transition md:duration-300 md:ease-in-out before:content-[''] before:absolute before:w-full before:h-[2px] before:bg-current before:scale-x-0 before:origin-left before:bottom-[-2px] before:left-0 hover:before:scale-x-100 hover:before:transition hover:before:duration-300 mr-10"
        >
          Serviços
        </Navbar.Link>

        <Navbar.Link
          href="#"
          className="relative text-xl text-black md:hover:text-primary md:transition md:duration-300 md:ease-in-out before:content-[''] before:absolute before:w-full before:h-[2px] before:bg-current before:scale-x-0 before:origin-left before:bottom-[-2px] before:left-0 hover:before:scale-x-100 hover:before:transition hover:before:duration-300 mr-10"
        >
          Por que usar nosso Cartão?
        </Navbar.Link>

        <Navbar.Link
          href="#"
          className="relative text-xl text-black md:hover:text-primary md:transition md:duration-300 md:ease-in-out before:content-[''] before:absolute before:w-full before:h-[2px] before:bg-current before:scale-x-0 before:origin-left before:bottom-[-2px] before:left-0 hover:before:scale-x-100 hover:before:transition hover:before:duration-300"
        >
          Parceiros
        </Navbar.Link>
      </Navbar.Collapse>

      <div className="flex md:order-2 md:m-0 md:p-0 mt-8">

        <Link className="bg-transparent text-primary border border-primary mr-6 hover:bg-primary hover:text-white border rounded-lg p-2 px-6 transition duration-300 ease-in-out font-bold" href="#">SOU LOJISTA</Link>
        <Link className="bg-primary text-white border border-primary mr-6 hover:bg-white hover:text-primary border rounded-lg p-2 px-6 transition duration-300 ease-in-out font-bold" href="#">EU QUERO</Link>
      </div>



    </Navbar>

  )
}