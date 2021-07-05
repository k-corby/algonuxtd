<template>
  <section class="c-section" data-scroll-section>
    <div class="container-fluid" style="padding-top: 10vw;">
      <div class="row pl pr">
        <div class="col-12"></div>
      </div>
      <div class="row pl pr">
        <div class="col-12">
          <hr />
          <h2
            class="poppins uppercase pb"
            style="line-height:85%; font-weight:400;"
          >
            Our<br />
            story.
          </h2>
        </div>
      </div>
      <div class="row pl pr pb">
        <div class="col-9 pb">
          <h4>
            Objectives inform students the learning outcomes of the class. What
            will they know? What will they be able to do? Why is this important
            to know? It's an effective way to assess their learning progress.
          </h4>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row" style="position:relative;">
        <h2
          class="pr pl pb"
          style="font-family:poppins;position:absolute; z-index:2; bottom:0; right:0; color:white; text-align:right; line-height:80%; font-size:18vw; letter-spacing:-1vw;"
        >
          We <br />Make<br />
          Different.
        </h2>
        <img
          class="scale-crop"
          src="https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
      </div>
    </div>
    <div class="container-fluid bg-fluro-yellow" style="padding-top: 18vw;">
      <div class="row pl pr">
        <div class="col-12">
          <h2 class="text-dark-grey libre" style="font-size:17vw;">
            why us
          </h2>
          <hr />
        </div>
      </div>
      <div class="row pl pr">
        <div class="col-4">
          <p style="">
            Our designers are thoroughly vetted and reviewed. Each and every one
            brings decades of experience in UX/UI design and financial services
            while specializing in simplifying the industry’s complexities for
            users.
          </p>
        </div>
        <div class="col-4">
          <p>
            You’ll find our talent at the crossroads of the financial industry
            and design community’s latest trends and practices. This empowers
            them to execute premium, modern experiences centered around the
            user.
          </p>
        </div>
        <div class="col-4">
          <p>
            Unlike other staffing agencies, our lead designers, with over 20
            years of industry experience, provide oversight of every project to
            ensure innovative, best-in-class work that drives real business
            results.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
hr {
  background-color: black;
  margin: 4vw 0;
  height: 0.5vw;
  width: 10vw;
}
h2 {
  font-size: 15vw;
  font-weight: 800;
  line-height: 75%;
  letter-spacing: -0.8vw;
  color: #222;
}

h4 {
  font-family: "hero-new";
  font-size: max(24px, 2.4vw);
  line-height: max(38px, 3.6vw);
  letter-spacing: max(1px, 0.2vw);
}

p {
  margin: 0 0 5vw 0;
  font-size: max(22px, 2vw);
  line-height: 40px;
}

.col-4 p {
  font-size: max(20px, 1.4vw);
  letter-spacing: 0.03vw;
}
</style>
