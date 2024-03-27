interface FeedBackListProps {
  goodCounts: number;
  neutralCounts: number;
  badCounts: number;
  totalFeedback: number;
  positiveFeedback: number;
}

export const FeedBackList: React.FC<FeedBackListProps> = ({
  goodCounts,
  neutralCounts,
  badCounts,
  totalFeedback,
  positiveFeedback,
}) => {
  const itemData = [
    { count: goodCounts, label: "Good" },
    { count: neutralCounts, label: "Neutral" },
    { count: badCounts, label: "Bad" },
    { count: totalFeedback, label: "Total" },
    { count: positiveFeedback, label: "Positive feedback" },
  ];
  return (
    <ul>
      {itemData.map(({ count, label }) => (
        <li key={label}>
          {label !== "Positive feedback" ? (
            <p>
              {label}: {count}
            </p>
          ) : (
            <p>
              {label}: {count.toFixed(1)}%
            </p>
          )}
        </li>
      ))}
    </ul>
  );
};
