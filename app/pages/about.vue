<template>
  <section class="c-section" data-scroll-section style="background-color:#111;">
    <div class="container-fluid" style="padding-top: 10vw;">
      <div class="row pl pr">
        <div class="col-12"></div>
      </div>
      <div class="row pl pr pb-5">
        <div class="col-12">
          <hr class="bg-red text-offwhite" />
          <h2 class="pb text-offwhite">
            Our<br />
            Story.
          </h2>
        </div>
      </div>
      <div class="row pl pr pb">
        <div class="col-9 pb">
          <h4>
            Unlike other staffing agencies, our lead designers, with over 20
            years of industry experience, provide oversight of every project to
            ensure innovative, best-in-class work that drives real business
            results.
          </h4>
        </div>
      </div>
    </div>

    <div class="container-fluid bg-white pb-10 pt-15">
      <div class="row pl pr">
        <div class="col-12">
          <h2 class="text-dark-grey libre" style="font-size:17vw;">
            why us
          </h2>
          <hr class="bg-red ml-3" />
        </div>
      </div>
      <div class="row pt-4">
        <div class="col-6 pl pr-5">
          <p>
            Our designers are thoroughly vetted and reviewed. Each and every one
            brings decades of experience in UX/UI design and financial services
            while specializing in simplifying the industry’s complexities for
            users.
          </p>
        </div>
        <div class="col-6 pr pl-5">
          <p>
            You’ll find our talent at the crossroads of the financial industry
            and design community’s latest trends and practices. This empowers
            them to execute premium, modern experiences centered around the
            user.
          </p>
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
  </section>
</template>

<style lang="scss" scoped>
hr {
  margin: 4vw 0;
  height: 0.5vw;
  width: 10vw;
}
h2 {
  font-size: 17vw;
  font-weight: 800;
  line-height: 80%;
  letter-spacing: -0.8vw;
}

h4 {
  font-family: "hero-new";
  font-size: max(24px, 2.4vw);
  line-height: max(38px, 3.6vw);
  letter-spacing: max(1px, 0.2vw);
  color: var(--white);
}

p {
  margin: 0 0 5vw 0;
  font-size: max(17px, 1.5vw);
  line-height: max(28px, 2.7vw);
  font-weight: 400;
}

.col-4 p {
  font-size: max(20px, 1.4vw);
  letter-spacing: 0.03vw;
}
</style>
