import {Col,Row,Container} from 'react-bootstrap';

function Footer() {
  return (
    <div className="footer">
   <Container>
  <Row>
    <Col xs><ul>
        <li><a href="https://www.google.com/">FAQ</a></li>
        <li><a href="https://www.google.com/">Relations Investisseurs</a></li>
        <li><a href="https://www.google.com/">Confidentialité</a></li>
        <li><a href="https://www.google.com/">Test de vitesse</a></li>
        </ul></Col>
    <Col xs><ul>
        <li><a href="https://www.google.com/">Centre d'aide</a></li>
        <li><a href="https://www.google.com/">Recrutement</a></li>
        <li><a href="https://www.google.com/">Préférences de cookies</a></li>
        <li><a href="https://www.google.com/">Informations légales</a></li>
        </ul></Col>
    <Col xs={{ order: 'first' }}><ul>
        <li><a href="https://www.google.com/">Compte</a></li>
        <li><a href="https://www.google.com/">Modes de lecture</a></li>
        <li><a href="https://www.google.com/">Mentions légales</a></li>
        <li><a href="https://www.google.com/">Programmes originaux Netflix</a></li>
        </ul></Col>
    <Col xs={{ order: 'last' }}><ul>
        <li><a href="https://www.google.com/">Presse</a></li>
        <li><a href="https://www.google.com/">Conditions d'utilisation</a></li>
        <li><a href="https://www.google.com/">Nous contacter</a></li>
        </ul></Col>
  </Row>
  <p>&copy; 2021 Copyright.com</p>
</Container>
    </div>
  );
}

export default Footer;