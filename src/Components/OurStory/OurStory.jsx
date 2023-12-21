import React from 'react'
import './ourStory.css'
export const OurStory = () => {
  return (
    <div className='our-story'>
      <h1>About</h1>
     <h2>Who we are and why we do what we do!</h2>
    <div className="our-story-conteiner">
    <p className='our-story-text'>Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac sodales lectus placerat quis. </p>
     <div className="trend">
      <h2>Top trends</h2>
      <img src="/public/img/header/slider/05.png" alt="heand" />
      <p className='our-story-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. </p>
      <div className="trend-list">
      <span>●  </span><p> consectetur adipiscing elit. Aliquam placerat</p></div>
      <div className="trend-list"><span>●</span><p> Lorem ipsum dolor sit amet consectetur 
</p></div>

     </div>
     <div className="produced">
      <h2>Produced with care</h2>
      <img src="/public/img/header/slider/02.png" alt="heand" />
      <p className='our-story-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendu.</p>
     </div>
    </div>
    </div>
  )
}
