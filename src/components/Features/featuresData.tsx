import { Feature } from "@/types/feature";

const featuresData = (theme): Feature[] => {
  return [
    {
      id: 1,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fill={theme === "dark" ? "#fff" : "#000000"}
          height="800px"
          width="800px"
          version="1.1"
          id="Layer_1"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
        >
          <g>
            <g>
              <path d="M476.158,231.363l-13.259-53.035c3.625-0.77,6.345-3.986,6.345-7.839v-8.551c0-18.566-15.105-33.67-33.67-33.67h-60.392    V110.63c0-9.136-7.432-16.568-16.568-16.568H50.772c-9.136,0-16.568,7.432-16.568,16.568V256c0,4.427,3.589,8.017,8.017,8.017    c4.427,0,8.017-3.589,8.017-8.017V110.63c0-0.294,0.239-0.534,0.534-0.534h307.841c0.295,0,0.534,0.241,0.534,0.534v145.372    c0,4.427,3.589,8.017,8.017,8.017c4.427,0,8.017-3.589,8.017-8.017v-9.088h94.569c0.008,0,0.014,0.002,0.021,0.002    c0.008,0,0.015-0.001,0.022-0.001c11.637,0.008,21.518,7.646,24.912,18.171h-24.928c-4.427,0-8.017,3.589-8.017,8.017v17.102    c0,13.851,11.268,25.119,25.119,25.119h9.086v35.273h-20.962c-6.886-19.884-25.787-34.205-47.982-34.205    s-41.097,14.321-47.982,34.205h-3.86v-60.393c0-4.427-3.589-8.017-8.017-8.017c-4.427,0-8.017,3.589-8.017,8.017v60.391H192.817    c-6.886-19.884-25.787-34.205-47.982-34.205s-41.097,14.321-47.982,34.205H50.772c-0.295,0-0.534-0.241-0.534-0.534v-17.637    h34.739c4.427,0,8.017-3.589,8.017-8.017s-3.589-8.017-8.017-8.017h-42.75c-0.002,0-0.003,0-0.005,0s-0.003,0-0.005,0H8.017    c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h26.188v17.637c0,9.136,7.432,16.568,16.568,16.568h43.304    c-0.002,0.178-0.014,0.356-0.014,0.534c0,27.995,22.777,50.772,50.772,50.772s50.772-22.777,50.772-50.772    c0-0.178-0.012-0.356-0.014-0.534h180.67c-0.002,0.178-0.014,0.356-0.014,0.534c0,27.995,22.777,50.772,50.772,50.772    c27.995,0,50.772-22.777,50.772-50.772c0-0.178-0.012-0.356-0.014-0.534h26.203c4.427,0,8.017-3.589,8.017-8.017v-85.511    C512,251.989,496.423,234.448,476.158,231.363z M375.182,144.301h60.392c9.725,0,17.637,7.912,17.637,17.637v0.534h-78.029    V144.301z M375.182,230.881v-52.376h71.235l13.094,52.376H375.182z M144.835,401.904c-19.155,0-34.739-15.583-34.739-34.739    s15.584-34.739,34.739-34.739c19.155,0,34.739,15.583,34.739,34.739S163.99,401.904,144.835,401.904z M427.023,401.904    c-19.155,0-34.739-15.583-34.739-34.739s15.584-34.739,34.739-34.739c19.155,0,34.739,15.583,34.739,34.739    S446.178,401.904,427.023,401.904z M495.967,299.29h-9.086c-5.01,0-9.086-4.076-9.086-9.086v-9.086h18.171V299.29z" />
            </g>
          </g>
          <g>
            <g>
              <path d="M144.835,350.597c-9.136,0-16.568,7.432-16.568,16.568c0,9.136,7.432,16.568,16.568,16.568    c9.136,0,16.568-7.432,16.568-16.568C161.403,358.029,153.971,350.597,144.835,350.597z" />
            </g>
          </g>
          <g>
            <g>
              <path d="M427.023,350.597c-9.136,0-16.568,7.432-16.568,16.568c0,9.136,7.432,16.568,16.568,16.568    c9.136,0,16.568-7.432,16.568-16.568C443.591,358.029,436.159,350.597,427.023,350.597z" />
            </g>
          </g>
          <g>
            <g>
              <path d="M332.96,316.393H213.244c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017H332.96    c4.427,0,8.017-3.589,8.017-8.017S337.388,316.393,332.96,316.393z" />
            </g>
          </g>
          <g>
            <g>
              <path d="M127.733,282.188H25.119c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h102.614    c4.427,0,8.017-3.589,8.017-8.017S132.16,282.188,127.733,282.188z" />
            </g>
          </g>
          <g>
            <g>
              <path d="M204.693,136.818c-42.141,0-76.426,34.285-76.426,76.426s34.285,76.426,76.426,76.426s76.426-34.285,76.426-76.426    S246.834,136.818,204.693,136.818z M204.693,273.637c-33.3,0-60.392-27.092-60.392-60.392s27.092-60.392,60.392-60.392    s60.392,27.092,60.392,60.392S237.993,273.637,204.693,273.637z" />
            </g>
          </g>
          <g>
            <g>
              <path d="M236.015,233.229l-23.305-23.305V179.04c0-4.427-3.589-8.017-8.017-8.017s-8.017,3.589-8.017,8.017v34.205    c0,2.126,0.844,4.164,2.348,5.668l25.653,25.653c1.565,1.565,3.617,2.348,5.668,2.348s4.104-0.782,5.668-2.348    C239.146,241.435,239.146,236.36,236.015,233.229z" />
            </g>
          </g>
        </svg>
      ),
      title: "Pickup and Delivery",
      paragraph:
        "You don't even have to leave your house when you use our pickup and delivery laundry service. We will come to you!",
    },
    {
      id: 2,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fill={theme === "dark" ? "#fff" : "#000000"}
          version="1.1"
          id="Layer_1"
          viewBox="0 0 492.501 492.501"
          xmlSpace="preserve"
        >
          <g id="XMLID_691_">
            <g>
              <g>
                <path d="M246.251,446.328c80.621,0,146.211-65.59,146.211-146.211s-65.59-146.211-146.211-146.211S100.04,219.496,100.04,300.117     S165.63,446.328,246.251,446.328z M246.251,169.297c72.135,0,130.82,58.686,130.82,130.82c0,72.135-58.685,130.82-130.82,130.82     s-130.82-58.685-130.82-130.82S174.116,169.297,246.251,169.297z" />
                <path d="M246.251,411.699c61.526,0,111.582-50.055,111.582-111.582s-50.055-111.582-111.582-111.582     c-61.526,0-111.582,50.056-111.582,111.582S184.724,411.699,246.251,411.699z M246.251,203.926     c53.04,0,96.191,43.151,96.191,96.191c0,53.04-43.151,96.191-96.191,96.191c-53.04,0-96.191-43.151-96.191-96.191     C150.06,247.077,193.211,203.926,246.251,203.926z" />
                <path d="M402.07,0H90.431c-20.16,0-36.563,16.402-36.563,36.564v419.373c0,20.161,16.402,36.564,36.563,36.564H402.07     c20.161,0,36.563-16.402,36.563-36.564V36.564C438.634,16.402,422.232,0,402.07,0z M423.243,455.936     c0,11.675-9.498,21.173-21.173,21.173H90.431c-11.675,0-21.172-9.498-21.172-21.173V123.125h353.984V455.936z M423.243,107.735     H69.259V36.564c0-11.675,9.498-21.173,21.172-21.173H402.07c11.675,0,21.173,9.498,21.173,21.173V107.735z" />
                <path d="M115.431,30.781c-16.972,0-30.781,13.809-30.781,30.782c0,16.972,13.808,30.781,30.781,30.781     c14.316,0,26.38-9.825,29.807-23.085h16.364V53.868h-16.364C141.813,40.606,129.748,30.781,115.431,30.781z M115.431,76.953     c-8.486,0-15.39-6.904-15.39-15.39c0-8.487,6.903-15.391,15.39-15.391c8.486,0,15.39,6.904,15.39,15.391     C130.821,70.049,123.917,76.953,115.431,76.953z" />
                <rect x="169.298" y="53.868" width="15.391" height="15.391" />
                <rect x="169.298" y="30.781" width="15.391" height="15.391" />
                <rect x="169.298" y="76.953" width="15.391" height="15.391" />
                <path d="M315.509,92.344h92.344V30.781h-92.344V92.344z M330.899,46.172h61.562v30.781h-61.562V46.172z" />

                <rect
                  x="191.839"
                  y="284.724"
                  transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 627.1506 325.063)"
                  width="108.827"
                  height="15.39"
                />

                <rect
                  x="203.925"
                  y="249.161"
                  transform="matrix(0.7071 0.7071 -0.7071 0.7071 249.7084 -71.8794)"
                  width="15.39"
                  height="32.649"
                />

                <rect
                  x="265.488"
                  y="310.722"
                  transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 235.095 751.472)"
                  width="15.39"
                  height="32.648"
                />
              </g>
            </g>
          </g>
        </svg>
      ),
      title: "Commerical Laundry",
      paragraph:
        "Don't waste your valuable time and resources on doing your business's laundry yourself. We can lighten yourload by taking care of your laundry for you!",
    },

    {
      id: 3,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fill={theme === "dark" ? "#fff" : "#000000"}
          height="800px"
          width="800px"
          version="1.1"
          id="Layer_1"
          viewBox="0 0 297.937 297.937"
          xmlSpace="preserve"
        >
          <g id="XMLID_173_">
            <g>
              <g>
                <path d="M37.247,283.738c0,7.842,6.357,14.199,14.199,14.199s14.199-6.357,14.199-14.199v-71.614H37.247V283.738z" />
                <path d="M71.774,283.738L71.774,283.738c-0.001,7.842,6.356,14.199,14.198,14.199s14.199-6.357,14.199-14.199v-71.614H71.774     V283.738z" />
                <circle cx="68.708" cy="24.522" r="24.522" />
                <path d="M112.599,74.261c-4.048-6.198-8.509-13.021-16.563-15.941c-2.076,5.859-8.093,22.838-10.163,28.677     c3.07,25.096,2.761,22.68,2.917,23.591c4.49,0.429,8.673,1.951,12.299,4.302c-2.207-11.397-3.08-19.764-3.08-19.764     s9.839,16.028,12.714,20.88c-0.629,10.858-1.049,18.093-1.714,29.563h-6.465c0.71-1.982,1.1-4.126,1.1-6.365     c0-1.437-0.164-2.832-0.466-4.172c-1.81-8.044-8.732-14.034-17.001-14.034c-3.24,0-6.272,0.923-8.873,2.525     c-2.084-4.393-6.832-7.465-12.364-7.465c-7.453,0-13.495,5.571-13.495,12.444c0,1.078,0.164,2.118,0.443,3.115     c-4.924,0.587-9.358,1.784-12.956,3.415c-5.769,2.615-9.383,6.35-9.383,10.499c0,0.013,0.002,0.026,0.002,0.038h-1.48     c-0.196-3.37-1.539-26.536-1.714-29.563c2.972-5.016,13.13-21.529,13.13-21.529l-5.229,31.099     c2.268-1.052,4.738-1.949,7.37-2.677c1.128-4.293,3.526-8.109,6.784-11.064c0.432-2.514-0.031,1.02,3.049-24.157     c-3.607-10.18-6.692-18.884-10.405-29.362c-8.061,2.918-12.525,9.744-16.574,15.944c-2.889,4.425-7.225,10.486-20.349,32.843     c-1.184,2.017-1.743,4.339-1.608,6.674c0.302,5.212,2.17,37.428,2.443,42.146c0.365,6.291,5.58,11.147,11.801,11.147     c0.231,0,0.463-0.006,0.696-0.02c2.426-0.14,4.638-1.006,6.442-2.369l4.024,34.228c0.179,1.526,1.473,2.677,3.009,2.677h75.535     c1.537,0,2.83-1.151,3.009-2.677l3.999-34.013c1.746,1.234,3.839,2.021,6.131,2.155c0.233,0.014,0.465,0.02,0.696,0.02     c6.221,0,11.437-4.857,11.801-11.147c0.272-4.683,2.144-36.971,2.443-42.146c0.135-2.335-0.424-4.657-1.608-6.674     C119.983,85.018,115.66,78.948,112.599,74.261z" />
                <path d="M60.592,85.84c6.193,0,10.368,0,15.907,0c7.103-20.044,1.589-4.482,10.27-28.98c-6.961,0-29.47,0-36.447,0     C52.353,62.591,58.32,79.427,60.592,85.84z" />
                <path d="M151.194,289.012c0,4.929,3.996,8.924,8.924,8.924h126.389c4.929,0,8.924-3.996,8.924-8.924V184.653H151.194V289.012z      M197.465,210.508c6.904-6.904,16.084-10.706,25.847-10.706s18.943,3.802,25.847,10.706c14.252,14.253,14.252,37.443,0,51.695     c-6.904,6.904-16.084,10.706-25.847,10.706s-18.943-3.802-25.847-10.706C183.213,247.95,183.213,224.76,197.465,210.508z" />
                <path d="M286.507,141.185H160.118c-4.929,0-8.924,3.996-8.924,8.924v21.372h144.238v-21.372     C295.432,145.18,291.436,141.185,286.507,141.185z M254.487,163.578c-3.273,0-5.927-2.654-5.927-5.927     c0-3.273,2.654-5.927,5.927-5.927c3.273,0,5.927,2.654,5.927,5.927C260.415,160.924,257.761,163.578,254.487,163.578z      M276.88,164.895c-4.001,0-7.245-3.244-7.245-7.245c0-4.001,3.243-7.245,7.245-7.245s7.245,3.244,7.245,7.245     C284.125,161.651,280.882,164.895,276.88,164.895z" />
                <path d="M239.845,219.823c-4.416-4.417-10.288-6.848-16.533-6.848c-6.245,0-12.117,2.432-16.533,6.848     c-9.116,9.116-9.116,23.949,0,33.065L239.845,219.823z" />
              </g>
            </g>
          </g>
        </svg>
      ),
      title: "Self Serve",
      paragraph:
        "Come into our family friendly laundromat near Johnstown to do your laundry in  a clean and comfortable environment.",
    },
  ];
};
export default featuresData;
