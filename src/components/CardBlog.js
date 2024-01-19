import { NavLink } from 'react-router-dom';

function CardBlog({id, title, img, profile, author, authorImage}){
  return(
    <NavLink to={'' + id} className="rounded-2xl shadow-xl p-4">
      <img src={img} alt="blog" className="w-full mb-4 h-40 object-cover rounded-lg" />
      <h2 className="text-xl lg:text-xl font-bold">{title}</h2>
      <div className="flex items-center mt-4">
        <img src={authorImage} alt="profile" className="w-11 rounded-full" />
        <p className="ml-3">{author}</p>
      </div>
    </NavLink>
  )
}

export default CardBlog;