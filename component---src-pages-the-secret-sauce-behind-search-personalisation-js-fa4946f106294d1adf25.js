webpackJsonp([36088380180016], {
  384: function(e, t, a) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function n(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function o(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function s(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    t.__esModule = !0;
    var i = a(1),
      l = r(i),
      c = a(11),
      h = a(9),
      u = r(h),
      d = (function(e) {
        function t() {
          return n(this, t), o(this, e.apply(this, arguments));
        }
        return (
          s(t, e),
          (t.prototype.render = function() {
            return l.default.createElement(
              "section",
              { className: "first-section pt-3" },
              l.default.createElement(u.default, {
                isDynamic: !0,
                title:
                  " Gojek : The Secret Sauce Behind Search Personalisation ",
                description:
                  "How Gojek uses machine learning to personalise search results in GoFood.",
                url:
                  "https://gojek.io/the-secret-sauce-behind-search-personalisation"
              }),
              l.default.createElement(
                c.Helmet,
                null,
                l.default.createElement(
                  "title",
                  null,
                  "Gojek : The Secret Sauce Behind Search Personalisation"
                ),
                l.default.createElement("meta", {
                  "data-react-helmet": !0,
                  content: "yes",
                  name: "apple-mobile-web-app-capable"
                }),
                l.default.createElement("meta", {
                  "data-react-helmet": !0,
                  property: "description",
                  content:
                    "Gojek : The Secret Sauce Behind Search Personalisation"
                }),
                l.default.createElement("meta", {
                  "data-react-helmet": !0,
                  property: "twitter:title",
                  content:
                    "Gojek : The Secret Sauce Behind Search Personalisation"
                }),
                l.default.createElement("meta", {
                  "data-react-helmet": !0,
                  property: "twitter:card",
                  content:
                    "Gojek : The Secret Sauce Behind Search Personalisation"
                }),
                l.default.createElement("meta", {
                  "data-react-helmet": !0,
                  property: "twitter:site",
                  content: "@gojektech"
                }),
                l.default.createElement("meta", {
                  "data-react-helmet": !0,
                  property: "twitter:image",
                  content:
                    "https://gojek.io/the-secret-sauce-behind-search-personalisation"
                }),
                l.default.createElement("meta", {
                  "data-react-helmet": !0,
                  property: "twitter:description",
                  content:
                    "How Gojek uses machine learning to personalise search results in GoFood."
                }),
                l.default.createElement("meta", {
                  "data-react-helmet": !0,
                  property: "og:title",
                  content:
                    "Gojek : The Secret Sauce Behind Search Personalisation"
                }),
                l.default.createElement("meta", {
                  "data-react-helmet": !0,
                  property: "og:url",
                  content:
                    "http://localhost:8000/the-secret-sauce-behind-search-personalisation"
                }),
                l.default.createElement("meta", {
                  "data-react-helmet": !0,
                  property: "og:image",
                  content:
                    "https://gojek.io/the-secret-sauce-behind-search-personalisation"
                }),
                l.default.createElement("meta", {
                  "data-react-helmet": !0,
                  property: "og:description",
                  content:
                    "How Gojek uses machine learning to personalise search results in GoFood."
                }),
                l.default.createElement("meta", {
                  "data-react-helmet": !0,
                  property: "og:type",
                  content: "website"
                }),
                l.default.createElement("link", {
                  rel: "shortcut icon",
                  href: "/../images/favicon.png",
                  type: "image/x-icon "
                }),
                l.default.createElement("link", {
                  rel: "icon",
                  href: "./../images/favicon.png",
                  type: "image/x-icon"
                })
              ),
              l.default.createElement(
                "div",
                { className: "container" },
                l.default.createElement(
                  "div",
                  { className: "row" },
                  l.default.createElement(
                    "div",
                    { className: "mb-3" },
                    l.default.createElement(
                      "h2",
                      {
                        className:
                          "mb-0 posting-headline mt-2 heading maison-bold font-lg text-black "
                      },
                      "The Secret Sauce Behind Search Personalisation"
                    ),
                    l.default.createElement(
                      "div",
                      { className: "text-success blog-date roboto-bold" },
                      l.default.createElement(
                        "p",
                        null,
                        "Written by - Jewel James"
                      )
                    )
                  ),
                  l.default.createElement(
                    "div",
                    { className: "px-4 px-md-0 font-xs-l roboto-regular" },
                    l.default.createElement("img", {
                      className: "img-fluid img-responsive",
                      src: "../images/blog/search-personalisation-banner.jpeg",
                      width: "100%"
                    }),
                    l.default.createElement(
                      "p",
                      { className: "pt-4" },
                      "Are you looking for food? Thinking about burgers and crispy chicken fritters with creamy sauces sitting on a warm, soft bun? At least, that’s what I am thinking about. May be you’re different. Vegan perhaps? Or craving noodles? Each of us turn into a different person when we are hungry, and this is the story about how GoFood — Gojek’s food delivery service — helps you find the bite you crave."
                    ),
                    l.default.createElement(
                      "blockquote",
                      { class: "blockquote custom-blockquote my-4" },
                      l.default.createElement(
                        "em",
                        { class: "mb-0 lead font-lg ml-3" },
                        "At the core of the food ordering experience, sits search."
                      )
                    ),
                    l.default.createElement(
                      "p",
                      null,
                      "Searches are part of so many of our interactions on web and mobile, that we don’t even notice it anymore. This is mostly because modern search engines have matured to a point where they can deliver high quality results even if the entered query is a weak signal of the user’s intent. Even when weak, every query still contains a piece of the user’s intent."
                    ),
                    l.default.createElement(
                      "p",
                      null,
                      "In the case of GoFood, that piece is a fragment of our user’s hunger-driven brain."
                    ),
                    l.default.createElement(
                      "p",
                      null,
                      "In this post, we’ll discuss how we personalise the search results we surface on GoFood, based on the information we have about our users’ food preferences."
                    ),
                    l.default.createElement(
                      "h5",
                      {
                        className:
                          "text-center text-md-left text-black mt-5 maison-bold font-lg"
                      },
                      "How Each of Us Differ"
                    ),
                    l.default.createElement(
                      "p",
                      { className: "mt-3 mb-5" },
                      "Let’s look at two of our GoFood users who have started feeling the pangs of hunger, and come online to check restaurants near them."
                    ),
                    l.default.createElement("img", {
                      src: "../images/blog/comparision.jpeg",
                      alt: "How each of us differ",
                      className: "img-fluid img-responsive"
                    }),
                    l.default.createElement(
                      "p",
                      { className: "pt-4" },
                      "They both open our app and click on the",
                      " ",
                      l.default.createElement(
                        "kbd",
                        { className: "custom-code-block" },
                        "NEAR ME"
                      ),
                      " tile that lets users find the restaurants near them. We show them the nearest restaurants first, and this is what they both see."
                    ),
                    l.default.createElement("img", {
                      src: "../images/blog/near-me.jpeg",
                      alt: "Nearest restaurants",
                      className: "img-fluid img-responsive"
                    }),
                    l.default.createElement(
                      "p",
                      { className: "pt-3 pb-2" },
                      "This list goes on and on and will let them see each restaurant which is farther and farther away. They can now peruse the menus of each restaurant and pick one that serves what they feel like ordering. The problem is that they may spend some time scrolling and then leave the app without being able to make up their minds around which restaurant to place an order from. We have thrown too many choices at them and the cognitive effort of picking a restaurant and then a dish from the menu is too much work to make them suffer through."
                    ),
                    l.default.createElement(
                      "p",
                      { className: "lead" },
                      l.default.createElement(
                        "em",
                        null,
                        "But wait. Both Mila and Husain have transacted with us in the past, and we know a fair bit about their preferences."
                      )
                    ),
                    l.default.createElement(
                      "p",
                      null,
                      "To make this experience better, we decided to build a system that would let both of them see restaurants that suit their own tastes and preferences"
                    ),
                    l.default.createElement(
                      "h5",
                      {
                        className:
                          "text-center text-md-left text-black mt-5 maison-bold font-lg"
                      },
                      "Applying Machine Learning to the Problem"
                    ),
                    l.default.createElement(
                      "p",
                      null,
                      "Ranking documents for relevance works by assigning a prediction score to each document retrieved, which is directly proportional to its relevance. In the case of",
                      " ",
                      l.default.createElement(
                        "kbd",
                        { className: "custom-code-block" },
                        "NEAR ME"
                      ),
                      " restaurant ranking this can be something like:",
                      l.default.createElement(
                        "blockquote",
                        { class: "blockquote custom-blockquote my-4" },
                        l.default.createElement(
                          "em",
                          { class: "mb-0 lead font-lg ml-3" },
                          "Relevance score = 2 * (1/distance) + 1.2 * rating of restaurant"
                        )
                      )
                    ),
                    l.default.createElement(
                      "p",
                      null,
                      "Here in the relevance score calculation, we are taking weighted sum of different factors like (1/distance) and rating of restaurant. The coefficients/weights of these factors can be arrived at by experimenting with them and choosing weights that seem to maximise the ordering conversions. But, in the case of restaurant ranking in GoFood, we want to take into consideration many factors when deciding relevance. Unfortunately, experimenting with combinations of all those factors is impossible."
                    ),
                    l.default.createElement(
                      "p",
                      null,
                      "Enter Learning to rank. Here, the problem of deciding the rank of the restaurants shown to the user is formulated as a supervised machine learning problem."
                    ),
                    l.default.createElement(
                      "p",
                      null,
                      "If we look at past search, click, and ordering data, we will be able to assign relevance judgements to each restaurant listing according to whether our users clicked or ordered from one of those restaurants. Restaurants that attracted higher degrees of interest will be given higher degrees of relevance."
                    ),
                    l.default.createElement(
                      "p",
                      null,
                      "In the below example, a relevance judgement level of 0,1 and 2 is assigned to a restaurant according to whether the user viewed, clicked, or ordered from the restaurant in the search result. The relevance judgements are relative and only intent to be monotonically increasing with increasing relevance . They say that the restaurant which the user created an order from is more relevant than a restaurant the user merely checked out by clicking on it.",
                      l.default.createElement(
                        "span",
                        { className: "font-weight-bold" },
                        "They don’t mean that the restaurant which received the order is twice as relevant."
                      )
                    ),
                    l.default.createElement(
                      "p",
                      { className: "pb-3" },
                      "The values of each of the factors that could have played a role in the user’s decision of clicking or ordering is also shown against the restaurants."
                    ),
                    l.default.createElement("img", {
                      src: "../images/blog/personalization.png",
                      alt: "Personalization",
                      className: "img-fluid img-responsive"
                    }),
                    l.default.createElement(
                      "p",
                      { class: "text-center" },
                      l.default.createElement(
                        "small",
                        { class: "text-muted" },
                        "An example of the training data user for creating the learning to rank model"
                      )
                    ),
                    l.default.createElement(
                      "p",
                      { className: "pt-3" },
                      "Three of the factors/features in the above example are marked as ‘personalisation features’ because they would change according to the user’s previous order history and location. These will be the features that will be different between Mila and Husain because of the differences in the restaurants and cuisines they have ordered from before in the past."
                    ),
                    l.default.createElement(
                      "p",
                      { className: "lead" },
                      l.default.createElement(
                        "em",
                        null,
                        "These personalisation features are at the crux of creating personalised experiences for each user"
                      )
                    ),
                    l.default.createElement(
                      "p",
                      null,
                      "Other customer agnostic features/factors like the rating, price range, and popularity of the restaurant are also listed here. GoFood has millions of such examples where users with different tastes made different decisions when shown a set of search results. These examples can now be used to create a dataset from which the learning to rank ML algorithm can create a model to decide how relevant a GoFood user would find a restaurant given that user’s location, order history and other restaurant statistics."
                    ),
                    l.default.createElement(
                      "h5",
                      {
                        className:
                          "text-center text-md-left text-black mt-5 maison-bold font-lg"
                      },
                      "How We Ranked"
                    ),
                    l.default.createElement(
                      "p",
                      null,
                      "One way to approach this was as a point-wise ranking problem, wherein we try to predict the relevance judgement of each restaurant. Based on this, later we will predict the relevance judgement level and sort restaurants in decreasing order of predicted relevance score. This approach reduces learning to rank problem to a regression problem."
                    ),
                    l.default.createElement(
                      "p",
                      null,
                      "Another approach was to solve it is a pairwise ranking problem, wherein the ML model is trying to learn how to get the order of a pair of restaurants correct i.e if Restaurant A is more preferable to Restaurant B , the order (Restaurant A, Restaurant B) is correct and the order (Restaurant B, Restaurant A) is wrong."
                    ),
                    l.default.createElement(
                      "p",
                      null,
                      "For an ML model to be learned, we need an objective function that captures this pairwise ordering formulation . This is called a loss function or error function in ML and is the measure through which an ML model can assess how right or wrong its decision was. In pairwise ranking , this should be a function that becomes higher whenever the model misjudges a preference order and becomes lower when it is right about the preference order."
                    ),
                    l.default.createElement(
                      "p",
                      { className: "mb-0" },
                      "The loss/error function C is explained below:"
                    ),
                    l.default.createElement("img", {
                      src: "../images/blog/algorithm.png",
                      alt: "Personalization",
                      className: "img-fluid img-responsive"
                    }),
                    l.default.createElement(
                      "p",
                      null,
                      "When this function is minimised, the model is trying to predict a score for each restaurant such that the ranking of the order of the restaurants are close the relevance judgements the users made."
                    ),
                    l.default.createElement(
                      "p",
                      null,
                      "The pairwise formulation is a better approach here in comparison to the point-wise approach as it is looking to get the order of restaurants right and is not trying to estimate the relevance score themselves whose values were assigned only as markers to show how some restaurants were more preferred relative to others."
                    ),
                    l.default.createElement(
                      "p",
                      null,
                      "We used an implementation of the LambdaMART algorithm that learns to predict relevance scores so as to minimise this pairwise loss. You can think of this as a pursuit to find the decision tree that takes in all the parameters of the restaurant and gives out a score to the restaurant . This score should be assigned in such a way as to make the pair orders right."
                    ),
                    l.default.createElement(
                      "p",
                      null,
                      "Once this model is trained, it can be used during search, as explained in",
                      " ",
                      l.default.createElement(
                        "a",
                        {
                          target: "_blank",
                          href:
                            "https://blog.gojekengineering.com/how-the-gojek-butler-serves-a-gourmet-meal-to-our-users-4a161d83052a"
                        },
                        "this"
                      ),
                      " ",
                      "post."
                    ),
                    l.default.createElement(
                      "p",
                      null,
                      "Now let’s go back to our beloved customers — Mila and Husain. The next time Mila or Husain looks for restaurants near them, the search results they see will be according to their preferences. This is because the model would look at the number of times they have ordered from each of the restaurants near them before. It would take their preferred cuisines and factors like restaurant ratings into account, and show them the restaurants that they would prefer to order from first."
                    ),
                    l.default.createElement(
                      "p",
                      null,
                      "The different search results Mila and Husain get after learning to rank is used to re-rank the results are shown below."
                    ),
                    l.default.createElement("img", {
                      src: "../images/blog/gojek-search-result.jpeg",
                      alt: "Gojek results",
                      className: "img-fluid img-responsive"
                    }),
                    l.default.createElement(
                      "p",
                      { className: "pt-4" },
                      "We ran an AB test using this formulation of learning to rank and observed a relative lift of 20% in search to ordering conversions and 23% improvement in NDCG. More information on how this metric is calculated here."
                    ),
                    l.default.createElement(
                      "h5",
                      {
                        className:
                          "text-center text-md-left text-black mt-5 maison-bold font-lg"
                      },
                      "What We Learned"
                    ),
                    l.default.createElement(
                      "p",
                      null,
                      "One interesting thing we observed as we started experimenting with this learning to rank model was personalising search results led to the average position at which the search to order conversions happen to be much higher on the list. This is because users were increasingly seeing the restaurants that they have some affinity towards and were able to make an ordering decision without scrolling much and without spending too much time being confused where to order from."
                    ),
                    l.default.createElement(
                      "p",
                      { className: "mb-5" },
                      "Checkout Data Science jobs -",
                      " ",
                      l.default.createElement(
                        "a",
                        {
                          href:
                            "https://www.gojek.io/all-open-positions/?d=science&t=data-science"
                        },
                        "Here"
                      )
                    )
                  )
                )
              )
            );
          }),
          t
        );
      })(i.Component);
    (t.default = d), (e.exports = t.default);
  }
});
//# sourceMappingURL=component---src-pages-the-secret-sauce-behind-search-personalisation-js-fa4946f106294d1adf25.js.map
