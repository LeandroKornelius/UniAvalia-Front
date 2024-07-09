export default function Button({
  buttonText,
  handleButtonClick,
  buttonType,
  buttonStyle
}: {
  buttonText: string;
  handleButtonClick?: () => void;
  buttonWidth?: string;
  buttonHeight?: string;
  buttonType?: "button" | "submit" | "reset" | undefined;
  buttonStyle: string;
}) {
  return (
    <button
      className={buttonStyle}
      type={buttonType}
      onClick={handleButtonClick}
    >
      {buttonText}
    </button>
  );
}
