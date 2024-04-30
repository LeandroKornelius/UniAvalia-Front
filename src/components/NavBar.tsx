import Button from "./Button";
import Logo from "./Logo";
import NavOptions from "./NavOptions";

export default function NavBar({selectedPageText}: {selectedPageText: string}) {

    return (
        <div className="px-32 py-2 flex items-center justify-between">
            <Logo/>
            <NavOptions selectedPageText={selectedPageText}/>
            <Button btnText={'Get Started'}/>
        </div>
    )
}