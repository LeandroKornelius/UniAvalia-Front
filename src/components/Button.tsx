import { useRouter } from 'next/router';

export default function Button({ btnText }: { btnText: string }) {
    const router = useRouter();

    const handleButtonClick = () => {
        router.push('/login');
    };

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
