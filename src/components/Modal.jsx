import { View, Text } from 'react-native'
import '../styles/CourseCard.css';
import { useState } from 'react';

const Modal = ({ courses }) => {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <View>
            {modal && (
                <article className='modal'>
                    <div className='overlay'></div>
                    <div className="model-content">
                        <h4>{course.title}</h4>
                        <img src={course.imageUrl} alt={course.title} />
                    </div>
                </article>
            )}
        </View>
    );
};

export default CourseList;