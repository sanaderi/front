<template>
  <div>
    <section class="about-get-section">
      <v-container>
        <div class="d-flex justify-content-center mb-4">
          <div>
            <h2 class="about-get-title">
              What is <b>$GET</b>
            </h2>
          </div>
        </div>
        <v-row class="justify-content-center">
          <v-col
            cols="12"
            sm="7"
            md="7"
          >
            <div class="d-flex justify-end">
              <p class="about-get-desc px-10 px-md-0">
                <b>$GET</b> is GamaTrain's own cryptocurrency used for
                governance and incentivizing the Gama ecosystem.<br><br>
                It empowers users to vote on platform decisions, propose new
                features, and earn rewards for meaningful contributions.<br><br>
                By holding and using <b>$GET</b>, participants become active
                stakeholders in shaping the future of GamaTrain — from content
                creation to community growth.
              </p>
            </div>
          </v-col>
          <v-col
            cols="12"
            sm="3"
            md="2"
            class="about-get-img-col"
          >
            <img
              class="about-get-img"
              src="/images/token/about.png"
              alt="$GET token about illustration"
            >
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
.about-get-section {
  background: #fff;
  padding: 5rem 0 2rem 0;
}
.about-get-title {
  font-size: 26px;
  font-weight: 800;
  color: #24292f;
  margin-bottom: 1.5rem;
}
.about-get-desc {
  font-size: 16px;
  color: #24292f;
  line-height: 1.7;
}
.about-get-img-col {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  order: -1;
}
.about-get-img {
  width: 140px;
  max-width: 100%;
}

@media (min-width: 600px) {
  .about-get-title {
    font-size: 34px;
    font-weight: 800;
    color: #24292f;
    margin-bottom: 1.5rem;
  }
  .about-get-img-col {
    order: 2;
  }
  .about-get-desc {
    font-size: 20px;
  }
  .about-get-img {
    width: 180px;
    max-width: 100%;
  }
}
</style>
