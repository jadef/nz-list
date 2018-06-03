import React from 'react';

// -- Styles
import '../../sass/sections/footer.scss';

/* -- Hierarchy
  - App
    - *Footer*
*/

/*
TODO:
- Build footer
*/

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer-content">


      <svg width="249px" height="91px" viewBox="0 0 249 91" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <defs>
          <filter x="-7.4%" y="-10.0%" width="123.5%" height="128.6%" filterUnits="objectBoundingBox" id="code-filter-1">
            <feOffset dx="2" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="0.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0.290196078   0 0 0 0 0.290196078   0 0 0 0 0.290196078  0 0 0 0.25 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
            <feMerge>
              <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
              <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
          </filter>
          <filter x="-2.8%" y="-3.9%" width="108.8%" height="109.8%" filterUnits="objectBoundingBox" id="code-filter-3">
            <feOffset dx="2" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="0.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0.290196078   0 0 0 0 0.290196078   0 0 0 0 0.290196078  0 0 0 0.25 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
            <feMerge>
              <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
              <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
          </filter>
          <path d="M88.4685782,8.37734887 C88.4685782,8.37734887 85.8320837,5.37046812 84.086475,3.63723957 C82.3408662,1.90401102 80.2017003,0.0763933791 80.2017003,0.0763933791 C80.2017003,0.0763933791 78.849044,2.72289036 75.9573541,5.59407178 C73.0656643,8.4652532 69.6045622,12.8036685 69.6045622,12.8036685 C69.6045622,12.8036685 67.7367983,14.7715488 67.1444065,15.3597393 C66.5520146,15.9479298 63.984822,20.7108558 59.8072378,24.8588117 C55.6296537,29.0067676 5.52779172,79.5845456 4.33260668,80.7712541 C3.13742163,81.9579627 -0.0933998707,83.4836793 0.0132742042,84.6057806 C0.119948279,85.7278819 2.75426577,88.5584736 4.16110572,88.5906571 C5.56794568,88.6228407 4.90008373,87.226939 7.74230681,84.4048736 C10.5845299,81.5828081 61.3615105,31.343678 63.7160807,29.0058069 C66.0706509,26.6679358 72.0817713,22.57474 73.086225,21.57741 C74.0906787,20.5800801 80.8363022,14.2605748 82.9535769,12.5983182 C85.0708517,10.9360616 88.4685782,8.37734887 88.4685782,8.37734887 Z" id="path-4"></path>
          <filter x="-4.2%" y="-4.0%" width="113.0%" height="113.0%" filterUnits="objectBoundingBox" id="code-filter-6">
            <feOffset dx="2" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="0.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0.290196078   0 0 0 0 0.290196078   0 0 0 0 0.290196078  0 0 0 0.25 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
            <feMerge>
              <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
              <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
          </filter>
          <path d="M33.732854,33.9665841 C33.5045086,34.1933101 25.2956846,26.2838411 25.3372899,25.9478352 C25.3788952,25.6118293 28.0181715,23.0095246 27.6966979,22.4134083 C27.3752243,21.817292 22.9791101,14.9302327 15.5963262,10.1584389 C8.21354219,5.38664505 1.03616155,1.04833118 0.51996546,0.989247936 C0.0037693695,0.930164693 -0.13374585,-0.137056409 0.652884744,0.165084729 C1.43951534,0.467225867 14.9069359,5.71854932 21.5406846,10.568539 C28.1744332,15.4185288 31.9541062,19.2218324 32.5516987,19.8151867 C33.1492912,20.408541 39.3037322,26.3992456 39.7209948,26.8135488 C40.1382573,27.227852 47.8776912,35.2882715 52.8704492,44.4217963 C57.8632071,53.5553212 59.6026476,60.444043 59.597326,61.0605743 C59.5920044,61.6771055 59.0937083,61.5378035 58.5074846,60.6485527 C57.921261,59.7593019 52.5354297,49.1097875 47.8267731,42.4329006 C43.1181166,35.7560138 37.7591352,31.7396742 37.3272382,31.8531573 C36.8953412,31.9666404 34.4823297,33.2224239 33.732854,33.9665841 Z" id="path-7"></path>
          <filter x="-3.7%" y="-6.5%" width="113.4%" height="116.7%" filterUnits="objectBoundingBox" id="code-filter-9">
            <feOffset dx="2" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="0.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0.290196078   0 0 0 0 0.290196078   0 0 0 0 0.290196078  0 0 0 0.25 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
            <feMerge>
              <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
              <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
          </filter>
        </defs>
        <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="code" transform="translate(1.000000, -5.000000)">

            <g id="code-close" filter="url(#code-filter-1)" transform="translate(210.000000, 31.000000)">
              <path className="c-bg-accent c-s-light" strokeWidth="1" d="M18.9619912,17.4700266 L-0.164406518,25.3818404 L-0.473283375,25.5096102 L-0.473283375,25.8438707 L-0.473283375,34.7273452 L-0.473283375,35.477012 L0.218835004,35.1889624 L33.8046015,21.2110568 L34.1124831,21.082921 L34.1124831,20.7494395 L34.1124831,13.9967203 L34.1124831,13.6633093 L33.8046915,13.5351405 L0.192208451,-0.461579799 L-0.5,-0.749825331 L-0.5,0 L-0.5,8.81243735 L-0.5,9.14234054 L-0.19669687,9.27212239 L18.9619912,17.4700266 Z"></path>
              <polygon id="bracket-c-sh" className="c-bg-accent-dark" points="0.232782123 0 33.4872241 13.8476268 33.4872241 20.6003461 0 34.5372398 30.2373042 17.6146603 0.232782123 8.8817842e-16"></polygon>
            </g>

            <g id="pick-r" transform="translate(149.402703, 48.402703) rotate(-315.000000) translate(-149.402703, -48.402703) translate(97.499154, -3.500846)">
              <g id="handle-r" filter="url(#code-filter-3)" transform="translate(0.000000, 14.963775)">
                <mask id="mask-5" fill="white">
                  <use xlinkHref="#path-4"></use>
                </mask>
                <g id="handle-r-shape">
                  <use className="c-bg-accent" fillRule="evenodd" xlinkHref="#path-4"></use>
                  <path className="c-s-light" strokeWidth="1" d="M88.8445272,8.04770911 C88.8032325,8.00061397 88.7264203,7.91336089 88.6182985,7.79110088 C88.4383054,7.58757141 88.236742,7.36084028 88.0183733,7.116692 C87.3943373,6.41898514 86.760422,5.72121074 86.1545769,5.06947655 C86.0213041,4.92628265 85.9754093,4.87709633 85.8876536,4.78342119 C85.3441098,4.203214 84.8566439,3.6973425 84.4387679,3.28243023 C84.3531452,3.19741471 84.2656075,3.11120266 84.1762277,3.02384811 C83.9907738,2.84259645 83.797807,2.65683254 83.5980708,2.46711309 C82.9258192,1.8285748 82.2063954,1.17270914 81.4870752,0.535254835 C81.235382,0.312206778 81.0016218,0.107340256 80.7917366,-0.0748403837 C80.665537,-0.184381815 80.5751368,-0.262191617 80.5264857,-0.303757177 L80.0448108,-0.715280897 L79.7564831,-0.151162456 C79.7185452,-0.0769362238 79.6379344,0.0704902147 79.5139782,0.281634591 C79.30477,0.637995507 79.0508325,1.03921596 78.7515161,1.47581966 C77.893942,2.72673668 76.8467447,4.00638514 75.6050612,5.23926244 C75.2064878,5.63500907 74.7853448,6.07005798 74.3443044,6.54044174 C74.02148,6.88474422 73.6894253,7.2464569 73.349496,7.62360283 C72.3893103,8.6889128 71.4086508,9.82934136 70.4595775,10.969652 C70.1274656,11.3686841 69.8229666,11.7392677 69.5526292,12.0719614 C69.3901693,12.2718944 69.2750086,12.4150075 69.2137049,12.4918503 C69.1614159,12.5442631 69.0202086,12.6928115 68.8382485,12.8838411 C68.5349902,13.202215 68.2308797,13.5205749 67.9459212,13.8176174 C67.9353162,13.8286716 67.9353162,13.8286716 67.9247108,13.8397246 C67.400355,14.3861889 67.0042235,14.7943243 66.7921135,15.0049299 C66.9581907,14.8400306 63.2081635,20.3825146 60.9622862,22.9085955 C60.4685354,23.4639484 59.9663893,23.9961852 59.4549448,24.5040023 C57.6976531,26.248831 48.2242974,35.7935648 31.8423201,52.3168384 C31.831509,52.3277428 31.831509,52.3277428 31.8206978,52.3386472 C27.1707183,57.0287358 12.0788637,72.253119 13.0237532,71.2999839 C7.01673734,77.3594204 4.25665603,80.1420623 3.98031371,80.4164448 C3.64018868,80.7541576 3.28149919,81.0147416 2.10871672,81.8121381 C1.91691598,81.942547 1.78234311,82.0346548 1.64934628,82.1269043 C0.09181659,83.2072411 -0.561001808,83.8481867 -0.484481593,84.6531004 C-0.344930613,86.1210328 2.57418026,89.0544847 4.14967047,89.0905264 C4.82411158,89.1059552 5.23489249,88.8589918 5.58160248,88.298355 C5.65203123,88.1844704 6.13804592,87.2569433 6.35493023,86.9053074 C6.78445104,86.2089226 7.33045797,85.5184053 8.09459978,84.7596829 C9.28409087,83.5786279 17.0382686,75.9042942 36.0604064,57.0804023 C36.0607841,57.0800285 36.0607841,57.0800285 36.0611619,57.0796546 C57.5301855,35.834378 63.0936637,30.3284133 64.0683737,29.3606162 C64.8170098,28.6172896 65.9899796,27.6447138 67.6025356,26.4047891 C67.8262312,26.2327853 68.0587054,26.0553781 68.3024273,25.8705882 C69.0568216,25.2986067 71.5115798,23.4695073 71.4703988,23.5003998 C72.5662842,22.6783068 73.1537613,22.2149565 73.438518,21.9322194 C75.1771399,20.2059281 81.5598275,14.3282232 83.2623365,12.9915961 C83.7744743,12.5895206 84.3882544,12.1140076 85.0830437,11.5803113 C85.1357186,11.5398548 85.1357186,11.5398548 85.1884089,11.4994068 C85.9716412,10.8982283 86.8110069,10.2588307 87.6503985,9.62265779 C87.9442056,9.39998203 88.2170199,9.19362227 88.4618361,9.00875254 C88.7135923,8.81875808 88.7135923,8.81875808 88.7693614,8.77676027 L89.1996518,8.45272316 L88.8445272,8.04770911 Z"></path>
                </g>
                <polygon id="dark" className="c-bg-accent-dark" mask="url(#mask-5)" points="86.9085913 2.34968361 81.2541821 7.96399058 75.9184663 2.66611671 61.7681744 19.5819688 71.1326293 14.5586039 73.4545121 16.8640195 4.85932155 82.6918347 1.96707227 82.3967082 0.913923091 78.8520827 -4.60838323 87.6313216 8.08947965 96.5429014 97.6935147 5.08410896"></polygon>
                </g>
                <g id="head-r" filter="url(#code-filter-6)" transform="translate(44.340120, 0.000000)">
                  <mask id="mask-8" fill="white">
                    <use xlinkHref="#path-7"></use>
                  </mask>
                  <g id="head-r-shape">
                    <use className="c-bg-accent" fillRule="evenodd" xlinkHref="#path-7"></use>
                    <path className="c-s-light" strokeWidth="1" d="M37.3438764,32.3728991 C37.3767767,32.3889684 37.4166212,32.4101072 37.4622034,32.4360138 C37.6463364,32.5406657 37.8970129,32.7071295 38.1929954,32.9232428 C38.8749922,33.4212069 39.7256942,34.1279691 40.6346141,34.9645335 C42.9634448,37.1079753 45.3373338,39.7704423 47.4181612,42.7210608 C47.9780927,43.5150451 48.5638528,44.38858 49.1735803,45.3363458 C49.9256345,46.5053455 50.7086513,47.7786217 51.5204948,49.147293 C53.7688512,52.9377535 58.1605478,61.0307159 58.0900328,60.9237508 C58.4266045,61.434301 58.7687069,61.7743944 59.1062678,61.891579 C59.6884845,62.0936961 60.0921032,61.6678217 60.0973074,61.0648899 C60.1122153,59.3377481 57.2577342,51.4052789 53.309178,44.1819692 C51.0989947,40.1387602 48.2112661,36.0180947 44.9677234,32.032367 C43.808643,30.6080668 42.6765106,29.2915861 41.6209214,28.1204612 C40.9285525,27.3523115 40.2995606,26.6834075 40.0732877,26.4587395 C39.8995309,26.2862149 39.4829455,25.8798671 36.4732121,22.9457077 C36.4723389,22.9448564 36.4723389,22.9448564 36.4714658,22.9440052 C34.2120835,20.7413553 33.151773,19.7064014 32.9039917,19.4603773 C32.4421932,19.0018541 32.2810752,18.843748 31.8566624,18.4398904 C31.2023752,17.8172918 30.4673831,17.1426945 29.6405517,16.413174 C27.3804093,14.4190308 24.7805827,12.3178773 21.8357821,10.1649087 C18.8868938,8.00895153 14.4453785,5.63691463 9.11144227,3.20637904 C7.21048614,2.34016292 5.31533552,1.52178034 3.50662767,0.773993898 C2.34669974,0.294436967 1.35870114,-0.0994284414 0.832162808,-0.301669356 C0.158082158,-0.560580586 -0.403681454,-0.194143242 -0.402133428,0.442922152 C-0.400931981,0.937358961 -0.0553851869,1.42665848 0.463107237,1.48600456 C0.870654127,1.53265193 8.40716517,6.10713933 15.3249131,10.5783614 C18.535107,12.6532405 21.4179964,15.2798977 23.9157469,18.1782127 C24.8233939,19.2314191 25.6255068,20.2593411 26.3013421,21.208191 C26.7663412,21.861034 27.1461535,22.44591 27.2566128,22.6507374 C27.2119485,22.5679154 27.1802437,22.6755271 27.0739283,22.8571805 C26.9264438,23.1091767 26.6942699,23.4288034 26.376539,23.8250156 C26.3042846,23.9151172 26.2276565,24.0091433 26.1447139,24.1096263 C26.0023794,24.2820612 25.4497572,24.9377795 25.3343134,25.0786559 C24.9779995,25.5134671 24.8680708,25.6684097 24.8410794,25.8863928 C24.7873198,26.3205571 26.0860896,27.6496705 29.0877102,30.5290579 C33.0274802,34.3083911 33.5913907,34.811648 34.085147,34.3213935 L34.085147,34.3213935 C34.6239016,33.7864598 36.6747674,32.6222865 37.3438764,32.3728991 Z"></path>
                    </g>
                    <polygon id="dark" className="c-bg-accent-dark" mask="url(#mask-8)" points="9.91644701 3.4323104 24.861442 14.5859643 29.2183638 22.1728256 25.8603551 26.5910124 26.7166954 27.7834706 34.8433272 21.4694348 37.0213531 23.8459557 29.2183638 30.1423318 32.9510396 35.0838392 38.1229036 33.2258162 61.0420346 53.2052087 44.9234762 15.7144272"></polygon>
                  </g>
                </g>

                <g id="code-open" filter="url(#code-filter-9)" transform="translate(0.000000, 18.693748)">
                  <path className="c-bg-accent c-s-light" strokeWidth="1" d="M59.642685,-0.382519001 L59.1913915,-0.539673733 L59.0139854,-0.0959503394 L38.7641519,50.5523844 L38.5646943,51.0512623 L39.0766015,51.2143985 L46.3801037,53.5419022 L46.8231033,53.6830787 L46.9960467,53.2514886 L67.2099843,2.80646186 L67.4047268,2.32047087 L66.9102913,2.14829267 L59.642685,-0.382519001 Z"></path>
                  <polygon id="bar-sh" className="c-bg-accent-dark" points="64.3452265 1.78450462 66.7458601 2.6204816 46.5319224 53.0655084 39.2284203 50.7380047 39.2376996 50.7147954 45.1710776 50.7056385 64.3452265 1.78450462"></polygon>

                  <path className="c-bg-accent c-s-light" strokeWidth="1" d="M15.5558493,28.946109 L34.6650011,20.8380286 L34.9697024,20.7087428 L34.9697024,20.3777478 L34.9697024,11.4227532 L34.9697024,10.6735902 L34.2778705,10.9610168 L0.658460919,24.9284474 L0.350292723,25.0564781 L0.350292723,25.3901839 L0.350292723,32.2866928 L0.350292723,32.6193402 L0.657108152,32.7478649 L34.1775673,46.7895541 L34.8707519,47.0799285 L34.8707519,46.328382 L34.8707519,37.3673446 L34.8707519,37.0346583 L34.5638868,36.9061516 L15.5558493,28.946109 Z"></path>

                  <path className="c-bg-accent-dark" d="M14.5597456,28.8256126 L34.4697024,20.3777478 L34.4697024,11.4227532 L31.799478,12.5321175 L31.799478,18.6982656 L14.5597456,28.8256126 Z M32.0533214,36.3968685 L34.3707519,37.3673446 L34.3707519,46.328382 L0.850292723,32.2866928 L0.850292723,32.2687456 L32.0533214,42.0828799 L32.0533214,36.3968685 Z"></path>
                </g>

              </g>
            </g>
          </svg>
        </div>
      </footer>
    );
  }
}

export default Footer;
