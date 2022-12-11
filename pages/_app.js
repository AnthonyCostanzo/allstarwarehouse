import "../styles/globals.css";
import Nav from "../components/Nav";
import { SessionProvider, useSession } from "next-auth/react";
import { StoreProvider } from "../utils/store";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <StoreProvider>
        {Component.auth ? (
          <Auth>
            <Component {...pageProps} />
          </Auth>
        ) : (
          <Component {...pageProps} />
        )}
      </StoreProvider>
    </SessionProvider>
  );
}

function Auth({ children }) {
  const router = useRouter();
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/unathorized?message=login required");
    },
  });
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  return children;
}

export default MyApp;
