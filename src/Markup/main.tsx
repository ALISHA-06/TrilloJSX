function Main() {
  return (
    <>
      <main className="hotel-view">
        <div className="gallery">
          <figure className="gallery__item">
            <img
              src="IMG/hotel-1.jpg"
              alt="img of hotel"
              className="gallery__photo"
            />
          </figure>
          <figure className="gallery__item">
            <img
              src="IMG/hotel-2.jpg"
              alt="img of hotel"
              className="gallery__photo"
            />
          </figure>
          <figure className="gallery__item">
            <img
              src="IMG/hotel-3.jpg"
              alt="img of hotel"
              className="gallery__photo"
            />
          </figure>
        </div>
        <div className="overview">
          <h1 className="overview__heading">Hotel Las Palmas</h1>
          <div className="overview__stars">
            <svg
              className="overview__icon-star"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>star</title>
              <path d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"></path>
            </svg>
            <svg
              className="overview__icon-star"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>star</title>
              <path d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"></path>
            </svg>

            <svg
              className="overview__icon-star"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>star</title>
              <path d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"></path>
            </svg>
            <svg
              className="overview__icon-star"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>star</title>
              <path d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"></path>
            </svg>
            <svg
              className="overview__icon-star"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>star</title>
              <path d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"></path>
            </svg>
          </div>
          <div className="overview__location">
            <svg
              className="overview__icon-location"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>location-pin</title>
              <path d="M10 2.009c-2.762 0-5 2.229-5 4.99 0 4.774 5 11 5 11s5-6.227 5-11c0-2.76-2.238-4.99-5-4.99zM10 9.76c-1.492 0-2.7-1.209-2.7-2.7s1.208-2.7 2.7-2.7c1.49 0 2.699 1.209 2.699 2.7s-1.209 2.7-2.699 2.7z"></path>
            </svg>

            <button className="btn-inline"> Albufeira , Portugal </button>
          </div>
          <div className="overview__rating">
            <div className="overview__rating-average">8.6</div>
            <div className="overview__rating-count">429 votes</div>
          </div>
        </div>
        <div className="detail">
          <div className="description">
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur nemo voluptatem repudiandae voluptates expedita
              accusamus illo facere impedit voluptate nesciunt.
            </p>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              accusantium labore consectetur.
            </p>
            <ul className="list">
              <li className="list__item">Close to the beach</li>
              <li className="list__item">Breakfast included</li>
              <li className="list__item">Free airport shuttle</li>
              <li className="list__item">Free wifi in all rooms</li>
              <li className="list__item">Free conditioning and heating</li>
              <li className="list__item">Pets allowed</li>
              <li className="list__item">We speak all languages</li>
              <li className="list__item">Perfect for families</li>
            </ul>
            <div className="recommend">
              <div className="recommend__count">
                Lucy and 3 other friends recommended this hotel
              </div>
              <div className="recommend__friend">
                <img
                  src="IMG/user-1.jpg"
                  alt="Friend 1"
                  className="recommend__photo"
                />
                <img
                  src="IMG/user-2.jpg"
                  alt="Friend 2"
                  className="recommend__photo"
                />
                <img
                  src="IMG/user-3.jpg"
                  alt="Friend 3"
                  className="recommend__photo"
                />
                <img
                  src="IMG/user-4.jpg"
                  alt="Friend 4"
                  className="recommend__photo"
                />
              </div>
            </div>
          </div>
          <div className="user-reviews">
            <figure className="review">
              <blockquote className="review__text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
                veritatis aspernatur aut corrupti optio doloribus!
              </blockquote>
              <figcaption className="review__user">
                <img
                  src="IMG/user-1.jpg"
                  alt="user 1"
                  className="review__photo"
                />
                <div className="review__user-box">
                  <p className="review__user-name">Sharoon Khan</p>
                  <p className="review__user-date">Feb 23rd , 2017</p>
                </div>
                <div className="review__rating">7.8</div>
              </figcaption>
            </figure>
            <figure className="review">
              <blockquote className="review__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
                ea commodi suscipit iure saepe repudiandae.
              </blockquote>
              <figcaption className="review__user">
                <img
                  src="IMG/user-2.jpg"
                  alt="user 2"
                  className="review__photo"
                />
                <div className="review__user-box">
                  <p className="review__user-name">Alisha Raza</p>
                  <p className="review__user-date">June 17th , 2017</p>
                </div>
                <div className="review__rating">9.7</div>
              </figcaption>
            </figure>
            <button className="btn-inline">
              Show all <span>&rarr;</span>
            </button>
          </div>
        </div>
        <div className="cta">
          <h2 className="cta__book-now">
            GOOD NEWS! WE HAVE 4 FREE ROOMS FOR YOUR SELECTED DATES!
          </h2>
          <button className="btn">
            <span className="btn__visible">Book now</span>
            <span className="btn__invisible">only for rooms left</span>
          </button>
        </div>
      </main>
    </>
  );
}

export default Main;
