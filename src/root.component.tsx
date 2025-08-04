import { RecoilRoot } from "recoil";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Header from "./pages/menu";

export default function Root(props) {
  return (
    <>
      <RecoilRoot>
        <Header title="Tech Challengte fase 2" />
      </RecoilRoot>
    </>
  );
}
