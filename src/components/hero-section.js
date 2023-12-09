appToMount.component('hero-section', {
  template:
    /*html*/
    `<section class="hero is-fullheight" id="home">
      <div class="hero-head">
        <div class="columns">
          <div class="column is-10 is-offset-1 padding-wide">
            <div>
              <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                  <div class="navbar-item no-padding-h">
                    <img :src="iconPath" height="32" />
                    <p class="text-website-name">{{websiteName}}</p>
                  </div>
                </div>
                <div class="navbar-menu">
                  <div class="navbar-start"></div>
                  <div class="navbar-end">
                    <a class="navbar-item" v-for="section in sections" v-on:click="scrollToSection(section.id)">
                      {{section.name}}
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-body no-padding-h">
        <div class="columns hero-info">
          <div class="column is-two-fifths is-offset-1">
            <p class="no-margin title text-header-1">{{title}}</p>
            <p class="subtitle text-desc-black">{{description}}</p>
          </div>
        </div>
    </section>`,
  data() {
    return {
      websiteName: 'AquaLearn',
      iconPath: './src/assets/icon.png',
      sections: [
        { name: 'Play', id: 'play' },
        { name: 'Aquatic Ecosystems', id: 'aquatic-ecosystems' },
        { name: 'Management', id: 'management' },
        { name: 'Documentaries', id: 'documentaries' },
        { name: 'About Us', id: 'about-us' },
        { name: 'References', id: 'references' }
      ],
      title: 'Welcome to AquaLearn!',
      subtitle: 'Software Engineer Intern',
      description:
        'At AquaLearn, we embark on a journey to explore the wonders of aquatic life. Our focus is on the archipelagic \
        nature of our country and the vital role aquatic resources play in national development.'
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
