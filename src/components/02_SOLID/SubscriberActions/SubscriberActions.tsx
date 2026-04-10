// ISP - Interface Segregation Principle (correct)
const SubscriberActions = () => {
  const handleCommentClick = () => {
    console.log("Adding comment");
  };

  return (
    <div>
      <button onClick={handleCommentClick}>Add Comment</button>
    </div>
  );
};

export { SubscriberActions };
