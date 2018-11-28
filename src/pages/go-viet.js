import React, { Component } from 'react';
import { Helmet } from "react-helmet";

class GojekViet extends Component {
    render() {
        return (
            <section className="first-section pt-3">
                <Helmet>
					<title> GO-VIET expands services to 12 districts </title>
				</Helmet>
                <div className="container">
                    <div className="row">
                        <div className="heading col-md-12 px-md-0">
                            <p className="text-success blog-date roboto-bold py-sm-2 ">August 1, 2018</p>
                            <h5 className="text-center text-md-left text-black pb-4 raleway-bold font-lg">
                            GO-VIET expands services to 12 districts in HO CHI MINH city as the app becomes available for public download
                            </h5>
                        </div>

                        <div className="px-4 px-md-0 font-xs-l roboto-regular">
                            <img className="img-fluid" src="../images/news/vietnam.jpg" width="100%" />

                            <ul className="pt-5">
                                <li className="text-dark">GO-VIET, a provider of app-based on-demand services, will expand across 12 districts of Ho Chi Minh City as the app becomes available on the Apple App Store and Google Play for the first time. </li>
                                <li className="text-dark">The GO-VIET app was developed using cutting edge GO-JEK technology</li>
                                <li className="text-dark">The app was first introduced to a select number of users in beta version earlier this month through the GO-VIET Explorers’ program.</li>
                            </ul>

                            <p className="pt-4">
                                GO-VIET, the on-demand multi-service app backed by GO-JEK, is set to expand its coverage to 12 districts across Ho Chi Minh City on Wednesday, August 1st, as the app becomes available for public download on the Apple App Store & Google Play for the first time.
                            </p>
                            <p>
                                This marks the beginning of the app’s soft launch phase following the success of its initial testing program, “GO-VIET EXPLORERS” last month, which saw the service being made available to a select number of users around District 1 and 3 of HCMC. From Wednesday, the company will provide ride-hailing and delivery services (GO-BIKE and GO-SEND) to select areas.
                            </p>
                            <p>
                                Duc Nguyen, GO-VIET co-founder and CEO said: "Our initial testing phase has gone extremely well, and we are overwhelmed by the positive feedback we have received from our testers. As we broaden the reach of our services across more districts in Ho Chi Minh City, we invite everyone to download our app and try it out.
                            </p>
                            <p>
                                “Vietnam could benefit greatly from the services we will be offering. We hope the people of Vietnam will start seeing us as their go-to transport and logistics app as we head towards our full launch within the next few weeks."

                            </p>
                            <p>
                                As the soft launch stage commences, GO-VIET will continue to improve its technology as it receives feedback from a broader range of users ahead of its full launch, which will take place within the next few weeks. The company has successfully on-boarded thousands of drivers in an effort to provide Ho Chi Minh City with a comprehensive service based on GO-JEK’s market leading technology
                            </p>
                            <p>
                                GO-VIET will be the first of GO-JEK’s international operations to launch. The brand was developed in Vietnam and benefits from a Vietnamese founding management team with extensive knowledge of Vietnamese consumers, drivers and other stakeholders.  
                            </p>
                            
                            <p>
                                The launch of GO-VIET will see GO-JEK’s world-class technology come to Vietnam, as part of the company’s US$500 million international expansion plan that will see it enter Vietnam, Thailand, Singapore and Philippines. The announcement followed the company’s latest fundraising round, which saw backing from Google, Warburg Pincus, KKR, Tencent, and Meituan-Dianping among others.
                            </p>
                            <p>
                                With more than 98 million+ app downloads in Indonesia, GO-JEK's platform powers the  Indonesian equivalents of Indian taxi aggregators, food delivery start-ups, hyperlocal start-ups, digital wallet start-ups and home service based start-ups, all in one, at a comparable and sometimes larger scale.   
                            </p>

                            <h4 className="pt-5 pb-3">About GO-VIET</h4>
                            <p>
                                GO-VIET is an on-demand multi-service app that aims to make improve life for people across Vietnam. The company is managed by a local Vietnamese founding team, with GO-JEK providing world-class technology, knowledge and expertise as well as investment. GO-VIET will provide a range of services for Vietnamese people, including transportation, logistics, food-delivery and payments. The company aims to use technology to improve life in Vietnam, providing people with access to products and services, helping to create more value for society, improving efficiency and productivity and promoting financial inclusion.
                            </p>  

                            <h4 className="pt-5 pb-3">About GO-JEK</h4>
                            <p>GO-JEK is a Super App. It’s one app for ordering food, commuting, digital payments, shopping, hyper-local delivery, getting a massage and two dozen services. It is Indonesia’s first and fastest growing unicorn building an on-demand empire.  </p>
                            <p>
                                In the last 36 months, the startup’s total order volumes has grown to 6600x and diversified into 18 verticals. The company runs the equivalent of three Indian unicorns rolled into one. GO-FOOD alone does more orders in Indonesia than all Indian food tech startups combined. 3 years since the mobile app launched, GO-JEK does more rides than India’s largest taxi-sharing service.  
                            </p>
                            <p className="pb-5">
                                GO-JEK Tech is the product development and training centre of GO-JEK. The tech team comprises of developers, data scientists, designers and product managers who work on product innovation, mining data and crafting consumer experiences. The average age of the team is 29 and it runs one of the largest jruby, Java and go clusters in Asia.   
                            </p>
                            
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}

export default GojekViet;