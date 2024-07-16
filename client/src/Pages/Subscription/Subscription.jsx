
  import LeftSlifBar from '../../Componets/LeftSlidBar/LeftSlifBar'
  import love from '../../Componets/video/Tere Pyaar Mein (Full Video) Tu Jhoothi Main Makkaar_ Ranbir,Shraddha_ Pritam_Arijit,Nikhita,Amitabh.mp4';
  import { Link } from 'react-router-dom';
  import './Subscription.css'
  const Subscription = () => {
    const Subscription = [
      {
        _id: 1,
        video_src: love,
        channel: "63646547636f73736",
        title: "tera payr",
        uploader: "abc",
        Date: '1-1-2001',
        Name: "Hombly Movies"
      },
      {
        _id: 1,
        video_src: love,
        channel: "63646547636f73736",
        title: "tera payr",
        uploader: "abc",
        Date: '1-1-2001',
        Name: "Hombly Movies"
      },
      {
        _id: 1,
        video_src: love,
        channel: "63646547636f73736",
        title: "tera payr",
        uploader: "abc",
        Date: '1-1-2001',
        Name: "Hombly Movies"
      },
      {
        _id: 1,
        video_src: love,
        channel: "63646547636f73736",
        title: "tera payr",
        uploader: "abc",
        Date: '1-1-2001',
        Name: "Hombly Movies"
      },
      {
        _id: 1,
        video_src: love,
        channel: "63646547636f73736",
        title: "tera payr",
        uploader: "abc",
        Date: '1-1-2001',
        Name: "Hombly Movies"
      },
      {
        _id: 1,
        video_src: love,
        channel: "63646547636f73736",
        title: "tera payr",
        uploader: "abc",
        Date: '1-1-2001',
        Name: "Hombly Movies"
      },
    ];
    const truncateTitle = (title, maxLength) => {
      if (title.length > maxLength) {
        return title.substring(0, maxLength) + '...';
      }
      return title;
    };
    return (
    <>
    
    <div className="conatienr_home_page">
      <LeftSlifBar />
      <div className="conatienr_home_page_2">
        <div className="library_Subscription_container ">
          <div className="Subname">
            <div className="Sub_title">
              <div className="Sub_icon">
                <p>Latest</p>
              </div>
            </div>
          
          </div>
          <div className="Sub_content">
            {Subscription.map(item => (
              <div key={item._id} className="Sub_video_container">
                <Link  to={`/VideoPage/${item?._id}`}>
            
                <video src={item.video_src} controls className="Sub_video" onClick={()=>{<Link to={""}></Link>}}></video></Link>
            <div className="video_detail_Sub">
                  <h4>   {truncateTitle(item?.title || 'Title', 80)}</h4>
                  <p>{item.Name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
    )
  }

  export default Subscription

