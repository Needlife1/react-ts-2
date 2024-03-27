interface ButtonProps {
  setGoodCounts: React.Dispatch<React.SetStateAction<number>>;
  setNeutralCounts: React.Dispatch<React.SetStateAction<number>>;
  setBadCounts: React.Dispatch<React.SetStateAction<number>>;
}

export const Buttons: React.FC<ButtonProps> = ({
  setGoodCounts,
  setNeutralCounts,
  setBadCounts,
}) => {
  const buttonsData = [
    { setCount: setGoodCounts, label: "Good" },
    { setCount: setNeutralCounts, label: "Neutral" },
    { setCount: setBadCounts, label: "Bad" },
  ];
  return (
    <div>
      {buttonsData.map(({ setCount, label }) => (
        <button
          key={label}
          onClick={() => setCount((prevCount) => prevCount + 1)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
