import React from 'react';
import './Profile.css'; // Import your CSS file

const Profile = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="logo">
          <img src="/Instagram_logo.svg" alt="Instagram Logo" />
        </div>
        <div className="menu">
          <a href="#"><i className="fas fa-home"></i> Home</a>
          <a href="#"><i className="fas fa-search"></i> Search</a>
          <a href="#"><i className="far fa-compass"></i> Explore</a>
          <a href="#"><i className="fas fa-clapperboard"></i> Reels</a>
          <a href="#"><i className="far fa-comment"></i> Messages</a>
          <a href="#"><i className="far fa-heart"></i> Notifications</a>
          <a href="#"><i className="far fa-square-plus"></i> Create</a>
          <a href="#"><img src="/me.png" className="sidebar-profile-pic" alt="Profile" /> Profile</a>
        </div>
        <div className="bottom-menu">
          <a href="#"><i className="fas fa-at"></i> Threads</a>
          <a href="#"><i className="fas fa-bars"></i> More</a>
        </div>
      </div>
      <div className="profile-container">
        <div className="profile-header">
          <img className="profile-pic" src="/me.png" alt="Profile Picture" />
          <div className="profile-info">
            <div className="profile-actions">
              <h1>Yanqiu_Hu</h1>
              <button className="btn">Edit profile</button>
              <button className="btn">View archive</button>
              <i className="fas fa-cog"></i>
            </div>
            <div className="profile-stats">
              <p>3 posts</p>
              <p>116 followers</p>
              <p>149 following</p>
            </div>
            <div className="profile-bio">
              <span>Yanqiu Hu</span>
              <span className="profile-sub-bio">Laura</span>
              <span>unc 2027</span>
            </div>
          </div>
        </div>
        <div className="new-highlight">
          <img src="/Plus_icon.png" alt="Plus Icon" width="50" className="plus-icon" />
          <p className="highlight-styles">New</p>
        </div>
        <div className="profile-nav">
          <div className="post-filters">
            <i className="fas fa-th"></i><span>POSTS</span>
          </div>
          <div className="post-filters">
            <i className="fa-regular fa-bookmark"></i><span>SAVED</span>
          </div>
          <div className="post-filters">
            <i className="far fa-user"></i><span>TAGGED</span>
          </div>
        </div>
        <div className="profile-posts">
          <img src="/post.png" alt="Profile Posts" width="100%" />
        </div>
      </div>
    </div>
  );
};

export default Profile;