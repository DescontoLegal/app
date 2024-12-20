import localFont from "next/font/local";
import "./globals.css";

const InriaRegular = localFont({
  src: "./fonts/InriaSans-Regular.ttf",
  variable: "--font-inria-regular",
});

const InriaBold = localFont({
  src: "./fonts/InriaSans-Bold.ttf",
  variable: "--font-inria-bold",
});

const InriaBoldItalic = localFont({
  src: "./fonts/InriaSans-BoldItalic.ttf",
  variable: "--font-inria-bold-italic",
});

export const metadata = {
  title: "Cartão Desconto Legal",
  description: "O Cartão de todo Angreense",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${InriaRegular.variable} ${InriaBold.variable} ${InriaBoldItalic.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
