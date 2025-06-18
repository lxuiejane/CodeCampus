import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Contact from './components/Contact';
import Faq from './components/Faq';
import Help from './components/Help';
import { courses } from './data/coursesData';
import './styles/App.css';

function AppLayout({ courseData, isLoading, error }) {
  return (
    <>
      <Nav />
      <header className='app-header'>
        <div className='logo-container'>
          <h1 className='brand-logo'>CodeCampus</h1>
          <p className='brand-tagline'>Ontdek, Leer, Excelleer</p>
        </div>
      </header>
      {isLoading ? (
        <section className="loading">Cursussen worden geladen...</section>
      ) : error ? (
        <section className="error">{error}</section>
      ) : null}

      <Routes>
        <Route
          path="/"
          element={
            !isLoading && !error ? (
              <Dashboard courseData={courseData} />
            ) : null
          }
        />
        <Route
          path="/profile"
          element={
            !isLoading && !error ? (
              <Profile courseData={courseData} />
            ) : null
          }
        />
        <Route
          path="/help"
          element={
            !isLoading && !error ? (
              <Help courseData={courseData} />
            ) : null
          }
        />
        <Route
          path="/faq"
          element={
            !isLoading && !error ? (
              <Faq courseData={courseData} />
            ) : null
          }
        />
        <Route
          path="/contact"
          element={
            !isLoading && !error ? (
              <Contact courseData={courseData} />
            ) : null
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

function App() {
  const [courseData, setCourseData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      try {
        setCourseData(courses);
      } catch (err) {
        setError('Er is een fout opgetreden bij het laden van de cursussen.');
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(fetchData, 1000);
  }, []);

  return (
    <BrowserRouter>
      <main className="app">
        <AppLayout
          courseData={courseData}
          isLoading={isLoading}
          error={error}
        />
      </main>
    </BrowserRouter>
  );
}

export default App;