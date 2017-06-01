var Main = new Vue({
  el: '#main',
  data: {
    nav: {
      showMenu: false,
      logo: 'img/gslogo.png',
      menu: [
        { name: 'HOME', href: 'index.html' },
        { name: 'PROJECTS', href: 'projects.html' },
        { name: 'CONTACT', href: 'contact.html' }
      ]
    },
	  jumbo: {
      showJumbo: false,
	    name: 'GREG STEPHENS',
      img: 'img/profilepic.jpg',
      alt: 'Greg Stephens',
	    subtitle: 'FRONT-END WEB DEVELOPER'
	  },
	  about: {
	    title: 'ABOUT',
	    img: 'img/family.jpg',
      alt: 'Greg Stephens and his family at Niagara Falls',
      facebook: 'https://www.facebook.com/ndgreg39',
	    description: 'Hello, my name is Greg Stephens and I\'m a Front-End Web Developer from Athens, GA. I pride myself on being creative, easy-going, and driven to grow within my career. I\'m a father to an awesome 1 year old son and a husband to a wonderful wife of 3 years. My interests include spending time with my family, playing music, Georgia Football, Atlanta United Soccer, investing, politics, economics, anything by Louis CK, and creating things.'
    },
	  skills: {
		  title: 'SKILLS',
		  skillsUp: [
		    {name: 'JavaScript', href: 'https://www.javascript.com', img: 'img/javascript.jpg', alt: 'JavaScript Logo'},
		    {name: 'Vue.js', href: 'https://vuejs.org/', img: 'img/vue.jpg', alt: 'Vue Logo'},
		    {name: 'jQuery', href: 'https://jquery.com/', img: 'img/jquery.jpg', alt: 'jQuery Logo'},
        {name: 'HTML5', href: 'https://en.wikipedia.org/wiki/HTML5', img: 'img/html.jpg', alt: 'HTML5 Logo'}
		  ],
      skillsDn: [
        {name: 'Adobe Illustrator', href: 'http://www.adobe.com/products/illustrator.html', img: 'img/illustrator.jpg', alt: 'Adobe Illustrator Logo'},
        {name: 'CSS3', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3', img: 'img/css.jpg', alt: 'CSS3 Logo'},
		    {name: 'Bootstrap', href: 'http://getbootstrap.com/', img: 'img/bootstrap.jpg', alt: 'Bootstrap Logo'},
        {name: 'Git', href: 'https://git-scm.com/', img: 'img/git.jpg', alt: 'Git Logo'}
      ]
    },
    projects: {
      title: 'PROJECTS',
      benco: {
        name: 'Benco Welding, Inc Website',
        img: 'img/project-benco.jpg',
        alt: 'Benco Welding, Inc Website',
        description: 'Website built for Benco Welding, Inc. I implemented jQuery, Bootstrap, HTML5, and CSS3 to complete this project. The site is currently hosted on Amazon Web Services. This is more of a static webpage used for information about the company.'
      },
      portfolio: {
        name: 'Alternate Portfolio Website',
        img: 'img/project-skyportfolio.jpg',
        alt: 'Alternate Portfolio Website',
        description: 'This was the original portfolio website I created. The background of the site consists of moving clouds, an airplane, and a rising moon. The background scene was created using HTML5 Canvas and Vanilla JavaScript while the rest of the site was built using Vue.js, Bootstrap, HTML5, and CSS3. I implemented modals to display information when the top of the buildings were clicked.'
      },
      game: {
        name: 'Frogger: Presidential Edition',
        img: 'img/project-game.jpg',
        alt: 'Screenshot of Frogger Clone Project',
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
        alt: 'Udacity logo',
        href: 'https://www.udacity.com/'
      },
      kennesaw: {
        name: 'Kennesaw State University',
        degree: 'Bachelor\'s',
        major: 'History Education',
        dates: '2009-2012',
        img: 'img/ksu.jpg',
        alt: 'Kennesaw State Logo',
        href: 'http://www.kennesaw.edu/'
      }
    },
    contact: {
      title: 'CONTACT',
      name: 'Name: Greg Stephens',
      contact: [
        {
          name: 'CELL',
          info: '678-863-0189',
          href: 'tel:678-863-0189',
          icon: 'fa fa-phone'
        }, {
          name: 'EMAIL',
          info: 'gstephe7@gmail.com',
          href: 'mailto:gstephe7@gmail.com',
          icon: 'fa fa-envelope'
        }, {
          name: 'LINKEDIN',
          info: 'gstephe7',
          href: 'https://www.linkedin.com/in/gstephe7',
          icon: 'fa fa-linkedin'
        }, {
          name: 'GITHUB',
          info: 'gstephe7',
          href: 'https://www.github.com/gstephe7',
          icon: 'fa fa-github-alt'
        }
      ],
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
    hideSection: function() {
      this.showSection = false;
      this.nav.showMenu = false;
    },
    displayJumbo: function() {
      this.jumbo.showJumbo = true;
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
    }
  }
});
