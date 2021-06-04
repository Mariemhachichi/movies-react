import {Col,Row,Container} from 'react-bootstrap';

function Footer() {
  return (
    <div className="footer">
   <Container>
  <Row>
    <Col xs><ul>
        <li><a href="https://www.google.com/">FAQ</a></li>
        <li><a href="https://www.google.com/">Investor Relations</a></li>
        <li><a href="https://www.google.com/">Privacy</a></li>
        <li><a href="https://www.google.com/">Speed Test</a></li>
        </ul></Col>
    <Col xs><ul>
        <li><a href="https://www.google.com/">Help Center</a></li>
        <li><a href="https://www.google.com/">Jobs</a></li>
        <li><a href="https://www.google.com/">Cookie Preferences</a></li>
        <li><a href="https://www.google.com/">Legal Notices</a></li>
        </ul></Col>
    <Col xs={{ order: 'first' }}><ul>
        <li><a href="https://www.google.com/">Account</a></li>
        <li><a href="https://www.google.com/">Ways to Watch</a></li>
        <li><a href="https://www.google.com/">Corporate Information</a></li>
        </ul></Col>
    <Col xs={{ order: 'last' }}><ul>
        <li><a href="https://www.google.com/">Media Center</a></li>
        <li><a href="https://www.google.com/">Terms of Use</a></li>
        <li><a href="https://www.google.com/">Contact Us</a></li>
        </ul></Col>
  </Row>
  <p>&copy; 2021 Copyright.com</p>
</Container>
    </div>
  );
}

export default Footer;