import '../styles/CourseCard.css';
import { useState } from 'react';

const CourseCard = ({ course }) => {

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal)
  }

  if (!course)
    return (
      <article className='course-card empty'>
        Geen cursus informatie beschikbaar
      </article>
    );

  const openCourseVideo = (url) => () => {
    window.open(url, '_blank', 'noopener, noreferrer');
    // 'noopener, noreferrer' is added for security and performance.
    // noopener: Prevents the new tab from having access to the window.opener object, which can be a security risk. Without it, the opened page can potentially:
    // Redirect your original page. Manipulate its contents (phishing risk)
    // noreferrer: Prevents the browser from sending the Referer header, which might otherwise reveal the URL of your site to the new tab.
    // BUT, it's not strictly required. Just highly recommended.
  };

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
            <h3 className='modaltext'>{course.title}</h3>
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
