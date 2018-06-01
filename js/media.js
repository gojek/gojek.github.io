function getMediumBlogs(count, sliderBool) {
  var $content = $("#jsonContent");
  var data = {
    rss_url: "https://blog.gojekengineering.com/feed"
  };

  jQuery.get("https://api.rss2json.com/v1/api.json", data, function (response) {
    var output = "";
    $.each(response.items, function (k, item) {
      if (k < count) {
        if (!sliderBool) {
          output += '<div class="col-md-4 col-lg-4">';
        }
        output += '<div class="card medium-blog border-0">';
        // output += '<div class="card-body px-0 pt-2">';

        var m_names = new Array(
          "JANUARY",
          "FEBRUARY",
          "MARCH",
          "APRIL",
          "MAY",
          "JUNE",
          "JULY",
          "AUGUST",
          "SEPTEMBER",
          "OCTOBER",
          "NOVEMBER",
          "DECEMBER"
        );

        var pubDate = new Date(item.pubDate);
        pubDate =
          m_names[pubDate.getMonth()] +
          " " +
          pubDate.getDate() +
          ", " +
          pubDate.getFullYear();

        output +=
          '<p class="card-text text-success blog-date neosans-bold">' +
          pubDate +
          "</p>";

        // output += "</div>";
        var tagIndex = item.description.indexOf("<img"); // Find where the img tag starts
        var srcIndex =
          item.description.substring(tagIndex).indexOf("src=") + tagIndex; // Find where the src attribute starts
        var srcStart = srcIndex + 5; // Find where the actual image URL starts; 5 for the length of 'src="'
        var srcEnd =
          item.description.substring(srcStart).indexOf('"') + srcStart; // Find where the URL ends
        var src = item.description.substring(srcStart, srcEnd); // Extract just the URL
        output +=
          '<img class="card-img-top img-fluid blog-card-img" src="' +
          src +
          '"alt="'+
          item.title + '">';
        output += '<div class="card-body px-0 text-center text-md-left text-black">';
        output +=
          '<h5 class="card-title  neosans-bold"><a class="text-dark  font-lg transparent-outline-link" target = "_blank" href="' +
          item.link +
          '">' +
          item.title +
          "</a></h5>";

        output +=
          '<div class="post-meta "><span>By ' + item.author + "</span></div>";

        var yourString = item.description.replace(/<img[^>]*>/g, ""); //replace with your string.
        var maxLength = 120; // maximum number of characters to extract
        //trim the string to the maximum length
        var trimmedString = yourString.substr(0, maxLength);
        //re-trim if we are in the middle of a word
        trimmedString = trimmedString.substr(
          0,
          Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
        );
        output += "<p class = 'font-xs-l'>" + trimmedString + "...</p>";
        output += "</div></div>";
        if (!sliderBool) {
          output += "</div>";
        }
        return k < count;
      }
    });
    $content.html(output);

    if (sliderBool) {
      $(".blog-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 769,
            settings: {
              arrows: true,
              infinite: true,
              centerMode: false,
              centerPadding: "40px",
              slidesToShow: 2
            }
          },
          {
            breakpoint: 577,
            settings: {
              dots: true,
              slidesToShow: 1
            }
          }
        ]
      });
    }
  });
}