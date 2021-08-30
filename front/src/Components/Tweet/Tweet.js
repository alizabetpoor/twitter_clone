import "./Tweet.css"
import { FiMoreHorizontal } from "react-icons/fi";
import { BiComment,BiHeart,BiShareAlt,BiRepeat,BiUpload,BiMessageRounded } from "react-icons/bi";
import profilephoto from "../../Images/profile.jpg"
const Tweet = () => {
    return ( 
        <div className="tweet-container flex border-t border-b border-gray-600 py-2 transition cursor-pointer">
            <div className="w-2/12 ml-2">
                <img src={profilephoto} alt="" className="h-10 w-10 rounded-full" />
            </div>
            <div className="flex flex-col w-10/12">
                <div className="flex justify-between">
                    <div className="flex">
                        <p>ali zabetpoor</p>
                        <p className="text-gray-400"> @alizabetpoor</p>
                        <p className="text-gray-400">. 2h</p>
                    </div>
                    <div>
                        <FiMoreHorizontal className="transition hover:bg-hvtwitter  hover:text-blue-500 rounded-full h-10 w-10 p-3 mr-2" />
                    </div>
                </div>
                <div className="flex justify-end mt-2">
                    <p className="px-2 text-right">متن توییتم اینجا باید نوشته شه</p>
                </div>
                <div>
                    <ul className="flex py-2 justify-start text-left">
                        <li>
                            <BiMessageRounded className="transition hover:bg-hvtwitter hover:text-blue-500 rounded-full h-10 w-10 p-3" />
                            <p>4</p>
                        </li>
                        <li>
                            <BiRepeat className="transition hover:bg-hvtwitter hover:text-green-500 rounded-full h-10 w-10 p-3" />
                            <p>3</p>
                        </li>
                        <li>
                            <BiHeart className="transition hover:bg-hvtwitter hover:text-red-500 rounded-full h-10 w-10 p-3" />
                            <p>2</p>
                        </li>
                        <li>
                            <BiUpload className="transition hover:bg-hvtwitter hover:text-blue-500 rounded-full h-10 w-10 p-3" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Tweet;