import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img src="https://img.freepik.com/premium-photo/male-internet-hacker-hood-sitting-screens-back-view-illegal-web-programmer-workplace-criminal-occupation-data-hacking-cyber-security_266732-18744.jpg" alt="" className="postImg" />
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
