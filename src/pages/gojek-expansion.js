import React, { Component } from 'react';
import { Helmet } from "react-helmet";

class GojekExpansion extends Component {
    render() {
        return (
            <section className="first-section pt-3">
                <Helmet>
					<title> GO-JEK Tech Expansion </title>
				</Helmet>
                <div className="container">
                    <div className="row">
                        <div className="heading col-md-12 px-md-0">
                            <p className="text-success blog-date roboto-bold py-sm-2 ">JUNE 25, 2018</p>
                            <h5 className="text-center text-md-left text-black pb-4  raleway-bold font-lg">
                                GO-JEK announces the launch of locally founded companies in Vietnam and
                                Thailand
                            </h5>
                        </div>

                        <div className="px-4 px-md-0 font-xs-l roboto-regular">
                            <img className="img-fluid" src="../images/news/press-release.jpg" width="100%" />
                            <p className="pt-4">
                                GO-JEK today announces the launch of two locally founded companies in Vietnam
                                and Thailand that will form the first wave of its international expansion. The companies will be run by local founding
                                management teams, with GO-JEK providing knowledge and expertise as well as technology and investment.
                            </p>
                            <p>
                                GO-VIET, the brand being introduced in Vietnam, will enter its beta testing phase in July, which will involve a select number
                                of drivers and consumers, before it goes to full launch in the next few months. GET, the brand being introduced in
                                Thailand, will launch soon afterwards following consultation with local stakeholders including government, drivers
                                and consumers. Both companies will initially launch ride-hailing and on-demand logistics services before moving on
                                to food delivery and payments.
                            </p>
                            <p>
                                The international expansion follows many months of planning by the company after its latest fundraising round, which saw
                                backing from Astra International, Warburg Pincus, KKR, Meituan-Dianping, Tencent, Google and Temasek among others.
                                USD$500 million of the funds raised were set aside for international expansion, as the company aims to increase its
                                presence in Southeast Asia. GO-JEK is also planning new operations in Singapore and the Philippines.
                            </p>
                            <p>
                                <b> GO-JEK CEO and Founder Nadiem Makarim,</b> said: “Our strategy is to combine the world-class technology developed
                                by GO-JEK, with the in-depth market knowledge and expertise of the local teams, to create local businesses that really
                                understand consumers. We believe that these in-country teams have the knowledge and experience to make the businesses
                                in Vietnam and Thailand a huge success. They may be using different brands, but they will be operating under the
                                same values system that has made GO-JEK the market leader in Indonesia. It’s not just about growth, it’s about finding
                                ways to have a positive impact on as many people as possible.”
                            </p>
                            <p>
                                “We have been working with them for several months now and are excited about continuing to do so as they launch their services
                                and make their presence felt in their respective countries. Ultimately, we want to make sure consumers and drivers
                                feel the benefit of a more competitive industry.”
                            </p>
                            <p className="pb-5">
                                <b> Vu Duc Chief Executive Officer and Co-Founder of GO-VIET </b>said: “GO-JEK is a pioneering technology company with an
                                extensive ecosystem of 18 diverse services, backed by a strong group of strategic investors. The company’s support is ideal,
                                not just because of its tech and operational knowhow, but also because we share the same core values – the desire to make
                                a positive impact on communities by improving living standards and income for families as well as bringing benefits for smallmedium
                                and micro businesses.”
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}

export default GojekExpansion;