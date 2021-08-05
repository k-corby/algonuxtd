<template>
  <div>
    <div class="container-fluid bg-banner" style="position:relative;">
      <div class="pb bg-blue" style="">
        <Banner2 />
        <QuarterCircle />
      </div>
    </div>
    <div class="container-fluid pt-15">
      <div class="row pb">
        <div class="col-12">
          <div class="pl pr">
            <hr />
            <h2
              class="poppins uppercase"
              style="line-height:85%; font-weight:400;"
            >
              algo<br />
              Digital<br />agency.
            </h2>
            
          </div>
          <p
            class="float-right"
            style="position:absolute; right:1vw; top:40%; color:#222; writing-mode: vertical-rl; text-orientation: mixed; font-size:15px; letter-spacing:0.4vw; font-weight:400; text-transform:lowercase; font-family:'Libre Baskerville';"
          >
            We make special sh*t
          </p>
        </div>
      </div>

      <div class="container-fluid pb">
        <div class="row pl pr pb pt">
          <div class="col-9">
            <h4>
              We are a Digital design and development partner for advertising &
              marketing agencies, for both large and small businesses. Would you
              like to know more about our expertise or are you curious about our
              approach? Contact us without obligation for an appointment.
            </h4>
          </div>
        </div>
      </div>
      <div class="container-fluid pb">
        <div class="row">
          <ApproachList2 />
        </div>
      </div>
      <div class="container-fluid pb">
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

      <div class="row pl pr pb pt">
        <div class="col-9">
          <h4>
            We are a Digital design and development partner for advertising &
            marketing agencies, for both large and small businesses. Would you
            like to know more about our expertise or are you curious about our
            approach? Contact us without obligation for an appointment.
          </h4>
        </div>
      </div>
    </div>

    <div class="bg-white container-fluid pt">
      <div class="row pl pr pt-10 pb bg-blue text-white">
        <h1 class="mt poppins trans_stroke">Recent work.</h1>
        <p class="caption">
          custom designs web, apps, print media utilising the technologies.
        </p>
      </div>

      <article data-aos="fade-in" data-aos-duration="2000" class="row">
        <img class="scale-crop" src="~/assets/img/ui-design.jpg" />
      </article>
      <article data-aos="fade-in" data-aos-duration="2000" class="row">
        <img class="scale-crop" src="~/assets/img/ipad.jpg" />
      </article>
    </div>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
hr {
  background-color: black;
  margin: 4vw 0;
  height: 0.5vw;
  width: 10vw;
}
h2 {
  font-size: 15vw;
  font-weight: 700;
  line-height: 75%;
  letter-spacing: -0.4vw;
  color: #222;
}

h4 {
  font-family: "hero-new";
  font-size: max(22px, 1.85vw);
  line-height: max(36px, 3.4vw);
  letter-spacing: max(1px, 0.2vw);
}

p {
  font-weight: 500;
  font-size: max(23px, 1.3vw);
  line-height: max(34px, 2.5vw);
  letter-spacing: max(3px, 0.2vw);
}
.circle {
  width: 200vh;
  height: 200vh;
  border-radius: 100%;
  position: absolute;
  right: -100vh;
  top: 25%;
  border: max(300px, 27vw) solid var(--yellow);
}
.caption {
  font-weight: 300;
  max-width: 60%;
  font-size: min(24px, 1.8vw);
  letter-spacing: 0.7vw;
  font-family: "Martel", sans-serif;
}

.bg-banner {
  width: 100%;
  overflow: hidden;
  position: relative;
}
</style>
