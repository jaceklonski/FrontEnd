import Navigation from "../components/Navigation"

export const metadata = {
  title: "Pokemon Info Homepage"
} 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

      </head>
      <body>
        <Navigation/>
        {children}
      </body>
    </html>

  );
}