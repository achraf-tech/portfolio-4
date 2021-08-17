import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Benedikt",
      img: "https://media-exp1.licdn.com/dms/image/C4E03AQFZQaA_NM5wpw/profile-displayphoto-shrink_800_800/0/1535225134088?e=1630540800&v=beta&t=_2u-d4GOOwKzL1ydDXzE6S9RlEXRZwQXtqnPNB1W9D4",
      icon: "assets/twitter.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Andy",
      img: "",
      icon: "assets/youtube.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Derek",
      img: "https://media-exp1.licdn.com/dms/image/C5635AQHFiB7L4wHUDw/profile-framedphoto-shrink_800_800/0/1616410295340?e=1625133600&v=beta&t=VkMo-SIuQatic8IgYQu6UZdwi_vy8SeZ62CkY8vRKk0",
      icon: "assets/linkedin.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Teams</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={d.img} alt="" />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
