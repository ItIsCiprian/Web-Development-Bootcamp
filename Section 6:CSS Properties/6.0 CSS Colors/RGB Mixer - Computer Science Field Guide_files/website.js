!function r(e,t,a){function o(n,i){if(!t[n]){if(!e[n]){var l="function"==typeof require&&require;if(!i&&l)return l(n,!0);if(s)return s(n,!0);var d=new Error("Cannot find module '"+n+"'");throw d.code="MODULE_NOT_FOUND",d}var u=t[n]={exports:{}};e[n][0].call(u.exports,(function(t){return o(e[n][1][t]||t)}),u,u.exports,r,e,t,a)}return t[n].exports}for(var s="function"==typeof require&&require,n=0;n<a.length;n++)o(a[n]);return o}({1:[function(e,t,a){function open_glossary_definition(){var e=$("#glossary-modal");e.hasClass("show")||e.modal("show");var t=$(this).data("glossary-term");e.attr("data-glossary-term")!=t&&($("#glossary-modal-term").text("Loading glossary definition..."),$("#glossary-modal-definition").html(""),$.ajax({type:"GET",url:glossary_url,data:"term="+t,async:!0,cache:!0,dataType:"json",success:update_glossary_modal,error:show_glossary_modal_error}))}function update_glossary_modal(e){$("#glossary-modal").attr("data-glossary-term",e.slug),$("#glossary-modal-term").text(e.term),$("#glossary-modal-definition").html(e.definition),e.translated?$("#glossary-modal-translation-unavailable").addClass("d-none"):$("#glossary-modal-translation-unavailable").removeClass("d-none")}function show_glossary_modal_error(e,t,a){$("#glossary-modal").attr("data-glossary-term",""),$("#glossary-modal-term").text("Error!")}function details_element_closed(){$('iframe[src*="youtube"]',this).each((function(){var e=$(this).data("youtube-player");if(void 0===e){if(!this.id){var t=this.src,a=t.substring(t.lastIndexOf("/")+1,t.indexOf("?"));this.id="youtube-embed-"+a}e=new YT.Player(this.id,{events:{onReady:function(e){e.target.pauseVideo()}}}),$(this).data("youtube-player",e)}else e.pauseVideo()})),$('iframe[src*="vimeo"]',this).each((function(){var e=$(this).data("vimeo-player");if(void 0===e){if(!this.id){var t=this.src,a=t.substring(t.lastIndexOf("/")+1,t.indexOf("?"));this.id="vimeo-embed-"+a}e=new Vimeo.Player(this.id,{events:{onReady:function(e){e.target.pause()}}}),$(this).data("vimeo-player",e)}else e.pause()}))}$(document).ready((function(){$("#content-container, #glossary-modal").on("click",".glossary-term",open_glossary_definition),$("body").on("click","details[open]",details_element_closed),$(document).on("lity:open",(function(e,t){$(".lity-content").on("click",(function(){t.close()}))})),iFrameResize({},"iframe.iframe-resize"),$("#body-content").scrollspy({target:"#scrollspy-table-of-contents",offset:140})}))},{}]},{},[1]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvd2Vic2l0ZS5qcyIsIm5hbWVzIjpbInIiLCJlIiwibiIsInQiLCJvIiwiaSIsImYiLCJjIiwicmVxdWlyZSIsInUiLCJhIiwiRXJyb3IiLCJjb2RlIiwicCIsImV4cG9ydHMiLCJjYWxsIiwibGVuZ3RoIiwibW9kdWxlIiwib3Blbl9nbG9zc2FyeV9kZWZpbml0aW9uIiwiZ2xvc3NhcnlfbW9kYWwiLCIkIiwiaGFzQ2xhc3MiLCJtb2RhbCIsInNsdWciLCJ0aGlzIiwiZGF0YSIsImF0dHIiLCJ0ZXh0IiwiaHRtbCIsImFqYXgiLCJ0eXBlIiwidXJsIiwiZ2xvc3NhcnlfdXJsIiwiYXN5bmMiLCJjYWNoZSIsImRhdGFUeXBlIiwic3VjY2VzcyIsInVwZGF0ZV9nbG9zc2FyeV9tb2RhbCIsImVycm9yIiwic2hvd19nbG9zc2FyeV9tb2RhbF9lcnJvciIsInRlcm0iLCJkZWZpbml0aW9uIiwidHJhbnNsYXRlZCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJqcVhIUiIsInRleHRfc3RhdHVzIiwiZXJyb3JfdGhyb3duIiwiZGV0YWlsc19lbGVtZW50X2Nsb3NlZCIsImVhY2giLCJwbGF5ZXIiLCJ1bmRlZmluZWQiLCJpZCIsInNyYyIsInZpZGVvX2lkIiwic3Vic3RyaW5nIiwibGFzdEluZGV4T2YiLCJpbmRleE9mIiwiWVQiLCJQbGF5ZXIiLCJldmVudHMiLCJvblJlYWR5IiwiZXZlbnQiLCJ0YXJnZXQiLCJwYXVzZVZpZGVvIiwiVmltZW8iLCJwYXVzZSIsImRvY3VtZW50IiwicmVhZHkiLCJvbiIsImluc3RhbmNlIiwiY2xvc2UiLCJpRnJhbWVSZXNpemUiLCJzY3JvbGxzcHkiLCJvZmZzZXQiXSwic291cmNlcyI6WyJqcy93ZWJzaXRlLmpzIl0sIm1hcHBpbmdzIjoiQ0FBWSxTQUFTQSxFQUFFQyxFQUFFQyxFQUFFQyxHQUFHLFNBQVNDLEVBQUVDLEVBQUVDLEdBQUcsSUFBSUosRUFBRUcsR0FBRyxDQUFDLElBQUlKLEVBQUVJLEdBQUcsQ0FBQyxJQUFJ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LEdBQUksQ0FDL0JRLE9BQVEsQ0FDSkMsUUFBVyxTQUFVQyxHQUNqQkEsRUFBTUMsT0FBT0csT0FDakIsS0FHUjlDLEVBQUVJLE1BQU1DLEtBQUssZUFBZ0J5QixFQUNqQyxNQUNJQSxFQUFPZ0IsT0FFZixHQUNKLENBbElBOUMsRUFBRStDLFVBQVVDLE9BQU0sV0FFZGhELEVBQUUsdUNBQXVDaUQsR0FBRyxRQUFTLGlCQUFrQm5ELDBCQUd2RUUsRUFBRSxRQUFRaUQsR0FBRyxRQUFTLGdCQUFpQnJCLHdCQU12QzVCLEVBQUUrQyxVQUFVRSxHQUFHLGFBQWEsU0FBVVAsRUFBT1EsR0FDekNsRCxFQUFFLGlCQUFpQmlELEdBQUcsU0FBUyxXQUMzQkMsRUFBU0MsT0FDYixHQUNKLElBR0FDLGFBQWEsQ0FBQyxFQUFHLHdCQUdqQnBELEVBQUUsaUJBQWlCcUQsVUFBVSxDQUFFVixPQUFRLCtCQUFnQ1csT0FBUSxLQUNuRixHQThHQSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgLy8gRGlzcGxheSBnbG9zc2FyeS1tb2RhbFxuICAgICQoXCIjY29udGVudC1jb250YWluZXIsICNnbG9zc2FyeS1tb2RhbFwiKS5vbihcImNsaWNrXCIsIFwiLmdsb3NzYXJ5LXRlcm1cIiwgb3Blbl9nbG9zc2FyeV9kZWZpbml0aW9uKTtcblxuICAgIC8vIFBhdXNlIFlvdVR1YmUgdmlkZW9zIHBsYXlpbmcgd2l0aGluIGEgY2xvc2VkIGRldGFpbHMgZWxlbWVudHNcbiAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiZGV0YWlsc1tvcGVuXVwiLCBkZXRhaWxzX2VsZW1lbnRfY2xvc2VkKTtcblxuICAgIC8vIExpZ2h0Ym94XG4gICAgLy8gVE9ETzogRnV0dXJlIHBsYW5zIGluY2x1ZGUgb25seSBlbmFibGluZyBsaWdodGJveCB0byBlbGVtZW50cyB0aGF0IHJpZ2h0IGl0IHByb2dyYW1hdGljYWxseSxcbiAgICAvLyBhbmQgc2hvd2luZyBjYXB0aW9uIHVuZGVybmVhdGggKHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2pzb3IvbGl0eS9pc3N1ZXMvMzcpLlxuICAgIC8vIEFsbG93IGNsb3NpbmcgbGlnaHRib3ggYnkgY2xpY2tpbmcgb24gaW1hZ2VcbiAgICAkKGRvY3VtZW50KS5vbihcImxpdHk6b3BlblwiLCBmdW5jdGlvbiAoZXZlbnQsIGluc3RhbmNlKSB7XG4gICAgICAgICQoXCIubGl0eS1jb250ZW50XCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaW5zdGFuY2UuY2xvc2UoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBTZXR1cCBpRnJhbWVSZXNpemVyXG4gICAgaUZyYW1lUmVzaXplKHt9LCAnaWZyYW1lLmlmcmFtZS1yZXNpemUnKTtcblxuICAgIC8vIFNjcm9sbHNweSBmb3Igc2lkZWJhciB0YWJsZSBvZiBjb250ZW50c1xuICAgICQoXCIjYm9keS1jb250ZW50XCIpLnNjcm9sbHNweSh7IHRhcmdldDogXCIjc2Nyb2xsc3B5LXRhYmxlLW9mLWNvbnRlbnRzXCIsIG9mZnNldDogMTQwIH0pO1xufSk7XG5cbmZ1bmN0aW9uIG9wZW5fZ2xvc3NhcnlfZGVmaW5pdGlvbigpIHtcbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZSBnbG9zc2FyeSBkZWZpbml0aW9uLlxuICAgICAqL1xuICAgIHZhciBnbG9zc2FyeV9tb2RhbCA9ICQoXCIjZ2xvc3NhcnktbW9kYWxcIik7XG4gICAgaWYgKCFnbG9zc2FyeV9tb2RhbC5oYXNDbGFzcygnc2hvdycpKSB7XG4gICAgICAgIGdsb3NzYXJ5X21vZGFsLm1vZGFsKCdzaG93Jyk7XG4gICAgfVxuXG4gICAgdmFyIHNsdWcgPSAkKHRoaXMpLmRhdGEoXCJnbG9zc2FyeS10ZXJtXCIpO1xuICAgIGlmIChnbG9zc2FyeV9tb2RhbC5hdHRyKFwiZGF0YS1nbG9zc2FyeS10ZXJtXCIpICE9IHNsdWcpIHtcbiAgICAgICAgJChcIiNnbG9zc2FyeS1tb2RhbC10ZXJtXCIpLnRleHQoXCJMb2FkaW5nIGdsb3NzYXJ5IGRlZmluaXRpb24uLi5cIik7XG4gICAgICAgICQoXCIjZ2xvc3NhcnktbW9kYWwtZGVmaW5pdGlvblwiKS5odG1sKFwiXCIpO1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcbiAgICAgICAgICAgIHVybDogZ2xvc3NhcnlfdXJsLFxuICAgICAgICAgICAgZGF0YTogXCJ0ZXJtPVwiICsgc2x1ZyxcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXG4gICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgICBzdWNjZXNzOiB1cGRhdGVfZ2xvc3NhcnlfbW9kYWwsXG4gICAgICAgICAgICBlcnJvcjogc2hvd19nbG9zc2FyeV9tb2RhbF9lcnJvcixcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVfZ2xvc3NhcnlfbW9kYWwoZGF0YSkge1xuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgZ2xvc3NhcnkgbW9kYWwgd2l0aCBkZWZpbml0aW9uIGRhdGEuXG4gICAgICogQHBhcmFtIHtkaWN0fSBkYXRhIC0gVGhlIEpTT04gZGF0YSBmb3IgdGhlIGRlZmluaXRpb24uXG4gICAgICovXG4gICAgdmFyIGdsb3NzYXJ5X21vZGFsID0gJChcIiNnbG9zc2FyeS1tb2RhbFwiKTtcbiAgICBnbG9zc2FyeV9tb2RhbC5hdHRyKFwiZGF0YS1nbG9zc2FyeS10ZXJtXCIsIGRhdGEuc2x1Zyk7XG4gICAgJChcIiNnbG9zc2FyeS1tb2RhbC10ZXJtXCIpLnRleHQoZGF0YS50ZXJtKTtcbiAgICAkKFwiI2dsb3NzYXJ5LW1vZGFsLWRlZmluaXRpb25cIikuaHRtbChkYXRhLmRlZmluaXRpb24pO1xuICAgIGlmIChkYXRhLnRyYW5zbGF0ZWQpIHtcbiAgICAgICAgJChcIiNnbG9zc2FyeS1tb2RhbC10cmFuc2xhdGlvbi11bmF2YWlsYWJsZVwiKS5hZGRDbGFzcyhcImQtbm9uZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiI2dsb3NzYXJ5LW1vZGFsLXRyYW5zbGF0aW9uLXVuYXZhaWxhYmxlXCIpLnJlbW92ZUNsYXNzKFwiZC1ub25lXCIpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2hvd19nbG9zc2FyeV9tb2RhbF9lcnJvcihqcVhIUiwgdGV4dF9zdGF0dXMsIGVycm9yX3Rocm93bikge1xuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgZ2xvc3NhcnkgbW9kYWwgd2l0aCBhbiBlcnJvci5cbiAgICAgKiBAcGFyYW0ge2pxWEhSfSBqcVhIUiAtIFRoZSBqcVhIUiBvYmplY3QuXG4gICAgICogQHBhcmFtIHtzdHJ9IHRleHRfc3RhdHVzIC0gRGVzY3JpYmVzIHRoZSB0eXBlIG9mIGVycm9yIHRoYXQgb2NjdXJyZWQuXG4gICAgICogQHBhcmFtIHtzdHJ9IGVycm9yX3Rocm93biAtIE9wdGlvbmFsIGV4Y2VwdGlvbiBvYmplY3QsIGlmIG9uZSBvY2N1cnJlZC5cbiAgICAgKi9cbiAgICB2YXIgZ2xvc3NhcnlfbW9kYWwgPSAkKFwiI2dsb3NzYXJ5LW1vZGFsXCIpO1xuICAgIGdsb3NzYXJ5X21vZGFsLmF0dHIoXCJkYXRhLWdsb3NzYXJ5LXRlcm1cIiwgXCJcIik7XG4gICAgJChcIiNnbG9zc2FyeS1tb2RhbC10ZXJtXCIpLnRleHQoXCJFcnJvciFcIik7XG59XG5cbmZ1bmN0aW9uIGRldGFpbHNfZWxlbWVudF9jbG9zZWQoKSB7XG4gICAgLyoqXG4gICAgICogUGF1c2UgYW55IFlvdVR1YmUgdmlkZW9zIHBsYXlpbmcgd2l0aGluIHRoZSBjbG9zZWQgZGV0YWlscyBlbGVtZW50LlxuICAgICAqL1xuICAgICQoJ2lmcmFtZVtzcmMqPVwieW91dHViZVwiXScsIHRoaXMpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcGxheWVyID0gJCh0aGlzKS5kYXRhKCd5b3V0dWJlLXBsYXllcicpO1xuICAgICAgICBpZiAocGxheWVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIElmIGlmcmFtZSBoYXMgbm8gSURcbiAgICAgICAgICAgIGlmICghdGhpcy5pZCkge1xuICAgICAgICAgICAgICAgIHZhciBzcmMgPSB0aGlzLnNyYztcbiAgICAgICAgICAgICAgICB2YXIgdmlkZW9faWQgPSBzcmMuc3Vic3RyaW5nKHNyYy5sYXN0SW5kZXhPZignLycpICsgMSwgc3JjLmluZGV4T2YoJz8nKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pZCA9ICd5b3V0dWJlLWVtYmVkLScgKyB2aWRlb19pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENyZWF0ZSBZb3VUdWJlIHBsYXllciBmb3IgaWZyYW1lXG4gICAgICAgICAgICBwbGF5ZXIgPSBuZXcgWVQuUGxheWVyKHRoaXMuaWQsIHtcbiAgICAgICAgICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ29uUmVhZHknOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5wYXVzZVZpZGVvKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkKHRoaXMpLmRhdGEoJ3lvdXR1YmUtcGxheWVyJywgcGxheWVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBsYXllci5wYXVzZVZpZGVvKCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFBhdXNlIGFueSBWaW1lbyB2aWRlb3MgcGxheWluZyB3aXRoaW4gdGhlIGNsb3NlZCBkZXRhaWxzIGVsZW1lbnQuXG4gICAgICovXG4gICAgJCgnaWZyYW1lW3NyYyo9XCJ2aW1lb1wiXScsIHRoaXMpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcGxheWVyID0gJCh0aGlzKS5kYXRhKCd2aW1lby1wbGF5ZXInKTtcbiAgICAgICAgaWYgKHBsYXllciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBJZiBpZnJhbWUgaGFzIG5vIElEXG4gICAgICAgICAgICBpZiAoIXRoaXMuaWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3JjID0gdGhpcy5zcmM7XG4gICAgICAgICAgICAgICAgdmFyIHZpZGVvX2lkID0gc3JjLnN1YnN0cmluZyhzcmMubGFzdEluZGV4T2YoJy8nKSArIDEsIHNyYy5pbmRleE9mKCc/JykpO1xuICAgICAgICAgICAgICAgIHRoaXMuaWQgPSAndmltZW8tZW1iZWQtJyArIHZpZGVvX2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ3JlYXRlIFZpbWVvIHBsYXllciBmb3IgaWZyYW1lXG4gICAgICAgICAgICBwbGF5ZXIgPSBuZXcgVmltZW8uUGxheWVyKHRoaXMuaWQsIHtcbiAgICAgICAgICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ29uUmVhZHknOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5wYXVzZSgpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJCh0aGlzKS5kYXRhKCd2aW1lby1wbGF5ZXInLCBwbGF5ZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGxheWVyLnBhdXNlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiJdfQ==