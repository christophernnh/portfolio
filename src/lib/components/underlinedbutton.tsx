const UnderlinedButton = ({ text }: { text: string }) => {
  return (
    <button className="hover:underline underline-offset-4 transition duration-300 ease-in-out select-none">
      {text}
    </button>
  );
};

export default UnderlinedButton;
