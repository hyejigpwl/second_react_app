import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/movie/Home";
import Detail from "./routes/movie/Detail";
import Main from "./routes";
import TodoList from "./routes/TodoList";
import CoinTracker from "./routes/CoinTracker";

function App(){
    return(
        <Router>
            <Routes>
                {/* 메인 페이지 */}
                <Route path="/" element={<Main />} />

                {/* todo list */}
                <Route path="/todo-list" element={<TodoList />} />

                {/* coin tracker */}
                <Route path="/coin-tracker" element={<CoinTracker />} />

                {/* movie app */}
                <Route path="/movie" element={<Home />} />
                <Route path="/movie/detail/:id" element={<Detail />} />
            </Routes>
        </Router>
    ); 
};

export default App;