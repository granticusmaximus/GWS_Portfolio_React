import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./components/constants/routes";
import NavMenu from "./components/UI/NavMenu";
import Footer from "./components/UI/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import AllPosts from "./components/pages/AllPosts";
import OnePost from "./components/pages/OnePost";
import ThankYou from "./components/pages/ThankYou";
import PurchaseThankYou from "./components/pages/PurchaseThankYou";
import GetStarted from "./components/pages/Products/GetStarted";
import Dashboard from "./components/pages/Account/Dashboard";
import Login from "./components/pages/auth/Login";
import Register from "./components/pages/auth/Register";
import Reset from "./components/pages/auth/Reset";
import NoteManager from "./components/pages/Notes/NoteManager";
import AddNote from "./components/pages/Notes/AddNote";
import EditNote from "./components/pages/Notes/EditNote";
import TaskManager from "./components/pages/Tasks/TaskManager";
import AddTask from "./components/pages/Tasks/AddTask";
import EditTask from "./components/pages/Tasks/EditTask";
import BlogList from "./components/pages/Articles/BlogList";
import CreateBlog from "./components/pages/Articles/create";
import BlogView from "./components/pages/Articles/show";

function App() {
  return (
    <div class="app">
      <br />
      <NavMenu />
      <Router>
        <Routes>
          <Route exact path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.PROJECTS} element={<Portfolio />} />
          <Route path={ROUTES.BLOG} element={<AllPosts />} />
          <Route path={ROUTES.SINGLE_POST} element={<OnePost />} />
          <Route path={ROUTES.THANK_YOU} element={<ThankYou />} />
          <Route
            path={ROUTES.PURCHASE_THANK_YOU}
            element={<PurchaseThankYou />}
          />
          <Route path={ROUTES.GET_STARTED} element={<GetStarted />} />
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
          <Route path={ROUTES.REGISTER} element={<Register />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.RESET} element={<Reset />} />
          <Route path={ROUTES.NOTE_LIST} element={<NoteManager />} />
          <Route path={ROUTES.ADD_NOTE} element={<AddNote />} />
          <Route path={ROUTES.EDIT_NOTE} element={<EditNote />} />
          <Route path={ROUTES.TODO} element={<TaskManager />} />
          <Route path={ROUTES.ADD_TASK} element={<AddTask />} />
          <Route path={ROUTES.EDIT_TASK} element={<EditTask />} />
          <Route path={ROUTES.ARTICLES} element={<BlogList />} />
          <Route path={ROUTES.CREATE_ARTICLE} element={<CreateBlog />} />
          <Route path={ROUTES.SINGLE_ARTICLE} element={<BlogView />} />
        </Routes>
      </Router>
      <div className="bottom">
        <Footer />
      </div>
    </div>
  );
}

export default App;
