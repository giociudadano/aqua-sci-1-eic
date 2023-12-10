appToMount.component('navigation-bar', {
  template:
    /*html*/
    `      
    <nav class="navbar is-fixed-top is-white-3" :class="{shown: isShown}" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div class="navbar-item no-padding-h">
          <img :src="iconPath" height="32" />
          <p class="text-website-name">{{websiteName}}</p>
        </div>
      </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" v-on:click="scrollToSection('home')">Home</a>
        <a class="navbar-item" v-on:click="scrollToSection('play')">Play</a>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">Learn</a>
          <div class="navbar-dropdown">
            <a class="navbar-item" v-on:click="scrollToSection('ecosystems')">Ecosystems</a>
            <a class="navbar-item" v-on:click="scrollToSection('sustainability')">Sustainability</a>
            <a class="navbar-item" v-on:click="scrollToSection('governance')">Governance</a>
            <a class="navbar-item" v-on:click="scrollToSection('documentaries')">Documentaries</a>
            <hr class="navbar-divider" />
            <a class="navbar-item" v-on:click="scrollToSection('about-us')">About Us</a>
          </div>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary" v-on:click="scrollToSection('contact')">
              <strong>Contact</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>`,
  data() {
    return {
      websiteName: 'AquaLearn',
      iconPath: './src/assets/icon.png',
      isShown: false
    };
  },
  methods: {
    scrollToSection(name) {
      document
        .getElementById(String(name))
        .scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
    onScroll(event) {
      this.isShown = window.scrollY > 350;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  }
});
