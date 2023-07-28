import { Head } from "$fresh/runtime.ts";
import { css } from "../deps.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div class={css({ pl: "4", pr: "4", pt: "8", pb: "8", ml: "auto", mr: "auto", bgColor: "#86efac" })}>
        <div
          class={css({
            maxW: "screen.md",
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
          <h1 class={css({ fontSize: "4xl", lineHeight: "4xl", fontWeight: "bold" })}>404 - Page not found</h1>
          <p class={css({ mt: "4", mb: "4" })}>The page you were looking for doesn't exist.</p>
          <a href="/" class={css({ textDecorationLine: "underline" })}>
            Go back home
          </a>
        </div>
      </div>
    </>
  );
}
