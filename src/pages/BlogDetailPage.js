import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import withRouter from '../hooks/withRouter';

import BlogHome from '../components/BlogHome';

function BlogDetailPage() {
  const [blog, setBlog] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios.get("https://tediapi-master-production-ap557g5ogq-et.a.run.app/api/article/published/" + id).then(res => {
      setBlog(res.data.data);
    })
  }, []);

  console.log(blog);

  return (
    <div id='detailBlog' className='px-6 lg:px-20 xl:px-40 pt-32'>
      <div className='header mb-8'>
        {/* <p className="mb-4">Blog ditulis oleh <span className='font-bold'>Syarifah Lailbaity</span></p> */}
        <p className="mb-4">Blog ditulis oleh <span className='font-bold'>{blog.author_info ? blog.author_info.name : ""}</span></p>
        <div className='flex flex-col md:flex-row md:items-center'>
          <div className='md:basis-3/4'>
            <h1 className="md:pr-5 text-4xl text-blue1 font-bold">{blog.title}</h1>
          </div>
          <div className='md:basis-1/4'>
            <img src={blog.article_img} alt='blog' className='mt-5 object-cover h-44' />
          </div>
        </div>
      </div>
      <div className='grid gap-5'>
        <p>{blog.paragraph1 ? blog.paragraph1 : ""}</p>
        <p>{blog.paragraph2 ? blog.paragraph2 : ""}</p>
        <p>{blog.paragraph3 ? blog.paragraph3 : ""}</p>
        <p>{blog.paragraph4 ? blog.paragraph4 : ""}</p>
        <p>{blog.paragraph5 ? blog.paragraph5 : ""}</p>
        <p>{blog.paragraph6 ? blog.paragraph6 : ""}</p>
        <p>{blog.paragraph7 ? blog.paragraph7 : ""}</p>
        <p>{blog.paragraph8 ? blog.paragraph8 : ""}</p>
        <p>{blog.paragraph9 ? blog.paragraph9 : ""}</p>
        <p>{blog.paragraph10 ? blog.paragraph10 : ""}</p>
      </div>

      <div id="blog" className="py-20 min-h-[700px] flex flex-col lg:items-center lg:justify-center px-8 lg:px-24">
        <h1 className="text-2xl lg:text-4xl text-center font-bold mb-20">Blog</h1>
        <BlogHome />
      </div>
    </div>
  ) 
    
}

export default withRouter(BlogDetailPage);