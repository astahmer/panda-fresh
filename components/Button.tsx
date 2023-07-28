import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { css } from "../deps.ts";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class={css({
        pl: "2",
        pr: "2",
        pt: "1",
        pb: "1",
        borderColor: "gray.500",
        borderWidth: "2px",
        rounded: "rounded",
        bgColor: "white",
        _hover: { bgColor: "gray.200" },
        transitionProperty: "color, background-color, border-color, text-decoration-color, fill, stroke",
        transitionTimingFunction: "colors",
        transitionDuration: "colors",
      })}
    />
  );
}
