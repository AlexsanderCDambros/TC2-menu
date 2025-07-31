import { atom } from "recoil";

export const menuLinksState = atom({
  key: "menuLinksState",
  default: [
    {
      label: "Inicio",
      link: "/inicio",
    },
    {
      label: "Transações",
      link: "/transacoes",
    },
  ],
});
