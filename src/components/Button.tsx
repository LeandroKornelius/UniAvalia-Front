export default function Button({btnText}: {btnText: string}) {

    return (
        <>
            <button className="text-light-white font-semibold bg-light-blue px-10 py-1 rounded-2xl" type="button">{btnText}</button>
        </>
    )
}