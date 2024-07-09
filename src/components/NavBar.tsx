import Image from "next/image";
import Button from "./Button";
import NavOptions from "./NavOptions";

export default function NavBar({selectedPageText, buttonText, handleButtonClick, buttonWidth, buttonHeight }: {selectedPageText: string, buttonText: string, handleButtonClick?: () => void, buttonWidth?: string, buttonHeight?: string}) {

    return (
        <div className="px-32 py-2 flex items-center justify-between hidden lg:flex">
            <Image 
                src="/greenLogo.svg"
                alt="Uniavalia Logo"
                width={50}
                height={50}
            />
            <NavOptions selectedPageText={selectedPageText}/>
            <Button 
                buttonText={buttonText}
                handleButtonClick={handleButtonClick}
                buttonStyle={`font-fira px-10 py-1 text-white bg-green rounded-md ${buttonWidth} ${buttonHeight}`}
            />
        </div>
    )
}