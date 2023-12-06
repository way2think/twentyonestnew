const Card = ({ curData }) => {
  return (
    <div className="slider-content text-light text-left" id="anim">
      <h1 className="display-4 title fade-up">{curData.title}</h1>

      <p className="pt-1 lead p-content fade-up">{curData.content_prim}</p>
      {/* <div className="fade-up">
        {curData.content_sec && (
          <p className="pt-1 lead p-content">{curData.content_sec}</p>
        )}
      </div> */}
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
