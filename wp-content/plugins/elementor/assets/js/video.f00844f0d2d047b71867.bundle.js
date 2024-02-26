/*! elementor - v3.15.0 - 31-07-2023 */
"use strict";(self.webpackChunkelementor=self.webpackChunkelementor||[]).push([["video"],{"../assets/dev/js/frontend/handlers/video.js":
/*!***************************************************!*\
  !*** ../assets/dev/js/frontend/handlers/video.js ***!
  \***************************************************/(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class i extends elementorModules.frontend.handlers.Base{getDefaultSettings(){return{selectors:{imageOverlay:".elementor-custom-embed-image-overlay",video:".elementor-video",videoIframe:".elementor-video-iframe",playIcon:".elementor-custom-embed-play"}}}getDefaultElements(){const e=this.getSettings("selectors");return{$imageOverlay:this.$element.find(e.imageOverlay),$video:this.$element.find(e.video),$videoIframe:this.$element.find(e.videoIframe),$playIcon:this.$element.find(e.playIcon)}}handleVideo(){this.getElementSettings("lightbox")||("youtube"===this.getElementSettings("video_type")?this.apiProvider.onApiReady((e=>{this.elements.$imageOverlay.remove(),this.prepareYTVideo(e,!0)})):(this.elements.$imageOverlay.remove(),this.playVideo()))}playVideo(){if(this.elements.$video.length)return void(this.youtubePlayer?this.youtubePlayer.playVideo():this.elements.$video[0].play());const e=this.elements.$videoIframe,t=e.data("lazy-load");t&&e.attr("src",t),e[0].src=this.apiProvider.getAutoplayURL(e[0].src)}async animateVideo(){(await elementorFrontend.utils.lightbox).setEntranceAnimation(this.getCurrentDeviceSetting("lightbox_content_animation"))}async hideLightbox(){(await elementorFrontend.utils.lightbox).getModal().hide()}prepareYTVideo(e,t){const i=this.getElementSettings(),o={videoId:this.videoID,events:{onReady:()=>{i.mute&&this.youtubePlayer.mute(),(i.autoplay||t)&&this.youtubePlayer.playVideo()},onStateChange:t=>{t.data===e.PlayerState.ENDED&&i.loop&&this.youtubePlayer.seekTo(i.start||0)}},playerVars:{controls:i.controls?1:0,rel:i.rel?1:0,playsinline:i.play_on_mobile?1:0,modestbranding:i.modestbranding?1:0,autoplay:i.autoplay?1:0,start:i.start,end:i.end}};i.yt_privacy&&(o.host="https://www.youtube-nocookie.com",o.origin=window.location.hostname),this.youtubePlayer=new e.Player(this.elements.$video[0],o)}bindEvents(){this.elements.$imageOverlay.on("click",this.handleVideo.bind(this)),this.elements.$playIcon.on("keydown",(e=>{[13,32].includes(e.keyCode)&&this.handleVideo()}))}onInit(){super.onInit();const e=this.getElementSettings();if(elementorFrontend.utils[e.video_type]?this.apiProvider=elementorFrontend.utils[e.video_type]:this.apiProvider=elementorFrontend.utils.baseVideoLoader,"youtube"===e.video_type&&(this.videoID=this.apiProvider.getVideoIDFromURL(e.youtube_url),this.videoID&&(!e.show_image_overlay||!e.image_overlay.url)))return e.lazy_load?(this.intersectionObserver=elementorModules.utils.Scroll.scrollObserver({callback:e=>{e.isInViewport&&(this.intersectionObserver.unobserve(this.elements.$video.parent()[0]),this.apiProvider.onApiReady((e=>this.prepareYTVideo(e))))}}),void this.intersectionObserver.observe(this.elements.$video.parent()[0])):void(elementorFrontend.config.experimentalFeatures.e_optimized_assets_loading?this.apiProvider.onApiReady((e=>this.prepareYTVideo(e))):setTimeout((()=>{this.apiProvider.onApiReady((e=>this.prepareYTVideo(e)))}),0))}onElementChange(e){if(0===e.indexOf("lightbox_content_animation"))return void this.animateVideo();const t=this.getElementSettings("lightbox");"lightbox"!==e||t||this.hideLightbox()}}t.default=i}}]);
