import React from 'react';
import './CSS/Main.css'
const Main = () => {
  return (
    <main id='main'>
      <section id='picture'>
        <img id='img' src='https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2019/01/tips-for-professional-portraits_jpg.webp'></img>
      </section>
      <section id='text-content'>
        <article id='name'>Harsh Devavanshi</article>
        <article id='bio'>A full stack developer<br/> specialized in Java</article>
      </section>
    </main>
  );
};

export default Main;