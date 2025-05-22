import { useState } from 'react';
import '../styles/Dashboard.css';
import CourseList from './CourseList';
import PopularCourses from './PopularCourses';
import Statistics from './Statistics';

const Dashboard = ({ courseData }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchInput, setSearchInput] = useState('');
  const [sortOption, setSortOption] = useState('');

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredCourses = () => {
    if (!courseData || !Array.isArray(courseData)) return [];

    let filtered = courseData;

    // Filter by tab
    if (activeTab === 'beginner') {
      filtered = filtered.filter((course) => course.level === 'Beginner');
    } else if (activeTab === 'gevorderd') {
      filtered = filtered.filter((course) => course.level === 'Gevorderd');
    } else if (activeTab === 'populair') {
      filtered = [...filtered].sort((a, b) => b.views - a.views);
    }

    // Filter by search input
    if (searchInput.trim() !== '') {
      filtered = filtered.filter((course) =>
        course.title.toLowerCase().includes(searchInput.toLowerCase())
      );
    }

    // Sort based on selected sort option (unless already sorted in 'populair')
    if (activeTab !== 'populair') {
      if (sortOption === 'views') {
        filtered = [...filtered].sort((a, b) => b.views - a.views);
      } else if (sortOption === 'rating') {
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
      } else if (sortOption === 'duration') {
        filtered = [...filtered].sort((a, b) => a.duration - b.duration);
      }
    }

    return filtered;
  };

  return (
    <section className='dashboard'>
      <div className="search">
        <input
          className='search-style'
          type="text"
          placeholder="Zoek een titel op"
          onChange={handleChange}
          value={searchInput}
          name="search"
        />
      </div>
      <header className='dashboard-header'>
        <nav className='tab-buttons'>
          <button
            className={activeTab === 'all' ? 'active' : ''}
            onClick={() => setActiveTab('all')}
          >
            Alle Cursussen
          </button>
          <button
            className={activeTab === 'beginner' ? 'active' : ''}
            onClick={() => setActiveTab('beginner')}
          >
            Voor Beginners
          </button>
          <button
            className={activeTab === 'gevorderd' ? 'active' : ''}
            onClick={() => setActiveTab('gevorderd')}
          >
            Gevorderd
          </button>
          <button
            className={activeTab === 'populair' ? 'active' : ''}
            onClick={() => setActiveTab('populair')}
          >
            Meest Bekeken
          </button>
        </nav>
      </header>

      {/* Sorteer-dropdown */}
      <div className='sort-container'>
        <label htmlFor='sort'>Sorteer op: </label>
        <select
          id='sort'
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className='sort-dropdown'
        >
          <option value=''>Standaard</option>
          <option value='views'>Populariteit</option>
          <option value='rating'>Rating</option>
          <option value='duration'>Duur</option>
        </select>
      </div>

      <div className='dashboard-content'>
        <section className='main-content'>
          <h2>
            {activeTab === 'all'
              ? 'Alle Cursussen'
              : activeTab === 'beginner'
                ? 'Cursussen voor Beginners'
                : activeTab === 'gevorderd'
                  ? 'Gevorderde Cursussen'
                  : 'Meest Bekeken Cursussen'}
          </h2>
          <CourseList courses={filteredCourses()} />
        </section>

        <aside className='sidebar'>
          <PopularCourses courses={courseData} />
          <Statistics courses={courseData} />
        </aside>
      </div>
    </section>
  );
};

export default Dashboard;
