import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { wrapper } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";
import { useStore } from "react-redux";
import { RangerProvider } from "context/RangerContext/RangerContext";
import { RangerProviderAncora } from "context/RangerContext/RangerContextAncora";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const store: any = useStore();
  return (
    <PersistGate persistor={store.__persistor} loading={<div></div>}>
      <SessionProvider session={session}>
        <RangerProvider>
          <RangerProviderAncora>
            <Component {...pageProps} />
          </RangerProviderAncora>
        </RangerProvider>
      </SessionProvider>
    </PersistGate>
  );
}

export default wrapper.withRedux(MyApp);
