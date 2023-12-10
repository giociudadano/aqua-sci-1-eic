appToMount.component('aboutus-section', {
  template:
    /*html*/
    `<section class="hero is-medium is-white-3" id="about-us">
      <div class="hero-body no-padding-h">
        <div class="columns is-mobile is-centered">
          <div class="column is-4">
            <p class="no-margin title text-header-2-5">About Us</p>
            <div class="columns is-align-items-center is-centered">
              <div class="column is-4 has-text-centered">
                <figure class="image is-1by1">
                <img class="is-rounded" src="./src/assets/5-1.jpg">
                </figure>
                <p class="text-header-3">Cimafranca</p>
              </div>
              <div class="column is-4 has-text-centered">
                <figure class="image is-1by1">
                <img class="is-rounded" src="./src/assets/5-2.jpg">
                </figure>
                <p class="text-header-3">Ciudadano</p>
              </div>
              <div class="column is-4 has-text-centered">
                <figure class="image is-1by1">
                <img class="is-rounded" src="./src/assets/5-3.jpg">
                </figure>
                <p class="text-header-3">Tugado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    `,
  data() {
    return {
      websiteName: 'AquaLearn',
      iconPath: './src/assets/icon.png',
      sections: [
        { name: 'Play', id: 'play' },
        { name: 'Ecosystems', id: 'ecosystems' },
        { name: 'Sustainability', id: 'sustainability' },
        { name: 'Governance', id: 'governance' },
        { name: 'Documentaries', id: 'documentaries' },
        { name: 'About Us', id: 'about-us' }
      ],
      title: 'Welcome to AquaLearn!',
      subtitle: 'Software Engineer Intern'
    };
  },
  methods: {
    scrollToSection(name) {
      document
        .getElementById(String(name))
        .scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
});
