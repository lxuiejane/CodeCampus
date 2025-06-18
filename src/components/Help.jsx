import { Link } from "react-router-dom";
import '../styles/Pages.css';

const Faq = () => {
    return (
        <main className="container">
            <h2>Help</h2>
            <h3>???</h3>

            <section className="questions__container">
                <article className="question__box">
                    <h4>#1 | Wat is het doel van deze website?</h4>
                    <p>Deze website is bedoeld om jou te helpen leren programmeren via interactieve cursussen en video’s. Je kunt op je eigen tempo leren en je voortgang bijhouden.</p>
                </article>
                <article className="question__box">
                    <h4>#2 | Hoe begin ik met een cursus?</h4>
                    <p>Je drukt op een van onze vele lessen, hierbij kunt u de video bekijken en reeds zal u de uitleg krijgen over het materiaal.</p>
                </article>
                <article className="question__box">
                    <h4>#3 | Hoe houd ik mijn voortgang bij?</h4>
                    <p>Je kunt bij ons onder andere HTML, CSS, JavaScript, Python, Java en SQL leren. Ook bieden we frameworks aan zoals React, Node.js en Django.</p>
                </article>
                <article className="question__box">
                    <h4>#4 | Wat als ik hulp nodig heb?</h4>
                    <p>Je kunt ons bereiken via de <Link to="/contact" className="contact__btn">contact pagina</Link>. We proberen binnen 24 uur te reageren.</p>
                </article>
                <article className="question__box">
                    <h4>#5 | Op welke apparaten werkt de site?</h4>
                    <p>De website werkt op computers, tablets en smartphones. Voor de beste ervaring raden we aan om een moderne browser zoals Chrome of Firefox te gebruiken.</p>
                </article>
                <article className="question__box">
                    <h4>#6 | Hoe zoek ik cursussen op?</h4>
                    <p>Via de zoekbalk op de homepagina kan je je gewenste cursussen opzoeken.</p>
                </article>
                <article className="question__box">
                    <h4>#7 | Hoe werkt de filter functie?</h4>
                    <p>Simpel, je gaat naar de filter 'meer filter' op de homepagina en klik je de gewenste filters die je wilt hebben.</p>
                </article>
                <article className="question__box">
                    <h4>#8 | Hoe werkt de filter functie?</h4>
                    <p>Simpel, je gaat naar de filter 'meer filter' op de homepagina en klik je de gewenste filters die je wilt hebben.</p>
                </article>
            </section>
        </main>
    );
};

export default Faq;