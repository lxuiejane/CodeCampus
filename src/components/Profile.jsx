import { useState, useEffect } from "react";
import '../styles/Dashboard.css';
import CourseList from './CourseList';

const Profile = ({ courseData = [] }) => {
    const [activeTab, setActiveTab] = useState('favorieten');
    const [favoriteIds, setFavoriteIds] = useState([]);
    const [viewedIds, setViewedIds] = useState([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavoriteIds(storedFavorites);

        const storedViewed = JSON.parse(localStorage.getItem('viewed')) || [];
        setViewedIds(storedViewed);
    }, [activeTab]); 

    const filteredCourses = () => {
        if (!courseData || !Array.isArray(courseData)) return [];

        if (activeTab === 'favorieten') {
            return courseData.filter(course => favoriteIds.includes(course.id));
        } else if (activeTab === 'bekeken') {
            return courseData.filter(course => viewedIds.includes(course.id));
        }
        return [];
    };

    const coursesToShow = filteredCourses();

    return (
        <main className="container">
            <h2>My Profile</h2>

            <header className="filtered__tabs">
                <nav className="tab-buttons">
                    <button
                        className={activeTab === 'favorieten' ? 'active' : ''}
                        onClick={() => setActiveTab('favorieten')}
                    >
                        ⭐ Favorieten
                    </button>

                    <button
                        className={activeTab === 'bekeken' ? 'active' : ''}
                        onClick={() => setActiveTab('bekeken')}
                    >
                        👁️ Bekeken
                    </button>
                </nav>
            </header>

            <section className='main-content'>
                <h2>
                    {activeTab === 'favorieten' && 'Mijn Favorieten'}
                    {activeTab === 'bekeken' && 'Bekeken Cursussen'}
                </h2>

                <section className="courses__list">
                    {coursesToShow.length > 0 ? (
                        <CourseList courses={coursesToShow} />
                    ) : (
                        <p className="no-courses-message">Geen cursussen gevonden.</p>
                    )}
                </section>
            </section>
        </main>
    );
};

export default Profile;

