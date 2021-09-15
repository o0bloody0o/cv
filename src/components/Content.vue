<template>
  <div class="contentContainer">
    <div class="leftContainer">
      <div ref="profile" class="boxContainer">
        <div class="boxName">
          {{ $t("profile.name") }}
        </div>
        <div class="boxContent">
          <div class="boxContentText">
            {{ $t("profile.content") }}
          </div>
        </div>
      </div>

      <div ref="contact" class="boxContainer">
        <div class="boxName">
          {{ $t("contact.name") }}
        </div>
        <div class="boxContent">
          <div class="boxContentText contact">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1280.000000 1280.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <metadata>
                Created by potrace 1.15, written by Peter Selinger 2001-2017
              </metadata>
              <g
                transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M4202 11749 c-171 -22 -300 -87 -428 -214 -75 -74 -99 -106 -136
-182 -26 -50 -55 -127 -65 -170 -17 -75 -18 -257 -18 -4788 0 -4487 1 -4713
18 -4780 10 -38 38 -113 64 -165 39 -80 59 -108 137 -185 76 -76 106 -99 186
-138 183 -90 -52 -82 2440 -82 2492 0 2257 -8 2440 82 80 39 110 62 186 138
78 77 98 105 137 185 26 52 54 127 64 165 17 67 18 293 18 4785 0 4492 -1
4718 -18 4785 -10 39 -38 113 -64 165 -39 80 -59 108 -137 185 -103 103 -199
160 -333 198 l-78 22 -2175 1 c-1196 1 -2203 -2 -2238 -7z m2686 -701 c18 -18
15 -94 -4 -112 -14 -14 -71 -16 -484 -16 -413 0 -470 2 -484 16 -19 18 -22 94
-4 112 17 17 959 17 976 0z m1852 -4648 l0 -3810 -2340 0 -2340 0 0 3810 0
3810 2340 0 2340 0 0 -3810z m-2270 -4141 c196 -31 349 -185 382 -383 37 -225
-113 -452 -337 -511 -260 -67 -520 103 -566 371 -41 239 132 483 371 523 76
12 77 12 150 0z"
                />
              </g>
            </svg>
            <div>{{ $t("contact.phone") }}</div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1280.000000 1280.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <metadata>
                Created by potrace 1.15, written by Peter Selinger 2001-2017
              </metadata>
              <g
                transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M6555 12254 c-501 -22 -884 -68 -1283 -155 -1377 -301 -2493 -1063
-3283 -2239 -149 -222 -267 -429 -409 -715 -234 -474 -375 -848 -499 -1325
-155 -595 -219 -1146 -208 -1800 11 -696 106 -1257 317 -1874 244 -713 595
-1280 1110 -1796 398 -397 818 -695 1335 -946 835 -405 1870 -634 2997 -663
1000 -26 1841 75 2548 305 682 221 1314 561 1830 983 389 318 735 683 962
1016 128 187 254 415 244 440 -2 7 -71 48 -153 92 l-148 78 -557 3 -557 3 -63
-83 c-231 -305 -507 -559 -858 -793 -766 -510 -1546 -751 -2610 -805 -1113
-57 -2206 136 -3056 540 -1116 530 -1830 1511 -2048 2815 -139 833 -75 1746
179 2525 156 481 414 997 685 1374 263 366 616 714 983 970 216 151 554 337
811 446 465 197 977 319 1517 361 209 16 758 7 939 -15 564 -69 1040 -210
1505 -446 692 -350 1185 -817 1512 -1430 210 -395 338 -817 384 -1265 14 -143
14 -509 0 -650 -79 -765 -415 -1503 -930 -2047 -293 -309 -783 -625 -1063
-684 -159 -34 -292 0 -336 86 -48 93 -38 152 297 1700 110 509 317 1470 461
2135 143 666 263 1218 266 1228 5 16 -27 17 -575 17 l-580 0 -19 -27 c-69
-100 -79 -132 -144 -445 -34 -170 -66 -307 -69 -305 -4 1 -40 45 -80 97 -88
115 -276 310 -379 393 -362 293 -821 457 -1275 457 -610 0 -1309 -314 -1847
-828 -592 -568 -1081 -1518 -1222 -2375 -41 -247 -50 -367 -50 -642 1 -437 59
-769 200 -1155 47 -126 198 -432 269 -544 338 -534 829 -871 1425 -978 161
-29 429 -29 590 0 470 85 934 346 1368 769 59 56 107 103 108 103 0 0 7 -26
14 -58 26 -119 83 -289 117 -352 134 -246 377 -404 718 -466 125 -23 547 -27
690 -6 563 81 1023 289 1530 691 147 116 524 491 665 661 664 800 1010 1638
1081 2620 15 203 6 651 -15 840 -86 743 -321 1396 -724 2015 -107 164 -252
358 -375 500 -123 143 -394 408 -527 517 -797 650 -1801 1026 -2980 1118 -137
10 -609 19 -735 14z m-85 -3558 c328 -21 669 -234 874 -546 326 -494 340
-1360 36 -2187 -69 -186 -220 -491 -317 -638 -256 -388 -641 -721 -1001 -865
-186 -75 -274 -93 -457 -94 -138 -1 -172 2 -245 22 -306 83 -602 348 -754 673
-115 248 -166 513 -166 867 0 375 65 739 207 1156 165 487 382 855 688 1162
233 236 424 351 694 421 89 22 272 43 331 37 14 -2 63 -5 110 -8z"
                />
              </g>
            </svg>
            <div>{{ $t("contact.email") }}</div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1280.000000 914.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <metadata>
                Created by potrace 1.15, written by Peter Selinger 2001-2017
              </metadata>
              <g
                transform="translate(0.000000,914.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M1195 9129 c-510 -65 -953 -428 -1121 -921 -71 -209 -65 100 -70
