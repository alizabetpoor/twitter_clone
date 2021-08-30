import Tweets from "../../../Containers/Tweets/Tweets"
const BodyCenter = () => {
    return ( 
        <div className="body-center flex flex-col items-center justify-center w-full md:w-4/5 lg:w-1/2 border-r border-l border-gray-600">
            <Tweets />
        </div>
     );
}
 
export default BodyCenter;