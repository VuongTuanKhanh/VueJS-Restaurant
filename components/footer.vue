<template>
  <footer id="footer" data-stellar-background-ratio="0.5">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-8">
          <div class="footer-info">
            <div class="section-title">
              <h2 class="wow fadeInUp" data-wow-delay="0.2s">Find us</h2>
            </div>
            <address class="wow fadeInUp" data-wow-delay="0.4s">
              <p>{{ address }}</p>
            </address>
          </div>
        </div>

        <div class="col-md-3 col-sm-8">
          <div class="footer-info">
            <div class="section-title">
              <h2 class="wow fadeInUp" data-wow-delay="0.2s">{{ reservation }}</h2>
            </div>
            <address class="wow fadeInUp" data-wow-delay="0.4s">
              <p>{{ phone }}</p>
              <p>
                <a href="mailto:info@company.com">{{ gmail }}</a>
              </p>
              <p>LINE: KhanhVuong</p>
            </address>
          </div>
        </div>

        <div class="col-md-4 col-sm-8">
          <div class="footer-info footer-open-hour">
            <div class="section-title">
              <h2 class="wow fadeInUp" data-wow-delay="0.2s">{{ open_hours_text }}</h2>
            </div>
            <div class="wow fadeInUp" data-wow-delay="0.4s">
              <p>Monday: Closed</p>
              <div v-for="open_hour in open_hours" :key="open_hour">
                <strong>{{ open_hour.date }}</strong>
                <p>{{ open_hour.hours }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-2 col-sm-4">
          <ul class="wow fadeInUp social-icon" data-wow-delay="0.4s">
            <li>
              <a href="#" class="fa fa-facebook-square" attr="facebook icon"></a>
            </li>
            <li>
              <a href="#" class="fa fa-twitter"></a>
            </li>
            <li>
              <a href="#" class="fa fa-instagram"></a>
            </li>
            <li>
              <a href="#" class="fa fa-google"></a>
            </li>
          </ul>

          <div class="wow fadeInUp copyright-text" data-wow-delay="0.8s">
            <p>
              <br />
              {{ copyright }}
              <br />

              {{ company_name }}
              <br />
              <br />Design: Archius Vương
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      address: "1261 Locust Street, Walnut, CA 94596, USA",
      reservation: "Reservation",
      phone: "090-080-0650 | 090-070-0430",
      gmail: "support@componentpro.com",
      open_hours_text: "Open Hours",
      copyright: "Copyright © 2018",
      company_name: "ComponentPro",
      open_hours: [
        {
          date: "Tuesday to Friday",
          hours: "7:00 AM - 9:00 PM",
        },
        {
          date: "Saturday - Sunday",
          hours: "11:00 AM - 10:00 PM",
        },
      ],
    };
  },
};
</script>

<style>
</style>