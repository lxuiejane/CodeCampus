import { Link } from "react-router-dom";
import '../styles/Pages.css';

const Faq = () => {
    return (
        <main className="container">
            <h2>FAQ</h2>
            <h3>Frequently Asked Questions</h3>

            <section className="questions__container">
                <article className="question__box">
                    <h4>#1 | Wie zijn wij?</h4>
                    <p>Wij zijn CodeCampus! Een team van developers en docenten die mensen helpen bij het leren programmeren, of je nu net begint of al ervaring hebt.</p>
                </article>
                <article className="question__box">
                    <h4>#2 | Heb ik voorkennis nodig om te starten?</h4>
                    <p>Nee, je kunt zonder voorkennis beginnen. We hebben cursussen speciaal voor absolute beginners die je stap voor stap begeleiden.</p>
                </article>
                <article className="question__box">
                    <h4>#3 | Welke programmeertalen kan ik bij jullie leren?</h4>
                    <p>Je kunt bij ons onder andere HTML, CSS, JavaScript, Python, Java en SQL leren. Ook bieden we frameworks aan zoals React, Node.js en Django.</p>
                </article>
                <article className="question__box">
                    <h4>#4 | Wat is programmeren?</h4>
                    <p>Programmeren is het gebruiken van programmeertalen om websites of applicaties te maken. Hiermee kun je oplossingen bouwen voor bedrijven of het dagelijks gebruik van technologie verbeteren.</p>
                </article>
                <article className="question__box">
                    <h4>#5 | Hoe komen jullie aan de video's?</h4>
                    <p>
                        Onze video's worden gemaakt door ervaren en geverifieerde docenten. Wij betalen deze docenten zodat wij de lesstof in een gesloten omgeving kunnen aanbieden.
                    </p>
                </article>
                <article className="question__box">
                    <h4>#6 | Hoe maken jullie inkomsten?</h4>
                    <p>Wij bieden betaalde cursussen en abonnementsdiensten aan. Daarnaast werken wij samen met bedrijven en instellingen voor maatwerktrajecten.</p>
                </article>
            </section>
        </main>
    );
};

export default Faq;