import { Metadata } from "next";
import Navigation from "../components/navgation"
import "../styles/global.css";

export const metadata: Metadata = {
  title: {
    template: "%s | The New York Times Best Sellers",
    default: "The New York Times Best Sellers",
  },
  description:"%s",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
