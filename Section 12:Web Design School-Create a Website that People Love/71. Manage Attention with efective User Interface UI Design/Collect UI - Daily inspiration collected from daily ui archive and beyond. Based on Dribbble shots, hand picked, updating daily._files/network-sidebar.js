// Create and inject CSS
const style = document.createElement('style');
style.innerHTML = `
.network-sidebar-container {
    display: block;
    width: 48px;
    background: #e9ecf1;
    height: 100vh;
    position: fixed;
    left: 0px;
    top: 0px;
    border-right: 1px solid #ddd;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
    z-index: 999999;
}
.network-sidebar-container.hidden {
    display: none;
}
.network-sidebar-container .bottom {
    position: absolute;
    bottom: 0px;
}
.network-sidebar-container .bottom .panda-network {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.network-sidebar-container .bottom .panda-network svg {
    fill: #3270f6;
    display: block;
}
.network-sidebar-container .bottom .panda-network .link-bg {
    position: absolute;
    width: 40px;
    height: 40px;
    background: #fff;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.03);
    left: 4px;
    top: 4px;
    border-radius: 40px;
    transition: all 0.1s, opacity 0.1s;
    transform: scale(0.8);
    z-index: -1;
    opacity: 0;
}
.network-sidebar-container .bottom .panda-network .link-bg .arrow {
    position: absolute;
    right: 4px;
    top: 4px;
}
.network-sidebar-container .bottom .panda-network .footer-tt {
    position: absolute;
    left: 56px;
    background: #fff;
    z-index: 999999999999;
    padding: 12px;
    border-radius: 10px;
    transition: all 0.2s;
    opacity: 0;
    padding: 8px;
    font-weight: 600;
    font-size: 14px;
    line-height: 140%;
    letter-spacing: -0.02em;
    color: #fff;
    background: radial-gradient(50% 79.59% at 50% 50%, #555d68 0%, #06090d 100%);
    border-radius: 10px;
    width: 195px;
    height: 36px;
    box-sizing: border-box;
    left: 52px;
    top: 6px;
    pointer-events: none;
}
.network-sidebar-container .bottom .panda-network .footer-tt .footer-tt-title span {
    display: inline-block;
    animation: wave-animation 1.5s infinite;
    margin-right: 3px;
}
.network-sidebar-container .bottom .panda-network:hover .link-bg {
    opacity: 1;
    transform: scale(1);
    border-radius: 9px;
}
.network-sidebar-container .bottom .panda-network:hover svg {
    animation: panda-animation 3s infinite;
}
.network-sidebar-container .bottom .panda-network:hover .footer-tt {
    opacity: 1;
}
.network-sidebar-container .bottom .panda-network:active .panda-network-sidebar-logo {
    transform: scale(0.96);
}
.network-sidebar-container .links {
    margin-top: 4px;
}
.network-sidebar-container .separator {
    width: 32px;
    height: 1px;
    background: #d3d9e3;
    margin: 8px 8px;
}
.network-sidebar-container .link {
    width: 48px;
    height: 48px;
    position: relative;
    display: block;
}
.network-sidebar-container .link.new:after {
    content: "";
    position: absolute;
    background: url('https://asteya.network/host/network-sidebar/network-new.png') top left no-repeat;
    background-size: 30px 27px;
    width: 30px;
    height: 27px;
    top: -2px;
    left: 0px;
}
.network-sidebar-container .link.featured .arrow {
    position: absolute;
    right: 12px;
    top: 12px;
    z-index: 10;
    fill: #3270f6;
    transform: scale(0.3);
    opacity: 0;
    transition: all 0.15s;
    transform-origin: bottom left;
}
.network-sidebar-container .link.featured:after {
    content: "";
    position: absolute;
    background: url('https://asteya.network/host/network-sidebar/network-featured.svg') top left no-repeat;
    background-size: 14px 14px;
    width: 14px;
    height: 14px;
    top: 4px;
    left: 4px;
}
.network-sidebar-container .link .link-bg {
    position: absolute;
    width: 32px;
    height: 32px;
    background: #fff;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.03);
    left: 8px;
    top: 8px;
    border-radius: 40px;
    transition: all 0.1s;
}
.network-sidebar-container .link .link-a {
    width: 32px;
    height: 32px;
    margin-top: 8px;
    margin-left: 8px;
    border-radius: 32px;
    display: block;
    float: left;
    transform: scale(1);
    transition: all 0.1s, transform 0.2s !important;
    background-color: #fff;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.03);
    position: relative;
}
.network-sidebar-container .link .link-a:after {
    background: url('https://asteya.network/host/network-sidebar/network-sidebar-4.png') top left no-repeat;
    background-size: 352px 64px;
    background-position: 0px 0px;
    transition: all 0.1s;
    opacity: 0;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 32px;
    height: 32px;
    border-radius: 32px;
    content: "";
}
.network-sidebar-container .link .link-a.flatuicolorscom::after {
    background-position: 0px 0px;
}
.network-sidebar-container .link .link-a.materialuicolorsco::after {
    background-position: -32px 0px;
}
.network-sidebar-container .link .link-a.thestocksim::after {
    background-position: -64px 0px;
}
.network-sidebar-container .link .link-a.collectuicom::after {
    background-position: -96px 0px;
}
.network-sidebar-container .link .link-a.pfoliosnet::after {
    background-position: -128px 0px;
}
.network-sidebar-container .link .link-a.designerdailyreportcom::after {
    background-position: -160px 0px;
}
.network-sidebar-container .link .link-a.usepandacom::after {
    background-position: -192px 0px;
}
.network-sidebar-container .link .link-a.zeplinio::after {
    background-position: -224px 0px;
}
.network-sidebar-container .link .link-a.getfeatured::after {
    background-position: -256px 0px;
}
.network-sidebar-container .link .link-a.webflow::after {
    background-position: -288px 0px;
}
.network-sidebar-container .link .link-a.musho::after {
    background-position: -320px 0px;
}
.network-sidebar-container .link:not(.selected) .link-a:before {
    background: url('https://asteya.network/host/network-sidebar/network-sidebar-4.png') top left no-repeat;
    background-size: 352px 64px;
    background-position: 0px 0px;
    transition: all 0.1s;
    opacity: 1;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 32px;
    height: 32px;
    border-radius: 32px;
    content: "";
}
.network-sidebar-container .link:not(.selected) .link-a.flatuicolorscom:before {
    background-position: 0px -32px;
}
.network-sidebar-container .link:not(.selected) .link-a.materialuicolorsco:before {
    background-position: -32px -32px;
}
.network-sidebar-container .link:not(.selected) .link-a.thestocksim:before {
    background-position: -64px -32px;
}
.network-sidebar-container .link:not(.selected) .link-a.collectuicom:before {
    background-position: -96px -32px;
}
.network-sidebar-container .link:not(.selected) .link-a.pfoliosnet:before {
    background-position: -128px -32px;
}
.network-sidebar-container .link:not(.selected) .link-a.designerdailyreportcom:before {
    background-position: -160px -32px;
}
.network-sidebar-container .link:not(.selected) .link-a.usepandacom:before {
    background-position: -192px -32px;
}
.network-sidebar-container .link:not(.selected) .link-a.zeplinio:before {
    background-position: -224px -32px;
}
.network-sidebar-container .link:not(.selected) .link-a.getfeatured:before {
    background-position: -256px -32px;
}
.network-sidebar-container .link:not(.selected) .link-a.webflow:before {
    background-position: -288px -32px;
}
.network-sidebar-container .link:not(.selected) .link-a.musho:before {
    background-position: -320px -32px;
}
.network-sidebar-container .link .tt {
    position: absolute;
    left: 56px;
    width: 232px;
    background: #fff;
    z-index: 999999999999;
    padding: 12px;
    border-radius: 10px;
    transition: all 0.2s;
    opacity: 0;
    pointer-events: none;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15);
}
.network-sidebar-container .link .tt .tt-title {
    display: inline-block;
    font-weight: bold;
    color: #121212;
    font-size: 14px;
    margin-bottom: 4px;
}
.network-sidebar-container .link .tt .tt-title span {
    font-size: 16px;
    width: 100%;
    display: inline-block;
    margin-bottom: 8px;
}
.network-sidebar-container .link .tt .tt-descr {
    display: inline-block;
    font-size: 12px;
    font-weight: normal;
    line-height: 140%;
    width: 100%;
    color: #3e3e3e;
    letter-spacing: -0.01em;
}
.network-sidebar-container .link .tt .tt-descr span {
    font-weight: 600;
    color: #121212;
}
.network-sidebar-container .link .tt .tt-descr img {
    margin-top: 8px;
}
.network-sidebar-container .link:active .link-a {
    transform: scale(0.96);
}
.network-sidebar-container .link:hover.featured:after {
    animation: flip 0.7s 1;
}
.network-sidebar-container .link:hover.featured .arrow {
    transform: scale(1);
    opacity: 1;
    top: 8px;
    right: 8px;
}
.network-sidebar-container .link:hover.featured .link-a::after {
    border-radius: 0px;
}
.network-sidebar-container .link:hover.new:after {
    animation: rubberBand 0.5s 1;
}
.network-sidebar-container .link:hover .link-bg {
    border-radius: 9px;
    opacity: 1;
    background: #fff;
    width: 40px;
    height: 40px;
    left: 4px;
    top: 4px;
}
.network-sidebar-container .link:hover .link-a:not(.selected):before {
    opacity: 0;
}
.network-sidebar-container .link:hover .link-a:after {
    opacity: 1;
}
.network-sidebar-container .link:hover .link-a.getfeatured::after {
    border-radius: 9px;
}
.network-sidebar-container .link:hover .tt {
    opacity: 1;
}
.network-sidebar-container .link.selected .link-a {
    border-radius: 9px;
}
.network-sidebar-container .link.selected .link-a:after {
    opacity: 1;
    border-radius: 9px;
}
.network-sidebar-container .link.selected:before {
    content: "";
    position: absolute;
    left: 0px;
    top: 12px;
    width: 2px;
    height: 24px;
    background: #000;
    border-radius: 0px 3px 3px 0px;
}
@keyframes panda-animation {
    0%, 100% {
        fill: #3270f6;
   }
    20% {
        fill: #7b42cd;
   }
    40% {
        fill: #78b135;
   }
    60% {
        fill: #ef8b34;
   }
    80% {
        fill: #dc462a;
   }
}
@keyframes wave-animation {
   /* The following five values can be played with to make the waving more or less extreme */
   /* Reset for the last half to pause */
    0% {
        transform: rotate(0deg);
   }
    10% {
        transform: rotate(14deg);
   }
    20% {
        transform: rotate(-8deg);
   }
    30% {
        transform: rotate(14deg);
   }
    40% {
        transform: rotate(-4deg);
   }
    50% {
        transform: rotate(10deg);
   }
    60% {
        transform: rotate(0deg);
   }
    100% {
        transform: rotate(0deg);
   }
}
@keyframes rubberBand {
    from {
        transform: scale3d(1, 1, 1);
   }
    30% {
        transform: scale3d(1.25, 0.75, 1);
   }
    40% {
        transform: scale3d(0.75, 1.25, 1);
   }
    50% {
        transform: scale3d(1.15, 0.85, 1);
   }
    65% {
        transform: scale3d(0.95, 1.05, 1);
   }
    75% {
        transform: scale3d(1.05, 0.95, 1);
   }
    to {
        transform: scale3d(1, 1, 1);
   }
}
@keyframes flip {
    from {
        transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
        animation-timing-function: ease-out;
   }
    40% {
        transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
        animation-timing-function: ease-out;
   }
    50% {
        transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
        animation-timing-function: ease-in;
   }
    80% {
        transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
        animation-timing-function: ease-in;
   }
    to {
        transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
        animation-timing-function: ease-in;
   }
}
body.network-sidebar {
    padding-left: 48px;
}
`;
document.head.appendChild(style);

