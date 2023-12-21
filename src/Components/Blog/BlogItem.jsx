import React from "react";
import { useParams } from "react-router-dom";
import { sliderData } from "../../data/sliderData";
import { shopData } from "../../data/shopData";

export const BlogItem = () => {
  const { id } = useParams();
  const newSliderData = sliderData.filter((item) => item.id === id);
  const newShopData = shopData.filter((item) => item.id === id);
  return (
    <div className="blogItem">
      <div className="blogItem-head">
        <h1>Fast Fashion, And Faster Fashion</h1>
        <h4>
          by <span>ANNY JOHNSON</span> - October 8,2020
        </h4>
      </div>
      {newSliderData.map((item) => {
        return (
          <div className="blogItem1" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="blogItem1-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                placerat, augue a volutpat hendrerit, sapien tortor faucibus
                augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu
                facilisis consequat sed eu felis. Nunc sed porta augue.{" "}
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                placerat, augue a volutpat hendrerit, sapien tortor faucibus
                augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu
                facilisis consequat sed eu felis.{" "}
              </p>
            </div>
            {newShopData.map((item) => {
              return (
                <div className="blogItem2" key={item.id}>
                  <img src={item.image} alt={item.title} />
                  <div className="blogItem2-text">
                    <h3>Top trends</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam placerat, augue a volutpat hendrerit, sapien
                      tortor faucibus augue, a maximus elit ex vitae libero.
                    </p>
                    <div className="text-conteiner">
                      <ul className="text-list">
                        <li className="text-item">
                          <span></span> consectetur adipiscing elit. Aliquam
                          placerat
                        </li>
                        <li className="text-item">
                          <span></span> Lorem ipsum dolor sit amet consectetur{" "}
                        </li>
                        <li className="text-item">
                          <span></span> sapien tortor faucibus augue
                        </li>
                        <li className="text-item">
                          <span></span> a maximus elit ex vitae libero. Sed quis
                          mauris eget arcu facilisis
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
      <div className="blogItem-links">
        <button>Tags </button> <span>Fashion, Style, Season</span>
        <button>Share </button> <img src="/public/img/blog/Group.svg" alt="link" />
      </div>
      <div className="blogltem-reply">
        <h2>Leave a Reply</h2>
        <p>
          Your email address will not be published. Required fields are marked *
        </p>
        <div className="reply-form">
        <input type="text" placeholder="Enter your name*" />
        {/* <img src="/public/img/blog/butClose.svg" alt="" /> */}
          <input type="email" placeholder="Enter your Email*" />
          <input type="text" placeholder="Enter your Website" />
          <div className="save">
            <span></span>
            <p>
              Save my name, email, and website in this browser for the next time
              I comment
            </p>
          </div>
          <textarea placeholder="Your Comment*"></textarea> <br />
          <button>SEND MESSAGE</button>
        </div>
      </div>
      <div className="blogitem-comments">
        <h2>Comments(3)</h2>
        <div className="comments">
    <div className="answer-question">
    <div className="comments-text">
            <img src="/public/img/blog/01.png" alt="img" />
           <div className="rep">
           <span></span>
            <p>Reply</p>
           </div>
            <div className="comments-text-question">
              <h3>
              Scarlet withch <span>6 May, 2020</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                placerat, augue a volutpat hendrerit,{" "}
              </p>
            </div>
          </div>
          <div className="comments-text answer">
            <img src="/public/img/blog/02.png" alt="img" />
            <div className="rep-answer">
           <span></span>
            <p>Reply</p>
           </div>
            <div className="comments-text-answer">
              <h3>
              Scarlet withch <span>6 May, 2020</span>
              </h3>
              <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod. {" "}
              </p>
            </div>
          </div>
    </div>
        </div>
        <div className="comments-text">
            <img src="/public/img/blog/01.png" alt="img" />
           <div className="rep">
           <span></span>
            <p>Reply</p>
           </div>
            <div className="comments-text-question">
              <h3>
              Scarlet withch <span>6 May, 2020</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                placerat, augue a volutpat hendrerit,{" "}
              </p>
            </div>
          </div>
      </div>
    </div>
  );
};
