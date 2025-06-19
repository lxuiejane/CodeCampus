import '../styles/CourseCard.css';
import { useState, useEffect } from 'react';

const CourseCard = ({ course }) => {
  const [modal, setModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleModal = () => setModal(!modal);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.includes(course.id));
  }, [course.id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const updatedFavorites = isFavorite
      ? favorites.filter((favId) => favId !== course.id)
      : [...favorites, course.id];

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  const openCourseVideo = (url) => () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (!course) {
    return <p className="course-detail">Cursus niet gevonden.</p>;
  }

  return (
    <main>
      <article className='course-card'>
        <figure className='course-image' onClick={toggleModal}>
          <img src={course.imageUrl} alt={course.title} />
        </figure>
        <div className='course-content'>
          <h3>{course.title}</h3>
          <p className='course-description'>{course.description}</p>
          <dl className='course-details'>
            <div>
              <dt className='visually-hidden'>Niveau</dt>
              <dd className='level'>Niveau: {course.level}</dd>
            </div>
            <div>
              <dt className='visually-hidden'>Duur</dt>
              <dd className='duration'>Duur: {course.duration}</dd>
            </div>
          </dl>
          <footer className='course-stats'>
            <span className='members'>{course.members} leden</span>
            <span className='views'>{course.views} weergaven</span>
            <span className='rating'>⭐ {course.rating}</span>
          </footer>
          <div className='course-actions'>
            <button
              className='course-button'
              onClick={openCourseVideo(course.videoUrl)}
            >
              Bekijk Video
            </button>
          </div>
        </div>
      </article>

      {modal && (
        <article className='modal'>
          <div className='screen'></div>
          <div className="model-content">
            <img src={course.imageUrl} />
            <div className="flex">
              <h3 className='modaltext'>{course.title}</h3>
              <button
                className={`favorite__btn ${isFavorite ? 'favorited' : ''}`}
                onClick={toggleFavorite}
              >
                {isFavorite ? '★' : '☆'}
              </button>
            </div>
            <p className='coursedesc'>{course.description}</p>
            <p className='rating'>⭐ {course.rating}</p>
            <div className='course-details'>
              <div>
                <p className='visually-hidden'>Niveau</p>
                <p className='level'>Niveau: {course.level}</p>
              </div>
              <div>
                <p className='visually-hidden'>Duur</p>
                <p className='duration'>Duur: {course.duration}</p>
              </div>
            </div>
            <div className='flexcourse'>
              <p className='members'>{course.members} leden</p>
              <p className='views'>{course.views} weergaven</p>
            </div>
            <div className='course-actions'>
              <button className='course-button' onClick={toggleModal}>CLOSE</button>
              <button
                className='course-button'
                onClick={openCourseVideo(course.videoUrl)}
              >
                Bekijk Video
              </button>
            </div>
          </div>
        </article>
      )}
    </main>
  );
};

export default CourseCard;
