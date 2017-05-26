var Main = new Vue({
  el: '#main',
  data: {
    showSection: true,
    nav: {
      showMenu: false,
      menu: [
        { name: 'HOME', href: '#welcome' },
        { name: 'ABOUT', href: '#about' },
        { name: 'SKILLS', href: '#skills' },
        { name: 'PROJECTS', href: '#projects' },
        { name: 'EDUCATION', href: '#education' },
        { name: 'CONTACT', href: '#contact' }
      ]
    },
	  welcome: {
      showWelcome: false,
	    firstName: 'GREG',
      lastName: 'STEPHENS',
	    img: 'img/profilepic.jpg',
	    subtitle: 'FRONT-END WEB DEVELOPER'
	  },
	  about: {
	    title: 'ABOUT',
	    img: 'img/family.jpg',
      facebook: 'https://www.facebook.com/ndgreg39',
	    background: 'Hello, my name is Greg Stephens and I\'m a Front-End Web Developer from Athens, GA. I pride myself on being creative, easy-going, and driven to grow within my career. I\'m a father to an awesome 1 year old son and a husband to a wonderful wife of 3 years. My interests include spending time with my family, playing music, Georgia Football, Atlanta United Soccer, investing, politics, economics, anything by Louis CK, and creating things.'
    },
	  skills: {
		  title: 'SKILLS',
		  skillsLt: [
		    {name: 'JavaScript', url: 'https://www.javascript.com', img: 'img/javascript.jpg'},
		    {name: 'Vue.js', url: 'https://vuejs.org/', img: 'img/vue.jpg'},
		    {name: 'jQuery', url: 'https://jquery.com/', img: 'img/jquery.jpg'},
        {name: 'HTML5', url: 'https://en.wikipedia.org/wiki/HTML5', img: 'img/html.jpg'}
		  ],
      skillsRt: [
        {name: 'CSS3', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3', img: 'img/css.jpg'},
		    {name: 'Bootstrap', url: 'http://getbootstrap.com/', img: 'img/bootstrap.jpg'},
        {name: 'Git', url: 'https://git-scm.com/', img: 'img/git.jpg'},
        {name: 'Google Analytics', url: 'https://analytics.google.com', img: 'img/analytics.jpg'}
      ]
    },
    projects: {
      title: 'PROJECTS',
      arcadeGame: {
        showGame: true,
        name: 'Frogger: Presidential Edition',
        img: 'img/arcadegame.jpg',
        description: 'I completed this project for Udacity\'s Front-End Development Nanodegree. Object-oriented JavaScript and HTML5 Canvas were used to create this clone of the classic arcade game, Frogger. I put my own spin on the game by using presidential candidates as the players.'
      }
    },
    education: {
      title: 'EDUCATION',
      udacity: {
        name: 'Udacity',
        degree: 'Nanodegree',
        major: 'Front-End Web Development',
        dates: '2017',
        img: 'img/udacity.jpg',
        url: 'https://www.udacity.com/'
      },
      kennesaw: {
        name: 'Kennesaw State University',
        degree: 'Bachelor\'s',
        major: 'History Education',
        dates: '2009-2012',
        img: 'img/ksu.jpg',
        url: 'http://www.kennesaw.edu/'
      }
    },
    interests: {
      title: 'INTERESTS',
      interestsLt: [
        'Being a Dad',
        'Music',
        'Creating things',
        'Politics',
        'Economics'
      ],
      interestsRt: [
        'History',
        'Investing',
        'Georgia Bulldogs Football',
        'Atlanta United Soccer',
        'Louis CK\'s Comedy'
      ]
	  },
    contact: {
      title: 'CONTACT',
      name: 'Name: Greg Stephens',
      phone: {
        cell: '678-863-0189',
        call: 'tel:678-863-0189'
      },
      email: {
        address: 'gstephe7@gmail.com',
        url: 'mailto:gstephe7@gmail.com'
      },
      linkedin: {
        username: 'gstephe7',
        url: 'https://www.linkedin.com/in/gstephe7'
      },
      github: {
        username: 'gstephe7',
        url: 'https://www.github.com/gstephe7',
        icon: 'entypo-github'
      },
      location: {
        title: 'LOCATION',
        latLng: { lat: 33.951935, lng: -83.357567 }
      }
    }
  },
  methods: {
    displayMenu: function() {
      this.nav.showMenu = !this.nav.showMenu;
    },
    initMap: function() {
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: this.contact.location.latLng
      });
      var marker = new google.maps.Marker({
        position: this.contact.location.latLng,
        map: map
      });
    },
    hideSection: function() {
      this.showSection = false;
      this.nav.showMenu = false;
    },
    displaySection: function() {
      var self = this;
      setTimeout(function() {
        self.showSection = true;
      }, 300);
    },
    displayWelcome: function() {
      this.welcome.showWelcome = true;
    },
    displayGame: function() {
      this.projects.arcadeGame.showGame = !this.projects.arcadeGame.showGame;
    }
  }
});
