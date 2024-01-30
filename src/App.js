import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div>
          <footer>
        <div class="footer-content">
            <h3>FOLLOW US</h3>
            <ul class="socials">
                <li><a href="https://www.facebook.com" target='_blank'><i class="fa fa-facebook"></i></a></li>
                <li><a href="https://www.twitter.com" target='_blank'><i class="fa fa-twitter"></i></a></li>
                <li><a href="https://www.google.com" target='_blank'><i class="fa fa-google-plus"></i></a></li>
                <li><a href="https://www.youtube.com" target='_blank'><i class="fa fa-youtube"></i></a></li>
                <li><a href="https://www.linkedin.com" target='_blank'><i class="fa fa-linkedin-square"></i></a></li>
            </ul>
        </div>
        <div class="footer-bottom">
            <p>copyright &copy; <a href="#">ALL Right Reserved</a>  </p>
                    <div class="footer-menu">
                      <ul class="f-menu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                      </ul>
                    </div>
        </div>

    </footer>
    </div>
  );
}
