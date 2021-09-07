import Layout from "../Layout/Layout";
import FullTweet from "../Components/FullTweet/FullTweet";
const TweetPage = (props) => {
  return (
    <>
      <Layout>
        <FullTweet {...props} />
      </Layout>
    </>
  );
};

export default TweetPage;
