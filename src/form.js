import { StaticKitProvider } from '@statickit/react';
function App({ Component, pageProps }) {
  return (
    <StaticKitProvider site="{your-site-id}">
      <Component {...pageProps} />
    </StaticKitProvider>
  );
}
export default App;