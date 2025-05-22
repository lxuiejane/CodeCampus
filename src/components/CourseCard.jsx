import '../styles/CourseCard.css';
import { useState } from 'react';

const CourseCard = ({ course }) => {

  const [openOverlay, setOpenOverlay] = useState(false)

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
    <article className='course-card' onClick={() => setOpenOverlay(true)}>
      <figure className='course-image'>
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
      {
        openOverlay &&
        <article className='overlayDisplay'>
          <article>
            <div className='overlayFlex'>
              <button onClick={() => setOpenOverlay(false)}>X</button>
            </div>
          </article>
        </article>
      }
    </article>
  );
};

export default CourseCard;
