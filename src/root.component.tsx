import { RecoilRoot } from "recoil";
import App from "./App";

export default function Root(props) {
  return (
    <>
      <RecoilRoot>
        <App nome={props.name} />
      </RecoilRoot>
    </>
  );
}
