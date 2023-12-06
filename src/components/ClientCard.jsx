const Card = ({ curData }) => {
    return (
      <div className="slider-content text-light text-left" id="anim">
      
  
        <p className="pt-1 lead  fade-up" style={{textAlign:"center"}}>{curData.content_prim}</p>
    
        <ul className="pt-2 pl-0 m-0">
          {curData &&
            curData.list &&
            curData.list.map((item, i) => (
              <li
                key={i}
                className="d-flex align-items-center pb-1 fade-up liservices"
              >
                {item.text && (
                  <img className="gif-size" src={item.img_url} alt={item.text} />
                )}
                {item.text && <p className="pl-2 m-0">{item.text}</p>}
              </li>
            ))}
        </ul>
      </div>
    );
  };
  
  export default Card;
  