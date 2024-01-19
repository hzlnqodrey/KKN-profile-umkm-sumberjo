import { Route, Routes } from 'react-router-dom';
import Navbar from './parts/Navbar';
import Footer from './parts/Footer';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';

function App() {
  return (
    <div className="font-plus-jakarta">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