// Create and inject HTML (network sidebar container)
const networkSidebarContainer = document.createElement('div');
networkSidebarContainer.className = 'network-sidebar-container';
networkSidebarContainer.innerHTML = `
<div class="links">
      <a class="link new" href="https://designerdailyreport.com" data-url="http://bit.ly/3YvvdNW"  target="_blank">
        <div class="link-bg"></div>
        <div class="link-a designerdailyreportcom"></div>
        <div class="tt">
          <span class="tt-title">Designer Daily Report</span>
          <span class="tt-descr">Everything about design, in just 5 minutes.</span>
        </div>
      </a>
      <a class="link" href="https://usepanda.com" data-url="http://bit.ly/3Pw02ho"  target="_blank">
        <div class="link-bg"></div>
        <div class="link-a usepandacom"></div>
        <div class="tt">
          <span class="tt-title">Panda</span>
          <span class="tt-descr">The homepage for your favorite websites. Simple free news reader.</span>
        </div>
      </a>
      <a class="link" href="https://flatuicolors.com" data-url="http://bit.ly/3uWkKxs" target="_blank">
        <div class="link-bg"></div>
        <div class="link-a flatuicolorscom"></div>
        <div class="tt">
              <span class="tt-title">Flat UI Colors 2</span>
              <span class="tt-descr">Best color palettes for quick selection.</span>
        </div>
      </a>
      <a class="link" href="https://thestocks.im" data-url="http://bit.ly/3BEKtOP"  target="_blank">
        <div class="link-bg"></div>
        <div class="link-a thestocksim"></div>
        <div class="tt">
          <span class="tt-title">The Stocks v3</span>
          <span class="tt-descr">2100+ daily updating tools for designers.</span>
        </div>
      </a>
      <a class="link" href="https://collectui.com" data-url="http://bit.ly/3uWnbjA"  target="_blank">
        <div class="link-bg"></div>
        <div class="link-a collectuicom"></div>
        <div class="tt">
          <span class="tt-title">Collect UI</span>
          <span class="tt-descr">Daily inspiration collected from daily ui archive and beyond.</span>
        </div>
      </a>
      <a class="link" href="https://pfolios.net" data-url="http://bit.ly/3hq3X2V"  target="_blank">
        <div class="link-bg"></div>
        <div class="link-a pfoliosnet"></div>
        <div class="tt">
          <span class="tt-title">Portfolio Inspiration</span>
          <span class="tt-descr">Portfolio inspiration for designers & developers.</span>
        </div>
      </a>
        <a class="link" href="https://materialuicolors.co" data-url="http://bit.ly/3uVRuHq" target="_blank">
        <div class="link-bg"></div>
          <div class="link-a materialuicolorsco"></div>
          <div class="tt">
              <span class="tt-title">Material UI Colors</span>
              <span class="tt-descr">Color palette for material design.</span>
          </div>
      </a>
      <div class="separator"></div>
      <a class="link featured" href="https://zeplin.io" data-url="https://bit.ly/44GS3nS"  target="_blank">
        <svg class="arrow" width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.39407 1.66496H0.999523V0.334961H4.99952C5.36679 0.334961 5.66452 0.632692 5.66452 0.999961V4.99996H4.33452V2.60541L1.46975 5.47019L0.529297 4.52974L3.39407 1.66496Z"/>
        </svg>
        <div class="link-bg"></div>
        <div class="link-a zeplinio"></div>
        <div class="tt">
          <span class="tt-title">Zeplin</span>
          <span class="tt-descr">Handoff designs and styleguides with accurate specs, assets, code snippets—automatically.<br><img src="https://asteya.network/host/network-sidebar/network-featured-tag.png" width="86"></span>
        </div>
      </a>
      <a class="link featured" href="https://webflow.com" data-url="https://bit.ly/3r8M1yt"  target="_blank">
        <div class="link-bg"></div>
        <div class="link-a webflow"></div>
        <div class="tt">
          <span class="tt-title">Webflow</span>
          <span class="tt-descr">Create professional, custom websites in a completely visual canvas with no code. Learn how to create a website by trying Webflow for free!<br><img src="https://asteya.network/host/network-sidebar/network-featured-tag.png" width="86"></span>
        </div>
      </a>
      <a class="link featured" href="https://musho.ai" data-url="https://bit.ly/3QACSYk"  target="_blank">
        <svg class="arrow" width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.39407 1.66496H0.999523V0.334961H4.99952C5.36679 0.334961 5.66452 0.632692 5.66452 0.999961V4.99996H4.33452V2.60541L1.46975 5.47019L0.529297 4.52974L3.39407 1.66496Z"/>
        </svg>
        <div class="link-bg"></div>
        <div class="link-a musho"></div>
        <div class="tt">
          <span class="tt-title">Musho</span>
          <span class="tt-descr">Create gorgeous dev-ready landing pages in seconds with the Musho AI Figma Plugin.<br><img src="https://asteya.network/host/network-sidebar/network-featured-tag.png" width="86"></span>
        </div>
      </a>
      <a class="link" href="https://docs.google.com/forms/d/e/1FAIpQLSf6etWDCYNMYsmLv7vWIXpZ__3wgV8vmZbgu4iCx9yJB7uNXQ/viewform" data-url="http://bit.ly/3BDhJpu" target="_blank">
        <div class="link-bg"></div>
        <div class="link-a getfeatured"></div>
        <div class="tt">
          <span class="tt-title"><span>👈</span>Get Featured Here!</span>
          <span class="tt-descr"><span>Reach 400.000+</span> unique creatives by featuring your tool on Panda Network.</span>
        </div>
      </a>
    </div>
    <div class="bottom">
      <a href="https://panda.network" data-url="http://bit.ly/3Wq5pBd" class="link panda-network" target="_blank">
        <div class="link-bg">
          <svg class="arrow" width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.39407 1.66496H0.999523V0.334961H4.99952C5.36679 0.334961 5.66452 0.632692 5.66452 0.999961V4.99996H4.33452V2.60541L1.46975 5.47019L0.529297 4.52974L3.39407 1.66496Z"/>
          </svg>
        </div>
        <svg class="panda-network-sidebar-logo" width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.9" d="M15.9415 3.25278C15.9415 2.02002 14.9425 1.01909 13.712 1.01909C13.0337 1.01909 12.4257 1.32327 12.0166 1.80279C10.8702 1.04402 9.47357 0.600098 7.97393 0.600098C6.47284 0.600098 5.07503 1.04576 3.92806 1.80655C3.51897 1.32486 2.90957 1.01909 2.22947 1.01909C0.998969 1.01909 0 2.02002 0 3.25278C0 4.1367 0.513541 4.9014 1.25776 5.26345C1.05894 5.87364 0.951792 6.52216 0.951792 7.19531V7.71407C0.951792 9.99641 2.36851 12.0642 4.5582 13.013L4.73437 13.092L4.73617 13.0928C6.87778 14.0279 9.34985 14.0087 11.4784 13.0419C13.6178 12.074 14.996 10.0313 14.996 7.77513V7.19531C14.996 6.52076 14.8888 5.87129 14.6898 5.26048C15.4307 4.89723 15.9415 4.13429 15.9415 3.25278Z"/>
        </svg>
        <div class="footer-tt">
          <span class="footer-tt-title"><span>👋</span> Made by Panda Network</span>
        </div>
      </a>
    </div>
`;

// Add behavior
window.onload = function() {
    console.log("document content loaded");
    if (window.innerWidth < 600) {
        document.body.classList.remove('network-sidebar');
        document.querySelector('.network-sidebar-container').classList.add('hidden');
    }
    else {
        document.body.appendChild(networkSidebarContainer);
        document.body.classList.add('network-sidebar');
        document.querySelectorAll('.network-sidebar-container .link').forEach(function (el) {
            el.addEventListener('click', function () {
                let temp = el.href;
                el.href = el.getAttribute('data-url');
                setTimeout(() => {
                    el.href = temp;
                }, 500);
            });
        });

        let currentSite = document.querySelectorAll('.network-sidebar-container a[href*="' + window.location.host + '"]')[0];
        if (currentSite) {
            currentSite.href = 'javascript:;';
            currentSite.classList.add('selected');
        }
    }
};