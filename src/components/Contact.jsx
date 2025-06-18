import { Link } from "react-router-dom";
import '../styles/Pages.css';

const Contact = () => {
  return (
    <main className="container">
      <h2>Contact</h2>
      <section class="contact__form">
      <p>Telefoon: 010 123456</p>
      <p>Email: Helpdesk@CodeCampus.nl</p>
      <p>
        Wij zijn open op de weekdagen, helaas niet op de weekenden. 
        <br />
        We nemen zo snel mogelijk contact met u op!
        </p>
      </section>
    </main>
  );
};

export default Contact;
