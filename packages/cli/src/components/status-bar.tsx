import { TextAttributes } from "@opentui/core";
// todo: have color to different models depicting its power. ie red for opus 4.6, green for haiku etc
export function StatusBar() {
  return (
    <box flexDirection="row" gap={1}>
      <text fg="cyan">Build</text>
      <text attributes={TextAttributes.DIM} fg="gray">
        {'>'}
    </text>
      <text>opus-4-6</text>
    </box>
  );
}