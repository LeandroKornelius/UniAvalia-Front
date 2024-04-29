import Button from "./Button";
import NavOptions from "./NavOptions";

export default function NavBar() {

    return (
        <div className="px-32 py-2 flex items-center justify-between">
            <div className="flex items-center">
                <img src="/iconLogo.svg" alt="logo icon"></img>
                <img src="/textLogo.png" alt="logo text"></img>
            </div>
            <NavOptions/>
            <Button btnText={'Get Started'}/>
        </div>
    )
}