import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <>
      <link rel="stylesheet" href="styles.css" />
      <Component />
    </>
  );
}
