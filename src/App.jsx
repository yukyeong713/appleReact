//import logo from "./vite.svg";
import "./App.css"; //css파일 쓰려면 상단에서 import 'css파일 경로'
import { useState } from "react";

function App() {
  let post = "강남1 우동 맛집"; //서버에서 가져온 데이터라고 가정
  let [blogTitle1, setblogTitle1] = useState("남자 코트 추천");
  let [blogTitle2, setblogTitle2] = useState("강남 우동 맛집");
  let [blogTitle3, setblogTitle3] = useState("파이썬 독학");
  // a : state에 보관했던 자료 나옴
  // b : state 변경 도와주는 함수
  let [blogTitle, setblogTitle] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);

  let [따봉, 따봉변경] = useState(0);
  // 따봉변경 : state 변경용 함수, 이걸 써야 html 재렌더링도 잘됨.

  function blogTitleChange() {
    blogTitle[0] = "여자 코드 추천";
    setblogTitle([...blogTitle]);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "red", fontSize: "16px" }}>블로그</h4>
      </div>
      <div className="list">
        <h4>
          <span
            onClick={() => {
              setblogTitle1("여자 코트 추천");
            }}
          >
            {blogTitle1}
          </span>
          /
          <span
            onClick={blogTitleChange}
            //</h4>onClick={() => {
            //setblogTitle("여자 코트 추천2");
            //}}
          >
            {blogTitle[0]}
          </span>
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>
          {따봉}
        </h4>
        <p>4월 9일</p>
      </div>
      <div className="list">
        <h4>
          {blogTitle2}/{blogTitle[1]}
        </h4>
        <p>4월 9일</p>
      </div>
      <div className="list">
        <h4>
          {blogTitle3}/{blogTitle[2]}
        </h4>
        <p>4월 9일</p>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;
