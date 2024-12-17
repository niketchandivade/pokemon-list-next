export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{margin: 0, height: '100vh'}}>
        <main style={{margin: 0, height: '100vh'}}>{children}</main>
      </body>
    </html>
  );
}
