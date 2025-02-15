(function($) {
    "use strict";
	
	
	/* ..............................................
	Loader 
    ................................................. */
	
	$(window).on('load', function() { 
		$('.preloader').fadeOut(); 
		$('#preloader').delay(550).fadeOut('slow'); 
		$('body').delay(450).css({'overflow':'visible'});
	});
    	
	/* ..............................................
    Navbar Bar
    ................................................. */
	
	$('.navbar-nav .nav-link').on('click', function() {
		var toggle = $('.navbar-toggler').is(':visible');
		if (toggle) {
			$('.navbar-collapse').collapse('hide');
		}
	});
	
	/* ..............................................
    Fixed Menu
    ................................................. */
    
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 50) {
			$('.top-header').addClass('fixed-menu');
		} else {
			$('.top-header').removeClass('fixed-menu');
		}
	});
	
	/* ..............................................
    Gallery
    ................................................. */
	
	$(document).ready(function() {
		$('.popup-gallery').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function(item) {
					return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
				}
			}
		});
	});
	
	/* ..............................................
    Smooth Scroll
    ................................................. */
	
	$('a[href*="#"]:not([href="#"])').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
		  var target = $(this.hash);
			  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			  if (target.length) {
				$('html,body').animate({
				  scrollTop: target.offset().top - 65,
				  }, 1000);
				  return false;
			  }
		}
	});
	
}(jQuery));


// Đếm Ngày

let loveStartDate = "2023-12-23"; // 📝 Thay đổi ngày yêu ở đây (YYYY-MM-DD)

        function updateLoveTime() {
            let start = new Date(loveStartDate);
            let now = new Date();
            let diff = now - start;

            let years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
            let days = Math.floor(diff / (1000 * 60 * 60 * 24));
            let hours = Math.floor(diff / (1000 * 60 * 60));
            let minutes = Math.floor(diff / (1000 * 60));
            let seconds = Math.floor(diff / 1000);

            // Cập nhật hiển thị chính
            document.getElementById("count").innerText = 
                `${years} năm, ${days % 365} ngày, ${hours % 24} giờ, ${minutes % 60} phút, ${seconds % 60} giây 💕`;

            // Cập nhật nội dung chi tiết
            document.getElementById("details").innerText = 
                `Tổng cộng: \n${years} năm,\n ${days} ngày,\n ${hours} giờ,\n ${minutes} phút,\n ${seconds} giây`;
        }

        function toggleDetails() {
            let details = document.getElementById("details");
            if (details.style.display === "none") {
                details.style.display = "block";
            } else {
                details.style.display = "none";
            }
        }

        // Cập nhật mỗi giây
        setInterval(updateLoveTime, 1000);

        // Gọi ngay khi trang load
        updateLoveTime();