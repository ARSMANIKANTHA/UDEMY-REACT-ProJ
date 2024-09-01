import './Imageshow.css';
function Imageshow({image}){
    return (
        <div className="image-outer">
            <img src={image.urls.small} alt={image.alt_description} />
            <p className="description">{image.alt_description}</p>
        </div>
    );
}
export default Imageshow;