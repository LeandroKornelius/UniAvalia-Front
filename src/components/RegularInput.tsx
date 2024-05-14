
export default function RegularInput({ required, inputType, inputPlaceholder, iconPath, iconAlt }: { required: boolean, inputType: string, inputPlaceholder: string, iconPath: string, iconAlt: string }) {
    return (
        <div className="relative">
            <input
                type={inputType}
                placeholder={inputPlaceholder}
                {...(required && { required: true })}
                className="text-light-blue placeholder-light-blue focus:border-light-blue pl-10 pr-3 py-2 border border-solid border-light-blue rounded-xl"
            />
            {iconPath && <img src={iconPath} alt={iconAlt} className="absolute left-3 top-1/2 transform -translate-y-1/2" />}
        </div>
    );
}
