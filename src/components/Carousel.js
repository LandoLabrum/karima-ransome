import data from '../delegate';

export default function Carousel() {
  const CarouselData = data.carousel.slides
  return (<>
    {/* {JSON.stringify(CarouselData)} */}
    <div className="carousel carousel-slider">
      {CarouselData && CarouselData.map(p =>
        <div key={p.title} className="carousel-item">
          <img alt={p.title} className="responsive-img" src={p.img} />
          <div className="overlay">
            <h1 className="orange-text">{p.title}</h1>
            <p >{p.description}</p>
            <a href="/" className="btn waves-effect white grey-text darken-text-2">button</a>
          </div>
        </div>
      )}
    </div>
  </>
  )
};



