
import React, { useState } from 'react'
import Project1 from '../images/project1.webp'
import Project2 from '../images/project2.webp'
import Project3 from '../images/project3.webp'
import Project4 from '../images/project4.webp'
import Project5 from '../images/project5.webp'
import Project6 from '../images/project6.webp'




export default function Project() {
  const projectsData = [
    { id: 1, title: 'SEO Reporting Tools', category: 'Shopify', profile: Project1, url: '/' },
    { id: 2, title: 'Mobile App MERN', category: 'Shopify', profile: Project2, url: '/' },
    { id: 3, title: 'SEO Reporting Tools', category: 'Shopify', profile: Project2, url: '/' },
    { id: 4, title: 'Mobile App MERN', category: 'Shopify', profile: Project1, url: '/' },
    { id: 5, title: 'E-Commerce', category: 'Digital Marketing', profile: Project6, url: '/' },
    { id: 6, title: 'E-Commerce', category: 'Digital Marketing', profile: Project2, url: '/' },
    { id: 7, title: 'SEO React Website', category: 'React', profile: Project2, url: '/' },
    { id: 8, title: 'SEO React Website', category: 'React', profile: Project3, url: '/' },
    { id: 9, title: 'Creative Fashion MERNer', category: 'MERN', profile: Project5, url: '/' },
    { id: 10, title: 'React Trend 2022', category: 'MERN', profile: Project4, url: '/' },
    { id: 11, title: 'React Trend 2022', category: 'MERN', profile: Project4, url: '/' },
    { id: 12, title: 'Creative Fashion MERNer', category: 'MERN', profile: Project1, url: '/' },

    // Add more projects as needed
  ];
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeButton, setActiveButton] = useState('All');

  const handleFilterClick = (category) => {
    setActiveCategory(category);
    setActiveButton(category);
  };

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === activeCategory);


  return (
    <div className='container-fluid  text-light' id='project'>
      <h1 className='fs-5 opacity-75 text-center'>SELECTED WORK</h1>
      <h1 className='feature-heading text-center'>Our Latest Project</h1>

      <div className='buttons d-flex flex-wrap justify-content-center gap-2 mt-5'>

        <button onClick={() => handleFilterClick('All')} className={activeButton === 'All' ? 'first-btn btn' : 'btn p-btn'} >All</button>
        <button onClick={() => handleFilterClick('Shopify')} className={activeButton === 'Shopify' ? 'first-btn btn' : 'btn p-btn'} >Shopify</button>
        <button onClick={() => handleFilterClick('MERN')} className={activeButton === 'MERN' ? 'first-btn btn' : 'btn p-btn'}>MERN</button>
        <button onClick={() => handleFilterClick('Digital Marketing')} className={activeButton === 'Digital Marketing' ? 'first-btn btn' : 'btn p-btn'}>Digital Marketing</button>
        <button onClick={() => handleFilterClick('React')} className={activeButton === 'React' ? 'first-btn btn' : 'btn p-btn'}>React</button>
      </div>

      <div className="row mt-5  ">

        {filteredProjects.map(project => (

          <div className="col-md-4 p-5 ">
            <a href='' to={project.url} style={{ textDecoration: 'none' }}>
              <div className='img-overlay text-center'><img src={project.profile} alt="" className='img-fluid images' />
                <div className='btn-overlay fs-4 text-light'><span className='btn-border'>Veiw Details</span></div>
              </div>
              <p className='fs-6 fw-light pt-3 text-light opacity-75'>{project.category}</p>
              <h1 className='fs-4 text-light '>{project.title}</h1>
            </a></div>

        ))}




      </div>
    </div>
  )
}
