import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/2B87/production/_90934111_1-1.jpg" alt="" className="postImg" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">music</span>
                <span className="postCat">life</span>
            </div>
            <span className="postTitle">Javascript</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDescription">
        I am a full-stack web developer with strong knowledge of MongoDB, node.js, Javascript and front end technologies such react, jquery, Ejs and counting.Graduated University with degree in science of information technology. Strong mathematics and programming background.
        I am a full-stack web developer with strong knowledge of MongoDB, node.js, Javascript and front end technologies such react, jquery, Ejs and counting.Graduated University with degree in science of information technology. Strong mathematics and programming background.
        I am a full-stack web developer with strong knowledge of MongoDB, node.js, Javascript and front end technologies such react, jquery, Ejs and counting.Graduated University with degree in science of information technology. Strong mathematics and programming background.
        </p>
    </div>
  )
}
