import { TextAttributes } from "@opentui/core";
import { useTheme } from "../providers/theme";

// todo: have color to different models depicting its power. ie red for opus 4.6, green for haiku etc
export function StatusBar() {
  const {colors} = useTheme()
  return (
    <box flexDirection="row" gap={1}>
      <text fg={colors.primary}>Build</text>
      <text attributes={TextAttributes.DIM} fg={colors.dimSeparator}>
        {'>'}
    </text>
      <text>opus-4-6</text>
    </box>
  );
}