export const metadata = {
  title: "Contoso Pizza Store",
  description: "Your favorite place for pizza",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
