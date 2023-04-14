import React from "react";
import Layout from './components/layout';
export default function Home() {
  return (
  <>
  <h1>Home</h1>
  {/*nav 바꾸기*/}
  <nav>For you | Following</nav>
  <div>
    <img />
    <span>What's happening?</span>
    <div>
      <img />
      <img />
      <img />
      <img />
      <img />
      <img />
    </div>
    <button>Tweet</button>
  </div>

  <div>
    {/*유저정보*/}
    <div>
      <img />
      <span>UserId</span>
      <span>9h</span>
    </div>
    {/*트윗내용*/}
    <div>
      <p>간접조명을 달 수 있는 모든 곳에 다 달고 있는...</p>
      <img />
    </div>
  </div>
  </>
  );

} 
