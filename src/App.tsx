import { useRecoilValue } from "recoil"
import { menuLinksState } from "./recoil/atoms/menuLinks";

export default function App(props) {

    const menus = useRecoilValue(menuLinksState);

    return (
        <div>
            <h1>Menu</h1>
            <p>{props.nome} is mounted!</p>
            <ul>
                {menus.map((menu, index) => (
                    <li key={index}>
                        <a href={menu.link}>{menu.label}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}