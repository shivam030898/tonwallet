'use client'

import { TonConnectUIProvider } from "@tonconnect/ui-react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <title>TON Connect Demo</title>
      </body>
      <TonConnectUIProvider manifestUrl="https://ivory-capable-clam-291.mypinata.cloud/ipfs/QmcTBFvNF537oMnSVSiH2fNjMXyj4FZydS2Xgi7GWMwSu6">
      {children}
      </TonConnectUIProvider>
    </html>
  );
}
