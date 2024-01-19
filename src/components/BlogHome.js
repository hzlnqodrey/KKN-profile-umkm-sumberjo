import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

class BlogHome extends React.Component{

  state = {
    blogs: []
  }

  constructor(props){
    super(props);

    axios.get('https://tediapi-master-production-ap557g5ogq-et.a.run.app/api/article/published').then(response => {
      console.log(response.data.data);
      this.setState({
        blogs: response.data.data
      })
      console.log(this.state.blogs);
    })
  }

  render(){
    return(
      <div className='flex justify-center'>
        <Splide 
          hasTrack={ false } 
          aria-label="Blog"
          options={ {
            perPage: 3,
            gap: '2rem',
            width: '80vw',
            breakpoints: {
              1024:{
  
              },
              768: {
                perPage: 2,
              },
              500: {
                width: '60vw',
                perPage: 1,
              },
            }
          } }>
          <SplideTrack>
            {this.state.blogs.map(blog => 
              <SplideSlide key={blog.article_id}>
                <div className="flex flex-col shadow-lg rounded-xl mb-10">
                  <img src={blog.article_img} alt="blog" className="h-52 object-cover rounded-lg" />
                  <div className="p-5">
                    <h2 className="text-lg lg:text-xl font-bold pb-5">{blog.title}</h2>
                    <p className="lg:text-lg truncate">{blog.content}</p>
                    <div className='flex justify-end'>
                      <NavLink to={'blog/' + blog.article_id} className="bg-yellow1 hover:bg-yellow2 px-4 py-2 rounded-lg font-bold mt-10">Baca selengkapnya</NavLink>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            )}
          </SplideTrack>
          
          <div className="splide__arrows relative">
            <button className="splide__arrow splide__arrow--prev absolute -left-16 -top-72"><img src="../images/Asset/prev-green.svg" alt="prev"/></button>
            <button className="splide__arrow splide__arrow--next absolute -right-16 -top-72"><img src="../images/Asset/next-green.svg" alt="next"/></button>
          </div>
        </Splide>
      </div>
  
    )
  }
}

export default BlogHome;