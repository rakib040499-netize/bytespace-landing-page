import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Auth from "./pages/Auth.jsx";
import {
  CourseDetail,
  CourseLessons,
  CourseReviews,
  CourseSearch,
  CreatorProfile,
  NotFound,
} from "./pages/CoursePages.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Auth mode="login" />} />
      <Route path="/signup" element={<Auth mode="signup" />} />
      <Route path="/courses" element={<CourseSearch />} />
      <Route path="/courses/:id" element={<CourseDetail />} />
      <Route path="/courses/:id/learn" element={<CourseLessons />} />
      <Route path="/courses/:id/reviews" element={<CourseReviews />} />
      <Route path="/creators/:creator" element={<CreatorProfile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
