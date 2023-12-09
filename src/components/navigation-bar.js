appToMount.component('navigation-bar', {
  template:
    /*html*/
    `      
    <nav class="navbar is-white-3" :class="{shown: isShown}" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item no-padding-h" :href="websiteLink">
          <img :src="iconPath" height="32" />
          <p class="text-website-name">{{websiteName}}</p>
        </a>
      </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">Home</a>
        <a class="navbar-item">Play</a>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">Learn</a>
          <div class="navbar-dropdown">
            <a class="navbar-item">Aquatic Ecosystems</a>
            <a class="navbar-item">Management</a>
            <a class="navbar-item">Documentaries</a>
            <hr class="navbar-divider" />
            <a class="navbar-item">About Us</a>
            <a class="navbar-item">References</a>
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
      websiteLink: 'https://giociudadano.github.io',
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
