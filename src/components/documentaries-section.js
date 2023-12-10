appToMount.component('documentaries-section', {
  template:
    /*html*/
    `<section class="hero is-medium section-header is-white-2" id="documentaries">
      <div class="hero-body">
        <div class="columns is-mobile is-centered">
          <div class="column is-11">
          <p class="text-subheader-3-accent-3">Documentaries</p>
            <p class="no-margin title text-header-2">Recommended Articles, Documentaries, <br>and Educational Resources</p>
            <div class="columns is-centered">
            <div class="column is-5">
            <div class="card padding-wide">
            <p class="text-desc-black">Use these fascinating resources to start an enjoyable educational journey about the underwater world! Explore the realm of water science with fascinating research, fantastic documentaries, and interesting articles.
            </p>
            </div>
            </div>
          </div>
          <br>
          <p class="text-subheader-3-accent-4">Documentaries</p>
            <div class="columns">
              <div class="column is-6 has-text-centered">
                <div class="card padding-wide">
                <iframe style="width:100%;height:300px" src="https://www.youtube.com/embed/CxC161GvMPc?si=8Z5KA3PpkJ-Jzsdu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><br><br>
                <p class="text-header-4-accent">Tragedy of the Commons</p>
                <p class="text-desc-black has-text-left">The <b>Tragedy of the Commons</b> explains why it's bad to harvest too much fish in the ocean and what happens when all fisherfolk harvest only what they need.</p><br>
                <p class="text-desc-black-2 has-text-left">Nicholas Amendolare & TedEd</p>
                </div>
                <br>
                <div class="card padding-wide">
                <iframe style="width:100%;height:300px" src="https://www.youtube.com/embed/R2DU85qLfJQ?si=Q9NP4BZ-QIgsbzIF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><br><br>
                <p class="text-header-4-accent">Our Planet | Fresh Water</p>
                <p class="text-desc-black has-text-left"><b>Our Planet</b> is an award-winning documentary series on eight different ecosystems and the effects of human intervention on the natural cycle of the environment.<br><br> This episode, <b>Fresh Water</b>, focuses on the role of limited freshwater to the world's seawater and freshwater ecosystems.</p><br>
                <p class="text-desc-black-2 has-text-left">David Attenborough & Netflix Studios</p>
                </div>
              </div>
              <div class="column is-6 has-text-centered">
                <div class="card padding-wide">
                <iframe style="width:100%;height:300px" src="https://www.youtube.com/embed/svPaTOjtxJ8?si=VaSOmz509suvV82d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><br><br>
                <p class="text-header-4-accent">Invisible Ocean: Plankton and Plastic</p>
                <p class="text-desc-black has-text-left"><b>Invisible Ocean: Plankton and Plastic</b>is a short video on microscopic-level threats beneath the ocean, threats invisible to the human eye. The first part of the video focuses on plankton and their benefits and threats to both humans and animals. <br><br>
                The second part of the video focuses on microplastics - plastics produced through the breaking down and decomposition of larger plastics. These microplastics come from the pollution and throwing of garbage to the oceans which are then eaten by fish and stored in their bowels where they can be ingested and transferred by humans.</p><br>
                <p class="text-desc-black-2 has-text-left">Mara G. Haseltine, Christian Sardet (The Plankton Chronicles, TARA Oceans) and Mark Anthony Browne (Ecologist NCEAS)</p>
                </div><br>
                <div class="card padding-wide">
                <iframe style="width:100%;height:300px" src="https://www.youtube.com/embed/EJXeMDVNsRk?si=RE7R7NzYuG6TgmhG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><br><br>
                <p class="text-header-4-accent">The Perfect Coral Reef - David Attenborough's Great Barrier Reef: An Interactive Journey</p>
                <p class="text-desc-black has-text-left"><b>The Perfect Coral Reef</b> is a short video that focuses on the great migration of thousands of species to the <i>perfect</i> coral reef, the Great Barrier Reef located at the Eastern Coast of Australia, host to one of the most biodiverse and complex ecosystems on the planet.</p><br>
                <p class="text-desc-black-2 has-text-left">David Attenborough & Atlantic Productions</p>
                </div><br>
            </div>
          </div>
        </div>
      </div>
    </section>
    `,
  data() {
    return {};
  },
  methods: {}
});
