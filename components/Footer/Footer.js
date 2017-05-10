'use strict';
import React from 'react'
import Logo from '../Common/Logo'

const Footer = (props) => (
  <footer className="footer">
		<section className="footer__links block">
			<div className="wrap">
				<div className="footer__column">
					<h4 className="footer__title">Company</h4>
					<ul className="footer__list">
						<li className="footer__item footer__item--mobile"><a className="footer__link" href="/">Home</a></li>
						<li className="footer__item footer__item--mobile"><a className="footer__link" href="/blog/">Blog</a></li>
						<li className="footer__item"><a className="footer__link" href="/about/">About Us</a></li>
						<li className="footer__item"><a className="footer__link" href="/portfolio/">Our Work</a></li>
						<li className="footer__item"><a className="footer__link" href="/unleash/">Unleash</a></li>
						<li className="footer__item"><a className="footer__link" href="/our-developers/">Our Developers</a></li>
						<li className="footer__item"><a className="footer__link" href="/hire-developers/">Hire Developers</a></li>
						<li className="footer__item"><a className="footer__link" href="/join/">Join as a Developer</a></li>
					</ul>
				</div>
				<div className="footer__column">
					<h4 className="footer__title">Resources</h4>
					<ul className="footer__list">
						<li className="footer__item"><a className="footer__link" href="/case-studies/">Case Studies</a></li>
						<li className="footer__item"><a className="footer__link" href="/authors/">Write for us</a></li>
					</ul>
				</div>
				<div className="footer__column">
					<h4 className="footer__title">Hire Developers</h4>
					<ul className="footer__list">
						<li className="footer__item"><a className="footer__link" href="/hire-react-developers/">React Developers</a></li>
						<li className="footer__item"><a className="footer__link" href="/hire-angular-developers/">Angular Developers</a></li>
						<li className="footer__item"><a className="footer__link" href="/hire-javascript-developers/">Javascript Developers</a></li>
						<li className="footer__item"><a className="footer__link" href="/hire-node-developers/">Node Developers</a></li>
						<li className="footer__item"><a className="footer__link" href="/hire-php-developers/">PHP Developers</a></li>
						<li className="footer__item"><a className="footer__link" href="/hire-laravel-developers/">Laravel Developers</a></li>
						<li className="footer__item"><a className="footer__link" href="/hire-symfony-developers/">Symfony Developers</a></li>
					</ul>
				</div>
				<div className="footer__column">
					<h4 className="footer__title">Connect</h4>
					<ul className="footer__list">
						<li className="footer__item"><a className="footer__link" href="/blog/">Blog</a></li>
						<li className="footer__item"><a className="footer__link" href="http://twitter.com/xteam">Twitter</a></li>
						<li className="footer__item"><a className="footer__link" href="http://facebook.com/x.team">Facebook</a></li>
						<li className="footer__item"><a className="footer__link" href="http://www.linkedin.com/company/x-team">Linkedin</a></li>
						<li className="footer__item"><a className="footer__link" href="https://www.youtube.com/channel/UCAo_R1CP6IsA88l41ZpPpoQ">YouTube</a></li>
						<li className="footer__item"><a className="footer__link" href="mailto:contact@x-team.com">Contact Us</a></li>
					</ul>
				</div>
			</div>
		</section>
		<div className="footer__colophon">
			<div className="wrap">
				<div className="footer__colophon__logo">
        <Logo />
				</div>
				<address className="footer__colophon__address"><script>document.write(new Date().getFullYear())</script> &copy; All rights reserved. X-Company Pty Ltd.</address>
			</div>
		</div>
	</footer>
)

export default Footer
