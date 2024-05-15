
export default function Button({ btnText, handleButtonClick }: { btnText: string, handleButtonClick?: () => void }) {
    return (
        <button 
            className="font-fira px-10 py-1 h-7 w-52 text-white bg-green rounded-md" 
            type="button"    
            onClick={handleButtonClick}
        >
            {btnText}
        </button>
    );
}
