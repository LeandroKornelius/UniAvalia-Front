export default function Button({ buttonText, handleButtonClick, buttonWidth, buttonHeight }: { buttonText: string, handleButtonClick?: () => void, buttonWidth?: string, buttonHeight?: string }) {
    const buttonStyle = `font-fira px-10 py-1 text-white bg-green rounded-md ${buttonWidth || 'w-52'} ${buttonHeight || 'h-7'}`;
    return (
        <button 
            className={buttonStyle}
            type="button"    
            onClick={handleButtonClick}
        >
            {buttonText}
        </button>
    );
}
