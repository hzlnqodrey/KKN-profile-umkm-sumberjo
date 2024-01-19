
import CardBlog from '../components/CardBlog';

function BlogList({dataSearch}){

  if(dataSearch.length === 0){
    return (
      <div className='text-center my-24'>
        <h1 className='text-3xl font-bold'>Blog Tidak Ada!</h1>
      </div>
    )
  }
  else{
    return (
      dataSearch.map(blog => (
        <CardBlog 
          key={blog.article_id}
          id={blog.article_id}
          title={blog.title}
          content={blog.content}
          img={blog.article_img}
          profile={blog.profile}
          author={blog.author_info.name}
          authorImage={blog.author_info.user_img}
        />
      ))
    )
  }

}

export default BlogList;
