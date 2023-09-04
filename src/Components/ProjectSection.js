import React, { useEffect, useState } from 'react';
import './CSS/Cards.css'
import Card from './Cards';


const ProjectSection = () => {
    const [cardsData, setCardsData] = useState([]);
    useEffect(() => {
        setCardsData([
            {
                'img': 'https://www.inventiva.co.in/wp-content/uploads/2022/09/shopping-apps-780x470.jpeg',
                'title': 'Shopping App',
                'msg': 'Shopping Application Project: Developing a digital platform for users to browse, select, and purchase products, streamlining the shopping experience through user-friendly interfaces and secure transactions.',
            },
            {
                'img': 'https://www.crio.do/blog/content/images/2021/04/Javascript-projects---Amazon-Clone.png',
                'title': 'Amazon Clone Using React',
                'msg': 'Developed an Amazon clone using React, simulating key e-commerce functionalities. Implemented product listings, user authentication, shopping cart, and responsive design for a comprehensive web application mirroring the Amazon shopping experience.',
            },
            {
                'img': 'https://cdn.educba.com/academy/wp-content/uploads/2020/01/spring-boot-applivation.jpg',
                'title': 'CRUD Application',
                'msg': 'A CRUD application Spring Boot project implements Create, Read, Update, and Delete operations for managing data. It leverages Spring Boot\'s framework for streamlined development of efficient and scalable web applications.',
            },
            {
                'img': 'https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/5-Eye-Catching-Projects-for-a-Front-End-Developer-Portfolio-1.png',
                'title': 'Front End Graph Viewer',
                'msg': 'The Front End Graph Viewer Project is a web application that visually displays and interacts with graphs, aiding users in comprehending complex data relationships through an intuitive and interactive user interface.',
            }
        ])
    }, [])

    return (
        <div className='cards-container' id='projects'>
            <h1 id='cards-header'>Featured Projects</h1>
            <div className='all-cards'>
                {
                    cardsData.map((item, i) => (
                        <Card key={i} img={item.img} title={item.title} msg={item.msg} />
                    ))
                }
            </div>
        </div>
    );
};

export default ProjectSection;