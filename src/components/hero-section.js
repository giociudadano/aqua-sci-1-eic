appToMount.component('hero-section', {
  template:
    /*html*/
    `<section class="hero is-fullheight section-header" id="home">
      <div class="hero-head">
        <div class="columns">
          <div class="column is-10 is-offset-1 padding-wide">
            <div>
              <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand-hero">
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
          <div class="column is-7 is-offset-1">
            <p class="no-margin title text-header-1">{{title}}</p>
            <p class="subtitle text-desc-black">Young curious explorers, welcome to AquaLearn - your gateway to the wonders of the world beneath the waves.<br><br>
            Be part of becoming a guardian of the sea! You can discover how we can all play a part in keeping our marine ecosystem healthy and clean for a bright future.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-medium is-white-3">
      <div class="hero-body no-padding-h">
        <div class="columns is-mobile is-centered">
          <div class="column is-two-thirds">
            <p class="no-margin title text-header-2">Meet the coolest creatures!</p>
            <div class="columns is-align-items-center is-centered">
              <div class="column has-text-centered">
                <figure class="image is-128x128 is-inline-block">
                <img class="is-rounded" src="./src/assets/1-1.jpg">
                </figure>
                <p class="text-header-3">Sea Cow (Dugong)</p>
              </div>
              <div class="column has-text-centered">
                <figure class="image is-128x128 is-inline-block">
                <img class="is-rounded" src="./src/assets/1-2.jpg">
                </figure>
                <p class="text-header-3">Whale Shark</p>
              </div>
              <div class="column has-text-centered">
                <figure class="image is-128x128 is-inline-block">
                <img class="is-rounded" src="./src/assets/1-3.jpg">
                </figure>
                <p class="text-header-3">Sea Turtles</p>
              </div>
              <div class="column has-text-centered">
                <figure class="image is-128x128 is-inline-block">
                <img class="is-rounded" src="./src/assets/1-4.jpg">
                </figure>
                <p class="text-header-3">Irrawaddy Dolphin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-medium is-white-2">
      <div class="hero-body no-padding-h">
        <div class="columns is-mobile is-centered">
          <div class="column is-two-thirds">
            <p class="no-margin title text-header-2">Fun Facts</p>
            <div class="columns">
              <div class="column">
              <div class="card">
                <div class="card-content">
                  <div class="content text-desc-black">
                    <b>Oceans</b> cover nearly <b>71% of the Earth's surface</b>, and there is only one world ocean, which is divided into smaller areas called <b>seas</b>.
                  </div>
                </div>
              </div>
              <br>
              <div class="card">
                <div class="card-content">
                  <div class="content text-desc-black">
                    Some fish live in the <b>salty</b> ocean, while others prefer <b>freshwater</b> homes. It's like having different neighborhoods for different types of fish!
                  </div>
                </div>
              </div>
              <br>
              <div class="card">
                <div class="card-content">
                  <div class="content text-desc-black">
                    The oceans and seas are like giant homes for fish, whales, and other sea creatures. They are super big and cover more than 70% of the Earth!
                  </div>
                </div>
              </div>
              </div>
              <div class="column">
                <div class="card">
                  <div class="card-content">
                  <div class="content text-desc-black">
                    We can help take care of the water and the animals that live in it by not throwing trash in the water and being kind to our underwater friends!
                  </div>
                </div>
                </div>
                <br>
                <div class="card">
                  <div class="card-content">
                  <div class="content text-desc-black">
                    Aquatic homes are super important because they give us yummy fish to eat and are fun places for swimming and exploring.
                  </div>
                </div>
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
        { name: 'About Us', id: 'about-us' },
        { name: 'References', id: 'references' }
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
