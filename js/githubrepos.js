function getGithubRepo(count, sliderBool) {
    var gojeckAPI = "https://api.github.com/orgs/gojektech/repos";


    $.getJSON(gojeckAPI, {
            format: "json"
        })
        .done(function(data) {
            var i, src, max_length, length, description;
            max_length = 50;
            count === 12 ? src = '../img/' : src = 'img/';

            for (i = 0; i < count; i++) {
                length = data[i].description.length;
                length > max_length ? description = data[i].description.substring(0, 50) + '...' : description = data[i].description;
                if (sliderBool) {
                    if (data[i].name === "heimdall" || data[i].name === "palantir" || data[i].name === "proctor" || data[i].name === "valkyrie") {
                        $("#opensourceCards").append(
                            '<div class="col-md-6 col-lg-5 rounded">' +
                            '<div class="card border-0 mb-4 flex-row opensource-card">' +
                            '<img class="align-self-center p-3 " src="' + src + data[i].name + '-logo.png" alt="' + data[i].name + ' logo img">' +
                            '<div class="card-body">' +
                            '<h3 class="neosans-bold mb-0 font-sm-l opensource-card-title">' +
                            '<a class="text-dark" title = "' + data[i].name + '" href="' + data[i].html_url + '" target="_blank">' + data[i].name + '</a>' +
                            '</h3>' +
                            '<p class="opensource-card-description mb-auto">' + (description !== null ? description : "") + '</p>' +
                            ' </div>' +
                            ' </div>' +
                            '</div>'
                        );
                    }

                } else {
                    if (data[i].name === "gojektech.github.io" || data[i].name === "gojektech") {

                    } else {
                        $("#opensourceCards").append(
                            '<div class="col-md-6 col-lg-5 rounded">' +
                            '<div class="card border-0 mb-4 flex-row opensource-card">' +
                            '<img class="align-self-center p-3 " src="' + src + data[i].name + '-logo.png" alt="' + data[i].name + ' logo img">' +
                            '<div class="card-body">' +
                            '<h3 class="neosans-bold mb-0 font-sm-l opensource-card-title">' +
                            '<a class="text-dark" title = "' + data[i].name + '" href="' + data[i].html_url + '" target="_blank">' + data[i].name + '</a>' +
                            '</h3>' +
                            '<p class="opensource-card-description mb-auto">' + (description !== null ? description : "") + '</p>' +
                            ' </div>' +
                            ' </div>' +
                            '</div>'
                        );
                    }

                }

            }

            if (sliderBool) {
                $('#opensourceCards').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    mobileFirst: true,
                    responsive: [{
                        breakpoint: 767,
                        settings: 'unslick'
                    }]
                });
            }

        });
}