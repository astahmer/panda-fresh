import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import { css } from "../deps.ts";

export default function Home() {
  const count = useSignal(3);
  return (
    <>
      <Head>
        <title>panda-fresh</title>
      </Head>
      <div class={css({ pl: "4", pr: "4", pt: "8", pb: "8", ml: "auto", mr: "auto", bgColor: "#86efac" })}>
        <div
          class={css({
            // maxW: "screen.md",
            ml: "auto",
            mr: "auto",
            display: "flex",
            flexDir: "column",
            alignItems: "center",
            justifyContent: "center",
          })}
        >
          <img
            class={css({ mt: "6", mb: "6" })}
            src="/logo.svg"
            width="128"
            height="128"
            alt="the fresh logo: a sliced lemon dripping with juice"
          />
          <h1 class={css({ fontSize: "4xl", lineHeight: "4xl", fontWeight: "bold" })}>
            Welcome to fresh + Panda CSS 🦕❤️🐼
          </h1>
          <p class={css({ mt: "4", mb: "4" })}>
            Try updating this message in the
            <code class={css({ ml: "2", mr: "2" })}>./routes/index.tsx</code> file, and refresh.
          </p>
          <Counter count={count} />
        </div>
      </div>
    </>
  );
}
