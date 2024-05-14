
export default function Button({ btnText, handleButtonClick }: { btnText: string, handleButtonClick: () => void }) {
    return (
        <button 
            className="text-light-white font-semibold bg-light-blue px-10 py-1 rounded-2xl" 
            type="button" 
            onClick={handleButtonClick}
        >
            {btnText}
        </button>
    );
}
