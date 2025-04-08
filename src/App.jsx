//import logo from "./vite.svg";
import "./App.css"; //css파일 쓰려면 상단에서 import 'css파일 경로'

function App() {
  let post = "강남 우동 맛집"; //서버에서 가져온 데이터라고 가정

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "red", fontSize: "16px" }}>블로그</h4>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;
