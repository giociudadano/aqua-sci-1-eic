appToMount.component('play-section', {
  template:
    /*html*/
    `<section class="hero is-fullheight section-header" id="play">
      <div class="hero-head">
      <div class="columns is-full is-centered">
      <div class="column">
      <iframe src="https://ocean-ecosystem.vercel.app/" style="width:100%;height:550px"></iframe>
      </div>
      </div>
      
      </div>
    </section>
    `,
  data() {
    return {};
  },
  methods: {
    scrollToSection(name) {
      document.getElementById(String(name)).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
});
