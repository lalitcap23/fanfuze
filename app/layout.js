import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { Providers } from "./providers"


export const metadata = {
  title: "FanFuse - Blockchain-Powered Fan Rewards",
  description: "Transform fan loyalty with exclusive token-gated rewards and experiences on the Chiliz blockchain.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Providers>{children}</Providers>
      </body>
    </html>
  );
}
