// export function Header() {
//   return (
//     <box justifyContent="center" alignItems="center">
//       <box flexDirection="row" justifyContent="center" gap={0.5} alignItems="center">
//         {/* <ascii-font font="tiny" text="Verte" color="gray" />
//         <ascii-font font="tiny" text="x" color="white" /> */}
      
//         <text>
//             {`
//             ██╗   ██╗███████╗██████╗ ████████╗███████╗██╗  ██╗
//             ██║   ██║██╔════╝██╔══██╗╚══██╔══╝██╔════╝╚██╗██╔╝
//             ██║   ██║█████╗  ██████╔╝   ██║   █████╗   ╚███╔╝
//             ╚██╗ ██╔╝██╔══╝  ██╔══██╗   ██║   ██╔══╝   ██╔██╗
//             ╚████╔╝ ███████╗██║  ██║   ██║   ███████╗██╔╝ ██╗
//             ╚═══╝  ╚══════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝
//             `}
//         </text>
      
//       </box>
//     </box>
//   );
// }

import { useTheme } from "../providers/theme";

export function Header() {
  const { colors } = useTheme();

  return (
    <box width="100%" justifyContent="center" alignItems="center">
      <box
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        gap={0.5}
      >
        <text fg={colors.primary}>
          {`
          
██╗   ██╗███████╗██████╗ ████████╗███████╗██╗  ██╗
██║   ██║██╔════╝██╔══██╗╚══██╔══╝██╔════╝╚██╗██╔╝
██║   ██║█████╗  ██████╔╝   ██║   █████╗   ╚███╔╝
╚██╗ ██╔╝██╔══╝  ██╔══██╗   ██║   ██╔══╝   ██╔██╗
 ╚████╔╝ ███████╗██║  ██║   ██║   ███████╗██╔╝ ██╗
  ╚═══╝  ╚══════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝`}
        </text>
      </box>
    </box>
  );
}