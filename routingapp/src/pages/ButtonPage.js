import Button from "../components/Button";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosAddCircle } from "react-icons/io";
import { MdNotificationsActive } from "react-icons/md";
export default function ButtonPage(){
    function handleClick() {
        alert("click");
    }
    return <div>
        <div>
            <Button className="bg-red-500" success onClick={handleClick}><CiShoppingCart/>Add to Cart</Button>
        </div>
        <div>
            <Button primary><IoIosAddCircle/>Buy Now</Button>
        </div>
        
        <div>
            <Button primary><MdNotificationsActive/>Notifications</Button>
        </div>
    </div>;
}