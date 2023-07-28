import type { Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";
import { css } from "../deps.ts";

interface CounterProps {
  count: Signal<number>;
}

export default function Counter(props: CounterProps) {
  return (
    <div class={css({ display: "flex", gap: "8", pt: "6", pb: "6" })}>
      <Button onClick={() => (props.count.value -= 1)}>-1</Button>
      <p class={css({ fontSize: "3xl", lineHeight: "3xl" })}>{props.count}</p>
      <Button onClick={() => (props.count.value += 1)}>+1</Button>
    </div>
  );
}
