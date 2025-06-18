import { useState, useEffect } from 'react';
import '../styles/Dashboard.css';
import CourseList from './CourseList';
import PopularCourses from './PopularCourses';
import Statistics from './Statistics';

const Dashboard = ({ courseData }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchInput, setSearchInput] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('selectedCategories')) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
      setFavoriteIds(storedFavorites);
    } catch (error) {
      console.error('Fout bij het parsen van favorieten uit localStorage:', error);
      setFavoriteIds([]);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => localStorage.setItem('activeTab', activeTab), [activeTab]);
  useEffect(() => localStorage.setItem('searchInput', searchInput), [searchInput]);
  useEffect(() => localStorage.setItem('sortOption', sortOption), [sortOption]);
  useEffect(() => localStorage.setItem('selectedCategories', JSON.stringify(selectedCategories)), [selectedCategories]);

  const parseDurationToMinutes = (durationStr) => {
    if (!durationStr) return 0;
    if (durationStr.includes(':')) {
      const [hours, minutes] = durationStr.split(':').map(Number);
      return hours * 60 + minutes;
    }
    const lower = durationStr.toLowerCase();
    if (lower.includes('uur')) return parseFloat(lower) * 60;
    if (lower.includes('min')) return parseFloat(lower);
    return parseFloat(durationStr) || 0;
  };

  const getAllCategories = () => {
    const all = courseData?.flatMap(course => course.categories || []);
    return [...new Set(all)];
  };

  const toggleCategory = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    localStorage.removeItem('selectedCategories');
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredCourses = () => {
    if (!courseData || !Array.isArray(courseData)) return [];

    let filtered = courseData;

    if (activeTab === 'beginner') {
      filtered = filtered.filter((course) => course.level === 'Beginner');
    } else if (activeTab === 'gevorderd') {
      filtered = filtered.filter((course) => course.level === 'Gevorderd');
    } else if (activeTab === 'populair') {
      filtered = [...filtered].sort((a, b) => b.views - a.views);
    } else if (activeTab === 'filteren' && selectedCategories.length > 0) {
      filtered = filtered.filter((course) =>
        course.categories?.some((category) => selectedCategories.includes(category))
      );
    }

    if (searchInput.trim() !== '') {
      const lowerSearch = searchInput.toLowerCase();
      filtered = filtered.filter(
        (course) =>
          course.title.toLowerCase().includes(lowerSearch) ||
          course.description.toLowerCase().includes(lowerSearch)
      );
    }

    if (sortOption === 'views') {
      filtered.sort((a, b) => b.views - a.views);
    } else if (sortOption === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === 'duration') {
      filtered.sort((a, b) =>
        parseDurationToMinutes(b.duration) - parseDurationToMinutes(a.duration)
      );
    }

    return filtered;
  };

  return (
    <section className='dashboard'>
      <div className="search">
        <input
          className='search-style'
          type="text"
          placeholder="Zoek een titel, trefwoord op"
          onChange={handleChange}
          value={searchInput}
          name="search"
        />
      </div>
      <header className='dashboard-header'>
        <nav className='tab-buttons'>
          <button className={activeTab === 'all' ? 'active' : ''} onClick={() => setActiveTab('all')}>Alle Cursussen</button>
          <button className={activeTab === 'beginner' ? 'active' : ''} onClick={() => setActiveTab('beginner')}>Voor Beginners</button>
          <button className={activeTab === 'gevorderd' ? 'active' : ''} onClick={() => setActiveTab('gevorderd')}>Gevorderd</button>
          <button className={activeTab === 'populair' ? 'active' : ''} onClick={() => setActiveTab('populair')}>Meest Bekeken</button>
          <button className={activeTab === 'filteren' ? 'active' : ''} onClick={() => setActiveTab('filteren')}>Meer Filter</button>
        </nav>
      </header>

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

      {activeTab === 'filteren' && (
        <div className='category-filter'>
          <h3>Categorieën</h3>
          <div className='category-buttons'>
            {getAllCategories().map((category) => (
              <button
                key={category}
                className={selectedCategories.includes(category) ? 'category selected' : 'category'}
                onClick={() => toggleCategory(category)}
              >
                {category}
              </button>
            ))}
            <button onClick={clearFilters} className='clear-filters'>Wissen</button>
          </div>
        </div>
      )}

      <div className='dashboard-content'>
        <section className='main-content'>
          <h2>
            {activeTab === 'all' && 'Alle Cursussen'}
            {activeTab === 'beginner' && 'Cursussen voor Beginners'}
            {activeTab === 'gevorderd' && 'Gevorderde Cursussen'}
            {activeTab === 'populair' && 'Meest Bekeken Cursussen'}
            {activeTab === 'filteren' && 'Meer Filter Keuze'}
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