-3578 -2 -2270 0 -3345 7 -3410 26 -237 116 -468 257 -660 66 -91 204 -229
290 -290 144 -103 334 -190 511 -232 85 -20 117 -21 2261 -29 1196 -5 3552 -8
5235 -6 l3060 3 85 21 c137 34 207 60 335 123 409 202 684 594 744 1059 8 59
11 1079 11 3445 -1 2774 -3 3371 -14 3416 -42 173 -109 327 -202 467 -71 107
-203 246 -313 329 -88 67 -300 177 -399 208 -30 10 -95 27 -145 39 l-92 22
-5185 1 c-2961 1 -5215 -2 -5255 -7z m7845 -3165 c-1678 -1678 -2471 -2465
-2505 -2485 -69 -40 -150 -41 -217 -1 -29 17 -948 928 -2507 2485 l-2461 2457
5072 0 5073 0 -2455 -2456z m3070 -1326 l-5 -3423 -22 -77 c-58 -204 -153
-318 -326 -391 l-72 -30 -1727 1734 -1727 1734 1937 1938 c1065 1065 1939
1937 1942 1937 3 0 3 -1540 0 -3422z m-9430 1487 l1905 -1905 -1747 -1747
-1747 -1747 -62 29 c-123 59 -208 173 -246 330 -16 65 -18 301 -20 3508 -2
1890 0 3437 4 3437 5 0 865 -857 1913 -1905z m3005 -3000 c451 -455 620 -619
649 -631 50 -20 133 -20 182 1 28 11 207 184 634 610 l595 595 1503 -1503
c826 -826 1502 -1504 1502 -1507 0 -3 -1964 -5 -4365 -5 -2401 0 -4365 2
-4365 5 0 6 3043 3050 3050 3050 3 0 280 -276 615 -615z"
                />
              </g>
            </svg>
            <div>{{ $t("contact.addr") }}</div>
          </div>
        </div>
      </div>

      <div ref="languages" class="boxContainer">
        <div class="boxName">
          {{ $t("languages.name") }}
        </div>
        <div class="boxContent">
          <div class="boxContentText">
            {{ $t("languages.en") }}
          </div>
        </div>
      </div>

      <div ref="hobbies" class="boxContainer">
        <div class="boxName">
          {{ $t("hobbies.name") }}
        </div>
        <div class="boxContent">
          <div class="boxContentText">
            {{ $t("hobbies.content") }}
          </div>
        </div>
      </div>

      <div></div>
    </div>

    <div ref="name" class="name">
      <div class="content">
        <div>Pierre FABRE</div>
        <div>développeur web</div>
      </div>
    </div>

    <div class="rightContainer">
      <div ref="xp" class="boxContainer">
        <div class="boxName">
          {{ $t("xp.name") }}
        </div>
        <div class="boxContent">
          <div class="boxMidTitle">
            {{ $t("xp.b2b.name") }}
          </div>
          <div class="boxUnderTitle">
            {{ $t("xp.b2b.label") }}
          </div>
          <div class="boxContentText">
            {{ $t("xp.b2b.content") }}
          </div>
        </div>
      </div>

      <div ref="skills" class="boxContainer">
        <div class="boxName">
          {{ $t("skills.name") }}
        </div>
        <div class="boxContent skills">
          <div class="skillBar"><div class="skillProgress"></div></div>
          <div>nodejs</div>

          <div class="skillBar"><div class="skillProgress"></div></div>
          <div>css</div>

          <div class="skillBar"><div class="skillProgress"></div></div>
          <div>js / ts</div>

          <div class="skillBar"><div class="skillProgress"></div></div>
          <div>React</div>

          <div class="skillBar"><div class="skillProgress"></div></div>
          <div>VueJS</div>

          <div class="skillBar"><div class="skillProgress"></div></div>
          <div>Angular JS</div>
        </div>
      </div>

      <div ref="formation" class="boxContainer">
        <div class="boxName">
          {{ $t("formation.name") }}
        </div>
        <div class="boxContent">
          <div class="boxMidTitle">2014 - {{ $t("formation.bts.name") }}</div>
          <div class="boxUnderTitle">
            {{ $t("formation.bts.location") }}
          </div>
          <div class="boxMidTitle">2012 - {{ $t("formation.bac.name") }}</div>
          <div
            class="boxUnderTitle"
            v-html="$t('formation.bac.location')"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "Content",
  mounted() {
    const skillProgressBar = document.getElementsByClassName("skillProgress");
    const skillsLvl = [
      "90%", //nodejs

      "80%", //css
      "80%", //js

      "80%", //react
      "60%", //vueJS
      "40%", //angular JS
    ];

    const skillTl = gsap.timeline({
      paused: true,
      defaults: {
        duration: 0.3,
      },
    });
    for (let i = 0; i < 6; i++) {
      skillTl.to(skillProgressBar[i], { width: skillsLvl[i] }, 0.2 * i);
    }

    const tlGlobal = gsap.timeline({
      paused: true,
      defaults: {
        opacity: 0,
        duration: 1,
      },
    });

    tlGlobal
      .from(
        this.$refs.name,
        {
          onComplete() {
            skillTl.play();
          },
        },
        0.4
      )
      .from(this.$refs.profile, {}, 0.8)

      .from(this.$refs.xp, {}, 1)
      .from(this.$refs.skills, {}, 1.2)
      .from(this.$refs.formation, {}, 1.4)

      .from(this.$refs.contact, {}, 1.4)
      .from(this.$refs.languages, {}, 1.6)
      .from(this.$refs.hobbies, {}, 1.8);

    tlGlobal.play();
  },
};
</script>

