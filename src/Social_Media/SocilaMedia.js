import React from 'react'

import './Social.css'

const SocilaMedia = () => {
  return (
    <div>
    <nav className='nav-social-medi'>
      <div className="left">
        <div className="logo">
      <h1 className='font-bold text-primary text-2xl'>marriage.com</h1>
        </div>
        <div className="search_bar">
          <i className="fa-solid fa-magnifying-glass" />
          <input type="text" placeholder="Search EBook" />
        </div>
      </div>
      <div className="center">
        <i className="fa-solid fa-house" />
        <i className="fa-solid fa-tv" />
        <i className="fa-solid fa-store" />
        <i className="fa-solid fa-users" />
      </div>

      <div className="right">
        <i className="fa-solid fa-list-ul" />
        <i className="fa-brands fa-facebook-messenger" />
        <i className="fa-solid fa-bell" />
        <i className="fa-solid fa-moon" />
        <img src="image/profile.png" />
      </div>

    </nav>
    {/*----------mainv-------------*/}
    <div className="mainv">
      {/*----------------left-----------------*/}
      <div className="left">
        <div className="img">
          <img src="image/profile.png" />
          <p>John Deo</p>
        </div>
        <div className="img">
          <img src="image/friend.png" />
          <p>Friends</p>
        </div>
        <div className="img">
          <img src="image/saved.png" />
          <p>Saved</p>
        </div>
        <div className="img">
          <img src="image/group.png" />
          <p>Groups</p>
        </div>
        <div className="img">
          <img src="image/marketplace.png" />
          <p>Marketplace</p>
        </div>
        <div className="img">
          <img src="image/watch.png" />
          <p>Watch</p>
        </div>
        <div className="img">
          <img src="image/down_arrow.png" />
          <p>See more</p>
        </div>
        <hr />
        <h2>You shortcuts</h2>
        <p className="edit">Edit</p>
        <div className="shortcuts">
          <img src="image/shortcuts_1.png" />
          <p>MOBILE GAMES</p>
        </div>
        <div className="shortcuts">
          <img src="image/shortcuts_2.jpeg" />
          <p>Online Education</p>
        </div>
        <div className="shortcuts">
          <img src="image/shortcuts_3.webp" />
          <p>Food Lovers</p>
        </div>
        <div className="shortcuts">
          <img src="image/shortcuts_4.png" />
          <p>Social Media Academy</p>
        </div>
        <div className="shortcuts">
          <img src="image/shortcuts_5.webp" />
          <p>PC Shop</p>
        </div>
        <div className="shortcuts">
          <img src="image/down_arrow.png" />
          <p>See more</p>
        </div>
      </div>
      {/*----------center--------------------*/}
      <div className="center">
        <div className="top_box">
          <div className="my_story_card">
            <img src="image/story_1.png" />
            <div className="story_upload">
              <img src="image/upload.png" />
              <p className="story_tag">Create story</p>
            </div>
          </div>
          <div className="story_card">
            <img src="image/story_2.jpg" />
            <div className="story_profile">
              <img src="image/profile_1.jpg" />
              <div className="cricle" />
            </div>
            <div className="story_name">
              <p className="name">Charith Disanayaka</p>
            </div>
          </div>
          <div className="story_card">
            <img src="image/story_3.jpg" />
            <div className="story_profile">
              <img src="image/profile_2.jpg" />
              <div className="cricle" />
            </div>
            <div className="story_name">
              <p className="name">Minidu Thiranjana</p>
            </div>
          </div>
          <div className="story_card">
            <img src="image/story_4.png" />
            <div className="story_profile">
              <img src="image/profile_3.jpg" />
              <div className="cricle" />
            </div>
            <div className="story_name">
              <p className="name">Kavisha Vidurangi</p>
            </div>
          </div>
          <div className="story_card">
            <img src="image/story_5.jpg" />
            <div className="story_profile">
              <img src="image/profile_4.png" />
              <div className="cricle" />
            </div>
            <div className="story_name">
              <p className="name">Kavindu Akalanka</p>
            </div>
          </div>
        </div>
        <div className="my_post">
          <div className="post_top">
            <img src="image/profile.png" />
            <input type="text" placeholder="What's on you mind, John?" />
          </div>
          <hr />
          <div className="post_bottom">
            <div className="post_icon">
              <i className="fa-solid fa-video red" />
              <p>Live video</p>
            </div>
            <div className="post_icon">
              <i className="fa-solid fa-images green" />
              <p>Photo/video</p>
            </div>
            <div className="post_icon">
              <i className="fa-regular fa-face-grin yellow" />
              <p>Feeling/activity</p>
            </div>
          </div>
        </div>
        <div className="room flex">
          <div className="room_image">
            <img src="image/live_video.png" />
            <p className="room_tag">Create room</p>
          </div>
          <div className="room_profile grid lg:grid-cols-7">
            <img src="image/profile_1.jpg" />
            <img src="image/profile_2.jpg" />
            <img src="image/profile_3.jpg" />
            <img src="image/profile_4.png" />
            <img src="image/profile_5.png" />
            <img src="image/profile_6.png" />
            <img src="image/profile_7.png" />
            <img src="image/profile_8.png" />
          </div>
        </div>
        <div className="friends_post">
          <div className="friend_post_top">
            <div className="img_and_name">
              <img src="https://i.ibb.co/m9ndN9D/post-1.jpg" />
              <div className="friends_name">
                <p className="friends_name">
                  Senuda De Silva
                </p>
                <p className="time">16h.<i className="fa-solid fa-user-group" /></p>
              </div>
            </div>
            <div className="menu">
              <i className="fa-solid fa-ellipsis" />
            </div>
          </div>
          <img src="https://i.ibb.co/m9ndN9D/post-1.jpg" />
          <div className="info">
            <div className="emoji_img">
              <img src="image/like.png" />
              <img src="image/haha.png" />
              <img src="image/heart.png" />
              <p>You, Charith Disanayaka and 25K others</p>
            </div>
            <div className="comment">
              <p>421 Comments</p>
              <p>1.3K Shares</p>
            </div>
          </div>
          <hr />
          <div className="like">
            <div className="like_icon">
              <i className="fa-solid fa-thumbs-up activi" />
              <p>Like</p>
            </div>
            <div className="like_icon">
              <i className="fa-solid fa-message" />
              <p>Comments</p>
            </div>
            <div className="like_icon">
              <i className="fa-solid fa-share" />
              <p>Share</p>
            </div>
          </div>
          <hr />
          <div className="comment_warpper">
            <img src="image/profile.png" />
            <div className="circle" />
            <div className="comment_search">
              <input type="text" placeholder="Write a comment" />
              <i className="fa-regular fa-face-smile" />
              <i className="fa-solid fa-camera" />
              <i className="fa-regular fa-note-sticky" />
            </div>
          </div>
        </div>
        <div className="friends_post">
          <div className="friend_post_top">
            <div className="img_and_name">
              <img src="image/profile_9.png" />
              <div className="friends_name">
                <p className="friends_name">
                  Senuda De Silva
                </p>
                <p className="time">16h.<i className="fa-solid fa-user-group" /></p>
              </div>
            </div>
            <div className="menu">
              <i className="fa-solid fa-ellipsis" />
            </div>
          </div>
          <img src="image/post_2.jpg" />
          <div className="info">
            <div className="emoji_img">
              <img src="image/like.png" />
              <img src="image/haha.png" />
              <img src="image/heart.png" />
              <p>You, Charith Disanayaka and 25K others</p>
            </div>
            <div className="comment">
              <p>421 Comments</p>
              <p>1.3K Shares</p>
            </div>
          </div>
          <hr />
          <div className="like">
            <div className="like_icon">
              <i className="fa-solid fa-thumbs-up activi" />
              <p>Like</p>
            </div>
            <div className="like_icon">
              <i className="fa-solid fa-message" />
              <p>Comments</p>
            </div>
            <div className="like_icon">
              <i className="fa-solid fa-share" />
              <p>Share</p>
            </div>
          </div>
          <hr />
          <div className="comment_warpper">
            <img src="image/profile.png" />
            <div className="circle" />
            <div className="comment_search">
              <input type="text" placeholder="Write a comment" />
              <i className="fa-regular fa-face-smile" />
              <i className="fa-solid fa-camera" />
              <i className="fa-regular fa-note-sticky" />
            </div>
          </div>
        </div>
        <div className="friends_post">
          <div className="friend_post_top">
            <div className="img_and_name">
              <img src="image/profile_10.png" />
              <div className="friends_name">
                <p className="friends_name">
                  Senuda De Silva
                </p>
                <p className="time">16h.<i className="fa-solid fa-user-group" /></p>
              </div>
            </div>
            <div className="menu">
              <i className="fa-solid fa-ellipsis" />
            </div>
          </div>
          <img src="image/post_3.png" />
          <div className="info">
            <div className="emoji_img">
              <img src="image/like.png" />
              <img src="image/haha.png" />
              <img src="image/heart.png" />
              <p>You, Charith Disanayaka and 25K others</p>
            </div>
            <div className="comment">
              <p>421 Comments</p>
              <p>1.3K Shares</p>
            </div>
          </div>
          <hr />
          <div className="like">
            <div className="like_icon">
              <i className="fa-solid fa-thumbs-up activi" />
              <p>Like</p>
            </div>
            <div className="like_icon">
              <i className="fa-solid fa-message" />
              <p>Comments</p>
            </div>
            <div className="like_icon">
              <i className="fa-solid fa-share" />
              <p>Share</p>
            </div>
          </div>
          <hr />
          <div className="comment_warpper">
            <img src="image/profile.png" />
            <div className="circle" />
            <div className="comment_search">
              <input type="text" placeholder="Write a comment" />
              <i className="fa-regular fa-face-smile" />
              <i className="fa-solid fa-camera" />
              <i className="fa-regular fa-note-sticky" />
            </div>
          </div>
        </div>
        <div className="friends_post">
          <div className="friend_post_top">
            <div className="img_and_name">
              <img src="image/profile_11.png" />
              <div className="friends_name">
                <p className="friends_name">
                  Senuda De Silva
                </p>
                <p className="time">16h.<i className="fa-solid fa-user-group" /></p>
              </div>
            </div>
            <div className="menu">
              <i className="fa-solid fa-ellipsis" />
            </div>
          </div>
          <img src="image/post_4.jpg" />
          <div className="info">
            <div className="emoji_img">
              <img src="image/like.png" />
              <img src="image/haha.png" />
              <img src="image/heart.png" />
              <p>You, Charith Disanayaka and 25K others</p>
            </div>
            <div className="comment">
              <p>421 Comments</p>
              <p>1.3K Shares</p>
            </div>
          </div>
          <hr />
          <div className="like">
            <div className="like_icon">
              <i className="fa-solid fa-thumbs-up activi" />
              <p>Like</p>
            </div>
            <div className="like_icon">
              <i className="fa-solid fa-message" />
              <p>Comments</p>
            </div>
            <div className="like_icon">
              <i className="fa-solid fa-share" />
              <p>Share</p>
            </div>
          </div>
          <hr />
          <div className="comment_warpper">
            <img src="image/profile.png" />
            <div className="circle" />
            <div className="comment_search">
              <input type="text" placeholder="Write a comment" />
              <i className="fa-regular fa-face-smile" />
              <i className="fa-solid fa-camera" />
              <i className="fa-regular fa-note-sticky" />
            </div>
          </div>
        </div>
        <div className="friends_post">
          <div className="friend_post_top">
            <div className="img_and_name">
              <img src="image/profile_12.jpg" />
              <div className="friends_name">
                <p className="friends_name">
                  Senuda De Silva
                </p>
                <p className="time">16h.<i className="fa-solid fa-user-group" /></p>
              </div>
            </div>
            <div className="menu">
              <i className="fa-solid fa-ellipsis" />
            </div>
          </div>
          <img src="image/post_5.jpg" />
          <div className="info">
            <div className="emoji_img">
              <img src="image/like.png" />
              <img src="image/haha.png" />
              <img src="image/heart.png" />
              <p>You, Charith Disanayaka and 25K others</p>
            </div>
            <div className="comment">
              <p>421 Comments</p>
              <p>1.3K Shares</p>
            </div>
          </div>
          <hr />
          <div className="like">
            <div className="like_icon">
              <i className="fa-solid fa-thumbs-up activi" />
              <p>Like</p>
            </div>
            <div className="like_icon">
              <i className="fa-solid fa-message" />
              <p>Comments</p>
            </div>
            <div className="like_icon">
              <i className="fa-solid fa-share" />
              <p>Share</p>
            </div>
          </div>
          <hr />
          <div className="comment_warpper">
            <img src="image/profile.png" />
            <div className="circle" />
            <div className="comment_search">
              <input type="text" placeholder="Write a comment" />
              <i className="fa-regular fa-face-smile" />
              <i className="fa-solid fa-camera" />
              <i className="fa-regular fa-note-sticky" />
            </div>
          </div>
        </div>
        <div className="loard">
          <button>Loard More</button>
        </div>
        <p className="end">Design By<span><i className="fa-regular fa-face-grin" />
            WT Master Code</span></p>
      </div>
      {/*----------------right----------------*/}
      <div className="right">
        <div className="first_warpper">
          <div className="page">
            <h2>Your Pages and profiles</h2>
            <div className="menu">
              <i className="fa-solid fa-ellipsis" />
            </div>
          </div>
          <div className="page_img">
            <img src="image/page.jpg" />
            <p>Web Designer</p>
          </div>
          <div className="page_icon">
            <i className="fa-regular fa-bell" />
            <p>20 Notifications</p>
          </div>
          <div className="page_icon">
            <i className="fa-solid fa-bullhorn" />
            <p>Create promotion</p>
          </div>
        </div>
        <hr />
        <div className="second_warpper">
          <h2>Birthdays</h2>
          <div className="img_and_tag">
            <img src="image/gift.png" />
            <p><span>Senuda De Silva </span>and<span> 2 others </span>have birthdays today</p>
          </div>
        </div>
        <hr />
        <div className="third_warpper">
          <div className="contact_tag">
            <h2>Contacts</h2>
            <div className="contact_icon">
              <i className="fa-solid fa-video" />
              <i className="fa-solid fa-magnifying-glass" />
              <i className="fa-solid fa-ellipsis" />
            </div>
          </div>
          <div className="contact">
            <img src="image/contact_1.jpg" />
            <p>Senuda De Silva</p>
          </div>
          <div className="contact">
            <img src="image/contact_2.jpg" />
            <p>Senuda De Silva</p>
          </div>
          <div className="contact">
            <img src="image/contact_3.jpg" />
            <p>Senuda De Silva</p>
          </div>
          <div className="contact">
            <img src="image/contact_4.jpg" />
            <p>Senuda De Silva</p>
          </div>
          <div className="contact">
            <img src="image/contact_5.jpg" />
            <p>Senuda De Silva</p>
          </div>
          <div className="contact">
            <img src="image/profile_1.jpg" />
            <p>Senuda De Silva</p>
          </div>
          <div className="contact">
            <img src="image/profile_2.jpg" />
            <p>Senuda De Silva</p>
          </div>
          <div className="contact">
            <img src="image/profile_3.jpg" />
            <p>Senuda De Silva</p>
          </div>
          <div className="contact">
            <img src="image/profile_4.png" />
            <p>Senuda De Silva</p>
          </div>
          <div className="contact">
            <img src="image/profile_5.png" />
            <p>Senuda De Silva</p>
          </div>
          <div className="contact">
            <img src="image/profile_6.png" />
            <p>Senuda De Silva</p>
          </div>
          <div className="contact">
            <img src="image/profile_7.png" />
            <p>Senuda De Silva</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SocilaMedia