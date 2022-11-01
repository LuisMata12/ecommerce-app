import '../css/categoryCards.css'


export const Category = ({img_category}) => {
    return (
      <>
      <div className="containerr">
            <div className="imagee">
                <img src={img_category} alt="Hogar" className="imge" />
                <div className="detailss">
                    <h2>home<samp></samp></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo optio architecto </p>
                    <div className="moree">
                        <a href="#" className="read-more">Red <span>More</span></a>
                        <div className="icon-links">
                            <a href="#"><i className="bi bi-cart-fill"></i></a>
                            <a href="#"><i className="bi bi-heart-fill"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* end-image */}
            <div className="imagee">
                <img src='https://secure.img1-fg.wfcdn.com/im/84609332/c_crop_resize_zoom-h624-w900%5Ecompr-r85/1045/104517647/default_name.jpg' alt="Hogar" className="imge"/>
                <div className="detailss">
                    <h2>kitchen<samp></samp></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo optio architecto  </p>
                    <div className="moree">
                        <a href="#" className="read-more">Red <span>More</span></a>
                        <div className="icon-links">
                            <a href="#"><i class="bi bi-cart-fill"></i></a>
                            <a href="#"><i class="bi bi-heart-fill"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* end-image */}
            <div className="imagee">
                <img src='https://www.charterworks.com/content/images/2022/02/Empty-offices.jpeg' alt="Hogar" className="imge"/>
                <div className="detailss">
                    <h2>office<samp></samp></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo optio architecto  </p>
                    <div className="moree">
                        <a href="#" className="read-more">Read<span>More</span></a>
                        <div className="icon-links">
                            <a href="#"><i class="bi bi-cart-fill"></i></a>
                            <a href="#"><i class="bi bi-heart-fill"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        {/* roww finsh */}
            <div className="imagee">
                <img src='https://lifestyleexteriors.com.au/wp-content/uploads/home-page-banner-image.jpg' alt="Hogar" className="imge"/>
                <div className="detailss">
                    <h2>exteriors<samp></samp></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo optio architecto </p>
                    <div className="moree">
                        <a href="#" className="read-more">Red <span>More</span></a>
                        <div className="icon-links">
                            <a href="#"><i className="bi bi-cart-fill"></i></a>
                            <a href="#"><i className="bi bi-heart-fill"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* end-image */}
            <div className="imagee">
                <img src='https://gdb.voanews.com/14756E5B-84EF-4B4C-97C6-37B4BE883203_w1080_h608_s.png' alt="Hogar" className="imge"/>
                <div className="detailss">
                    <h2>technology<samp></samp></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo optio architecto  </p>
                    <div className="moree">
                        <a href="#" className="read-more">Red <span>More</span></a>
                        <div className="icon-links">
                            <a href="#"><i class="bi bi-cart-fill"></i></a>
                            <a href="#"><i class="bi bi-heart-fill"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* end-image */}
            <div className="imagee">
                <img src='https://www.gannett-cdn.com/-mm-/675ba115506e09d3d7e32d07055fdcb503ebe995/c=0-2-1272-718/local/-/media/2020/05/28/USATODAY/usatsports/Reviewed.com-RvEW-24856-lead.jpg?width=660&height=372&fit=crop&format=pjpg&auto=webp' alt="Hogar" className="imge"/>
                <div className="detailss">
                    <h2>pets<samp></samp></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo optio architecto  </p>
                    <div className="moree">
                        <a href="#" className="read-more">Read<span>More</span></a>
                        <div className="icon-links">
                            <a href="#"><i class="bi bi-cart-fill"></i></a>
                            <a href="#"><i class="bi bi-heart-fill"></i></a>
                        </div>
                    </div>
                </div>
            </div>
      </div>
      
      </>
    )
  }
