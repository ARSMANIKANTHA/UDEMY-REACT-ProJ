import Imageshow from "./Imageshow";
import './Imagelist.css';
const Imagelist = ({allImages}) =>{
    let images = allImages.map((x)=><Imageshow key={x.id} image={x}/>);
    return (
        <div className="images-list">{images}</div>
    );
}
export default Imagelist;