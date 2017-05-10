"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Homepage = {
  Menu: {
    Items: [{ href: "/", anchor: "Home", title: "Home", currentPage: true }, { href: "/join/", anchor: "Join X-Team", title: "Join X-Team as a Developer" }, { href: "/our-developers/", anchor: "Our Developers", title: "Our Developers" }, { href: "/unleash/", anchor: "Unleash", title: "Unleash" }, { href: "/blog/", anchor: "Blog", title: "X-Team's blog" }, { href: "/portfolio/", anchor: "Portfolio", title: "Our Work" }]
  },

  Hero: {
    title: "Keep<br>Moving<br><i>Forward.</i>",
    caption: 'Motivated developers, ready to join your team.',
    layout: 'centered',
    style: 'home',
    buttons: [{ href: 'https://www.youtube.com/watch?v=P5oVuk5M50s',
      anchor: 'Watch Video',
      title: 'Watch Video',
      overlay: true,
      big: true
    }]
  }

};

exports.default = Homepage;