import React, { Component } from 'react';
import { Helmet } from "react-helmet";

class GojekViet extends Component {
    render() {
        return (
            <section className="first-section pt-3">
                <Helmet>
                    <title> GO-JEK Tech to hire 200 engineers in India </title>
                </Helmet>
                <div className="container">
                    <div className="row">
                        <div className="heading col-md-12 px-md-0">
                            <p className="text-success blog-date roboto-bold py-sm-2 "> October 4, 2018</p>
                            <h5 className="text-center text-md-left text-black pb-4 raleway-bold font-lg">
                                GO-JEK Tech to hire 200 engineers in India to work on its ‘Super App’  

                            </h5>
                        </div>

                        <div className="px-4 px-md-0 font-xs-l roboto-regular">
                            <img className="img-fluid" src="../images/news/hire-200.jpg" width="100%" />

                            <ul className="pt-5">
                                <li className="text-dark">The start-up is doubling its orders several times each year and is hiring new talent to meet unprecedented demand</li>
                                <li className="text-dark">GO-JEK currently does significantly more food delivery orders than India’s largest food-tech startup</li>
                                <li className="text-dark">To hire for several roles across product verticals, including full-stack engineers, data scientists, UI/UX designers and product managers</li>
                            </ul>

                            <p className="pt-4">
                               GO-JEK, Southeast Asia’s first unicorn and the fastest growing start-up headquartered in Indonesia, plans to hire 200 engineers in Bangalore to support its expanding portfolio of products in food delivery, taxi-sharing, logistics, digital payments and multiple services.
                            </p>
                            <p>
                                GO-JEK is a Super App. It’s a portal to the internet for a mobile-first generation in Indonesia. It’s one app for ordering food, commuting, digital payments, shopping, hyper-local delivery, getting a massage and two dozen services.
                            </p>
                            <p>
                                GO-JEK currently does more food delivery orders than India’s largest food-tech startup. The startup also does more completed rides than India’s largest ride-sharing service. GO-PAY is Indonesia's largest digital wallet and does comparable volumes to India’s largest digital wallet. GO-JEK will be hiring key engineering talent to cater to its 18 products that reach more than 70+ million users in Indonesia. 

                            </p>
                            <p>
                                “Our total completed order volumes have grown 6600x in the past 36 months. We’re witnessing unprecedented scale and one of the rare hyper-growth startups in the world today. Indonesians are increasingly using GO-JEK because of the convenience of having a ‘Super App’ that offers multiple services in one app. We’re also able to ward off competition because of the sheer range of services we offer in one app. GO-JEK is now a verb in Indonesia and a lean team of about 250 engineers have helped build a brand that impacts the overall growth of the country. With expansion plans across Southeast Asia underway, we’re looking for passionate, opinionated engineers who are interested in working for a brand that’s the face of SouthEast Asia,” said Sidu Ponnappa, Head of Data Engineering & India Head at GO-JEK.
                            </p>
                            <p>
                                The team will also get a chance to strategise on new products & services and be empowered to make critical decisions that can add to GO-JEK’s reach in SouthEast Asia. GO-JEK will be hiring Data Scientists, Full-stack engineers, Data Engineers, Product Managers, UI/UX designers and Backend Engineers. 
                            </p>
                            <p>
                               The start-up’s 250-people team runs one of the largest jruby, Java and go clusters in Asia. Its world-class product engineering team also works with the community in India on various topics and contributes to Open Source projects. The announcement is over and above the 100 engineers the start-up planned to hire in 2017. 
                            </p>

                            <p className="pb-5">
                                With more than 105 million app downloads, GO-JEK's platform powers the Indonesian equivalents of Indian taxi aggregators, food delivery start-ups, hyperlocal start-ups, digital wallet start-ups and home service based start-ups, all in one, at a comparable and sometimes larger scale. 
                            </p>

                        </div>
                    </div>
                </div>
            </section>
        )
    }

}

export default GojekViet;