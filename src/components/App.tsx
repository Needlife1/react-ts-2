import { useEffect, useState } from "react";
import { Buttons } from "./Buttons";
import { FeedBackList } from "./FeedbaclList";

function App(): JSX.Element {
  const [goodCounts, setGoodCounts] = useState<number>(0);
  const [neutralCounts, setNeutralCounts] = useState<number>(0);
  const [badCounts, setBadCounts] = useState<number>(0);
  const [totalFeedback, setTotalFeedback] = useState<number>(0);
  const [positiveFeedback, setPositiveFeedback] = useState<number>(0);

  useEffect(() => {
    setTotalFeedback(goodCounts + neutralCounts + badCounts);
  }, [goodCounts, neutralCounts, badCounts]);

  useEffect(() => {
    if (totalFeedback > 0) {
      setPositiveFeedback((goodCounts / totalFeedback) * 100);
    } else {
      setPositiveFeedback(0);
    }
  }, [goodCounts, totalFeedback]);

  return (
    <>
      <h1>Please leave feedback</h1>
      <Buttons
        setGoodCounts={setGoodCounts}
        setNeutralCounts={setNeutralCounts}
        setBadCounts={setBadCounts}
      />
      <h2>Statistics</h2>
      {totalFeedback === 0 ? (
        <p>There is no feedback</p>
      ) : (
        <>
          <FeedBackList
            goodCounts={goodCounts}
            neutralCounts={neutralCounts}
            badCounts={badCounts}
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
        </>
      )}
    </>
  );
}

export default App;
