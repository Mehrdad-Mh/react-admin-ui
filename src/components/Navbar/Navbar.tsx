import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="mehrdad.png" alt="logo" width={50} height={50} />
        <h3> داشبرد مدیریت </h3>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="links icon" className="icon" />
        <img src="/app.svg" alt="links icon" className="icon" />
        <img src="/expand.svg" alt="links icon" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiuWlctPyLlNV9EZpflVynIX4Wn6fxzuT4cxB2gU0P0A&s"  alt="" />
          <span>  مهرداد  </span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
}
