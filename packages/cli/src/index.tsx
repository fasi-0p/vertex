import { createCliRenderer, TextAttributes } from "@opentui/core";
import { createRoot } from "@opentui/react";
import {InputBar} from './components/input-bar'
import {Header} from './components/header'
import {ToastProvider} from './providers/toast'
import {KeyboardLayerProvider} from './providers/keyboard-layer'
import {DialogProvider} from './providers/dialog'

function App() {
  return (
    <KeyboardLayerProvider>
      <DialogProvider>
        <ToastProvider>
          <box alignItems="center" justifyContent="center" flexGrow={1}>
            <box alignItems='center' justifyContent='center' backgroundColor='#0D0D12' height='100%' width='100%' gap={2}>
              <Header/>
              <box width='100%' maxWidth={78} paddingX={2}>
                <InputBar onSubmit={()=>{}}/>
              </box>
            </box>
          </box>
        </ToastProvider>
      </DialogProvider>
    </KeyboardLayerProvider>
  );
}

const renderer = await createCliRenderer({
  targetFps: 60,
  exitOnCtrlC: false,
});
createRoot(renderer).render(<App />);
