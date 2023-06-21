import "./header.css"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">Talk & share</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img src="https://images.unsplash.com/photo-1630229446420-991180f9b69f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2VvdWwlMjBuaWdodHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" className="headerImg" />
    </div>
  )
}