<style scoped lang="less">
.contentContainer {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  overflow-y: auto;
  text-align: justify;

  > div {
    display: flex;
    flex-direction: column;

    > div {
      margin: auto 0;
    }
  }
}

.leftContainer {
  .boxContainer {
    padding-left: 40px;

    .boxContent {
      padding-left: 20px;
    }
  }

  > div:last-child {
    flex-grow: 1;
  }
}

.rightContainer {
  text-align: right;

  .boxContainer {
    padding-right: 40px;

    .boxContent {
      padding-right: 20px;

      .boxContentText {
        padding-right: 20px;
        text-align: justify;
      }
    }
  }
}

.boxContainer {
  padding-top: 40px;
  padding-bottom: 40px;

  .boxName {
    color: #ffb86c;
    font-weight: bold;
    font-size: xx-large;
  }

  .boxContent {
    .boxMidTitle {
      padding-top: 10px;
      color: #ba7c32;
      font-size: x-large;
    }

    .boxUnderTitle {
      color: #989898;
      font-size: medium;
    }

    .boxContentText {
      padding-top: 10px;
      font-size: large;
    }
  }
}

.boxContent.skills {
  padding-top: 10px;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: repeat(6, auto);
  text-align: left;
  align-items: center;

  :nth-child(2n) {
    padding-left: 10px;
  }

  .skillBar {
    border: 1px white solid;
    border-radius: 2px;
    height: 5px;
    width: 100%;
    font-size: 0;
    display: flex;
    justify-content: right;
  }
  .skillProgress {
    height: 100%;
    width: 0;
    background-color: white;
  }
}

.boxContentText.contact {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: repeat(3, auto);
  align-items: center;

  div {
    padding-left: 10px;
  }

  svg {
    width: 25px;
    height: 25px;

    g {
      fill: white;
    }
  }
}

@media (orientation: landscape) {
  .contentContainer {
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr auto;
    color: white;

    .name {
      display: flex;
      flex-direction: column;

      > div {
        margin: auto;
        display: flex;
        flex-direction: column;

        > div:first-child {
          font-size: xxx-large;
          margin-bottom: 10px;
        }

        > div:last-child {
          border-top: 1px white solid;
          padding-top: 5px;
          font-size: large;
        }

        > div {
          margin: auto;
        }
      }
    }
  }
}

@media (orientation: portrait) {
  .contentContainer {
    display: flex;
  }
}
</style>
