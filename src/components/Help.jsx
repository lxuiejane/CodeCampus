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
                    <h4>#6 | Hoe werkt het zoekfunctie op de site?</h4>
                    <p>De zoekfunctie vind je bovenaan elke pagina. Typ een zoekterm in en druk op enter. Je krijgt meteen relevante resultaten te zien die je kunt aanklikken voor meer informatie.</p>
                </article>
                <article className="question__box">
                    <h4>#7 | Hoe gebruik ik filters en sorteeropties?</h4>
                    <p>Onder de zoekbalk kun je filters gebruiken om de resultaten te verfijnen. Kies bijvoorbeeld een categorie of moeilijkheidsgraad. Je kunt ook sorteren op relevantie, nieuw of populair.</p>
                </article>
                <article className="question__box">
                    <h4>#8 | Hoe werkt mijn profiel en het favorieten-systeem?</h4>
                    <p>Via je profiel kun je je favoriete items bekijken, opslaan of verwijderen. Klik op het sterretje bij de cursus om het toe te voegen aan je favorieten. Je profiel vind je linksboven in het menu. In je profiel krijg je ook je bekende cursussen te zien.</p>
                </article>
                <article className="question__box">
                    <h4>#9 | Hoe navigeer ik tussen pagina's?</h4>
                    <p>Gebruik het hoofdmenu bovenaan om snel naar andere secties te gaan, zoals Cursussen, Favorieten of Profiel. Je kunt ook gebruik maken van knoppen binnen een pagina om verder te klikken.</p>
                </article>
                <article className="question__box">
                    <h4>#10 | Wat voor uitleg krijg ik bij elke functie?</h4>
                    <p>Elke functie wordt kort en duidelijk uitgelegd met praktische stappen. Zo weet je precies wat je moet doen, bijvoorbeeld bij het zoeken, filteren of navigeren.</p>
                </article>
                <article className="question__box">
                    <h4>#11 | Wat kan ik allemaal doen op de site?</h4>
                    <p>Als gebruiker kun je zoeken naar content, filters gebruiken om snel te vinden wat je zoekt, en je favoriete items opslaan. Alles is ontworpen om je zo eenvoudig mogelijk door de site te laten navigeren.</p>
                </article>

                <article className="question__box">
                    <h4>#12 | Is de uitleg makkelijk te begrijpen?</h4>
                    <p>Ja, alle uitleg is geschreven in duidelijke, eenvoudige taal. Er wordt stap voor stap uitgelegd hoe functies werken, zodat iedereen ermee overweg kan – ook zonder technische kennis.</p>
                </article>

                <article className="question__box">
                    <h4>#13 | Zijn er voorbeelden of screenshots beschikbaar?</h4>
                    <p>Bij sommige functies zie je een voorbeeld of een screenshot die laat zien hoe het werkt. Zo kun je meteen zien waar je moet klikken of wat je kunt verwachten.</p>
                </article>

            </section>
        </main>
    );
};

export default Faq;