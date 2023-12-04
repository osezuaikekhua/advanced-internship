import React from 'react'
import Nav from '../componets/home/Nav'
import Landing from '../componets/home/Landing'
import Features from '../componets/home/Features'
import Reviews from '../componets/home/Reviews'
import Numbers from '../componets/home/Numbers'

import logo from '../images/logo.png'
import landing from '../images/landing.png'

function Home() {
  return (
    <>
    <Nav LogoImg = {logo} />
    <Landing LandingImg = {landing} />
    <Features />
    <Reviews />
    <Numbers />
    
    <section id="footer">
      <div class="container">
        <div class="row">
          <div class="footer__top--wrapper">
            <div class="footer__block">
              <div class="footer__link--title">Actions</div>
              <div>
                <div class="footer__link--wrapper">
                  <a class="footer__link">Summarist Magazine</a>
                </div>
                <div class="footer__link--wrapper">
                  <a class="footer__link">Cancel Subscription</a>
                </div>
                <div class="footer__link--wrapper">
                  <a class="footer__link">Help</a>
                </div>
                <div class="footer__link--wrapper">
                  <a class="footer__link">Contact us</a>
                </div>
              </div>
            </div>
            <div class="footer__block">
              <div class="footer__link--title">Useful Links</div>
              <div>
                <div class="footer__link--wrapper">
                  <a class="footer__link">Pricing</a>
                </div>
                <div class="footer__link--wrapper">
                  <a class="footer__link">Summarist Business</a>
                </div>
                <div class="footer__link--wrapper">
                  <a class="footer__link">Gift Cards</a>
                </div>
                <div class="footer__link--wrapper">
                  <a class="footer__link">Authors & Publishers</a>
                </div>
              </div>
            </div>
            <div class="footer__block">
              <div class="footer__link--title">Company</div>
              <div>
                <div class="footer__link--wrapper">
                  <a class="footer__link">About</a>
                </div>
                <div class="footer__link--wrapper">
                  <a class="footer__link">Careers</a>
                </div>
                <div class="footer__link--wrapper">
                  <a class="footer__link">Partners</a>
                </div>
                <div class="footer__link--wrapper">
                  <a class="footer__link">Code of Conduct</a>
                </div>
              </div>
            </div>
            <div class="footer__block">
              <div class="footer__link--title">Other</div>
              <div>
                <div class="footer__link--wrapper">
                  <a class="footer__link">Sitemap</a>
                </div>
                <div class="footer__link--wrapper">
                  <a class="footer__link">Legal Notice</a>
                </div>
                <div class="footer__link--wrapper">
                  <a class="footer__link">Terms of Service</a>
                </div>
                <div class="footer__link--wrapper">
                  <a class="footer__link">Privacy Policies</a>
                </div>
              </div>
            </div>
          </div>
          <div class="footer__copyright--wrapper">
            <div class="footer__copyright">
              Copyright &copy; 2023 Summarist.
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home