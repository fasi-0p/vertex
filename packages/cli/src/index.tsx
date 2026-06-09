import { createCliRenderer, TextAttributes } from "@opentui/core";
import { createRoot } from "@opentui/react";
import {InputBar} from './components/input-bar'
import {Header} from './components/header'

function App() {
  return (
    <box alignItems="center" justifyContent="center" flexGrow={1}>
      <box alignItems='center' justifyContent='center' backgroundColor='#0D0D12' height='100%' width='100%' gap={2}>
        <Header/>
        <box width='100%' maxWidth={78} paddingX={2}>
          <InputBar onSubmit={()=>{}}/>
        </box>
      </box>
    </box>
  );
}

const renderer = await createCliRenderer();
createRoot(renderer).render(<App />);
