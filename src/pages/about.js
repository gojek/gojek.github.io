import React, { Component } from 'react';
import { Link } from 'react-scroll';


class About extends Component {
    componentDidMount() {
        // if (typeof window !== 'undefined') {
            const WOW = require( 'wow.js/dist/wow.min.js' );
            new WOW().init();
        // }
    }
    render() {
        return(
            <div className="first-section">
                <div className = "bg-green text-center ">
                    <h1 className = "h1 py-5 raleway-bold font-xl-x text-uppercase text-white">Go-jek is indonesia’s <br/> first &amp; only unicorn</h1>

                        <img className = "img-fluid " src = "../images/about/about-us-banner.png"/>


                    <div className = "py-5">
                        <Link
                        to="about-us"
                        className="my-1 font-sm text-uppercase roboto-regular font-weight-bold text-white scroll"
                        spy={true}
                        smooth={true}
                        >
                        scroll to learn more
                        </Link>
                    </div>
               
                </div>
                <div id = "about-us" className=" pt-5 d-flex flex-row flex-wrap justify-content-center align-items-center section">
                    <div className=" pt-5 col-lg-4 col-md-5 col-8 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
                        <img className="img-fluid" src="../images/about/local-ojeks.png" />
                    </div>
                <div className=" pt-5 col-lg-4 col-md-5 col-8 text-center text-md-left wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
                        <h2 className="text-green font-lg roboto-black text-uppercase">IN 2010</h2>
                    <h4 className = " roboto-regular font-xl-l aboutFont" > GO - JEK started with a mission to improve the livelihoods of local ojeks (motorcycle taxis) 
                    </h4>
                </div>
            </div>
            <div style = {{height:"150px"}} className = "position-relative" >

                <svg xmlns="http://www.w3.org/2000/svg" className=" position-absolute about-path-test path-left" viewBox="0 0 437.16 278.29"><title>Asset 1</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M437.16,0a131.07,131.07,0,0,1-2.9,14.77l-1.52-.46C434.46,9.63,435.9,4.85,437.16,0Z"/><path d="M427.85,33.9a145.7,145.7,0,0,1-6.51,13.72l-3.92-2.28c2.65-4.17,5.08-8.47,7.37-12.86Z"/><path d="M410.73,64.93c-2.92,4.16-6,8.19-9.26,12.11l-5.14-4.5q5-5.4,9.61-11.19Z"/><path d="M387.76,92.08c-3.59,3.61-7.35,7-11.19,10.39L371,95.79c3.85-3,7.59-6.23,11.27-9.49Z"/><polygon points="360.64 115.16 348.05 123.82 342.73 115.27 355.17 107.38 360.64 115.16"/><path d="M330.52,134.2c-1.13.6-2.24,1.22-3.38,1.79l-3.39,1.73-6.81,3.42-4.68-10,6.66-3.17,3.34-1.58c1.11-.52,2.2-1.09,3.3-1.63Z"/><polygon points="298.44 149.46 284.32 155.06 280.27 144.13 294.11 138.85 298.44 149.46"/><polygon points="265.3 161.85 250.91 166.5 247.37 155.1 261.55 150.58 265.3 161.85"/><polygon points="231.65 172.29 217.17 176.4 213.94 164.93 228.31 160.79 231.65 172.29"/><polygon points="197.88 181.72 183.44 185.68 180.28 174.54 194.72 170.39 197.88 181.72"/><polygon points="164.25 191.06 157.09 193.15 149.96 195.28 146.66 184.88 153.85 182.57 161.05 180.31 164.25 191.06"/><polygon points="131.05 201.28 117.01 206.16 113.49 196.98 127.62 191.53 131.05 201.28"/><polygon points="98.54 213.27 84.91 219.13 81.27 211.59 94.92 204.97 98.54 213.27"/><polygon points="67.11 227.75 54.14 234.93 50.72 229.48 63.56 221.38 67.11 227.75"/><path d="M37.43,245.53q-6.12,4.2-12,8.8l-2.59-3.06q5.6-5.1,11.52-9.84Z"/><path d="M10.36,267.24,5,272.47l-1.35,1.3a11.39,11.39,0,0,0-1.15,1.35,13.58,13.58,0,0,0-1.74,3.17L0,278a14.57,14.57,0,0,1,1.51-3.57,13,13,0,0,1,1.12-1.62l1.21-1.44,4.88-5.77Z"/></g></g></svg>
                  
                   <img className ="img-fluid circle-width "  src = "../images/about/ellipse-1-left-bike.png" />
                  
            </div>

               
            <div className="d-flex flex-row flex-wrap justify-content-center align-items-center section">
                <div className="col-lg-4 col-md-5 col-8 text-center text-md-left order-2 order-md-1 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
                        <h2 className="text-green font-lg roboto-black  text-uppercase ">In the beginning</h2>
                        < h4 className= " roboto-regular font-xl-l aboutFont" > Every customer was ‘matched’ manually with a driver via a call center. </h4>
                </div>
                <div className="col-lg-4 col-md-5 col-8 order-1 order-md-2 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
                    <img className="img-fluid" src="../images/about/customer-care.png" />
                </div>
            </div>

            <div style = {{height:"150px"}} className = "position-relative" >

                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 565.38 190.27" className=" position-absolute about-path-test path-left zero-dashOffset path-one"><title>Asset 2</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M1.14,0a48.85,48.85,0,0,0,.43,14.84L.23,15A47,47,0,0,1,1.14,0Z"/><path d="M8.42,33.16A71.58,71.58,0,0,0,17,45l-3,2.55a70.19,70.19,0,0,1-8.12-13Z"/><path d="M31.68,57.63c2,1.33,4.12,2.58,6.25,3.74s4.31,2.24,6.52,3.28L41.74,70.1a99.29,99.29,0,0,1-13-8.21Z"/><path d="M62.73,71.42C67.43,72.8,72.2,74,77,75L75.2,82.56c-4.9-1.31-9.79-2.76-14.62-4.42Z"/><polygon points="96.48 78.67 111.22 81.06 109.67 90.03 94.9 87.1 96.48 78.67"/><polygon points="130.93 83.93 145.74 85.86 144.32 96.02 129.45 93.61 130.93 83.93"/><polygon points="165.5 88.17 180.35 89.7 179.19 100.68 164.23 98.84 165.5 88.17"/><polygon points="200.17 91.42 215.05 92.51 214.22 104.07 199.19 102.78 200.17 91.42"/><polygon points="234.91 93.65 249.81 94.3 249.35 106.18 234.28 105.44 234.91 93.65"/><polygon points="269.69 94.85 284.61 95.04 284.53 107.02 269.45 106.82 269.69 94.85"/><path d="M304.49,95c5-.05,9.95-.17,14.93-.25l.3,11.83c-5,.14-10,.25-15.07.33Z"/><polygon points="339.38 94.29 354.41 93.95 354.69 105.41 339.73 105.91 339.38 94.29"/><polygon points="374.52 93.81 389.65 94.05 389.45 104.86 374.58 104.91 374.52 93.81"/><path d="M409.86,95.1,425,96.6,424,106.43c-4.92-.31-9.83-.66-14.74-1Z"/><polygon points="445.09 99.8 452.55 101.44 456.28 102.26 459.99 103.2 457.92 111.62 454.34 110.84 450.71 110.18 443.47 108.84 445.09 99.8"/><path d="M479.43,109.46q7.14,2.75,14.05,6.05L490.54,122q-6.78-2.85-13.77-5.16Z"/><path d="M511.34,125.32a149.08,149.08,0,0,1,12.51,8.76l-3.14,4.31c-4.06-2.78-8.27-5.32-12.54-7.74Z"/><path d="M539,147.62a119.56,119.56,0,0,1,9.9,11.56l-2.37,1.92a135.74,135.74,0,0,0-10.38-10.53Z"/><path d="M559.61,176.3a103.25,103.25,0,0,1,5.77,13.91l-.16.06A111,111,0,0,0,558.28,177Z"/></g></g></svg>

            </div>

            <div className="d-flex flex-row flex-wrap justify-content-center align-items-center section">
                <div className="col-lg-4 col-md-5 col-8 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
                    <img className="img-fluid" src="../images/about/automated-machine.png" />
                </div>
                <div className="col-lg-4 col-md-5 col-8 text-center text-md-left wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
                        <h2 className="text-green font-lg roboto-black text-uppercase">IN 2015</h2>
                        < h4 className= " roboto-regular font-xl-l aboutFont" >A version of the app was launched to automate the matchmaking</h4>
                </div>
            </div>


            <div style = {{height:"150px"}} className = "position-relative" >

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 486.42 254.96" className=" position-absolute about-path-test path-left zero-dashOffset path-one"><title>Asset 3</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M486.42,0a55.62,55.62,0,0,1-3.16,14.74l-1.38-.57A57.89,57.89,0,0,0,486.42,0Z"/><path d="M473.28,32.41a83.26,83.26,0,0,1-10.51,11.14L460,40.25a91.5,91.5,0,0,0,10.84-9.89Z"/><path d="M446.44,55.76c-4.29,2.75-8.75,5.22-13.28,7.53l-2.8-5.87q6.74-3,13.22-6.51Z"/><path d="M414.67,71.68c-2.36.92-4.73,1.88-7.08,2.75l-7.07,2.62-2.66-7.88L405,66.91c2.38-.74,4.69-1.54,7-2.31Z"/><polygon points="381.51 83.6 367.16 88.23 364.44 78.98 378.81 74.93 381.51 83.6"/><polygon points="347.94 94.06 333.45 98.17 330.71 87.8 345.19 84.1 347.94 94.06"/><polygon points="314.09 103.41 299.55 107.2 296.79 96.08 311.35 92.59 314.09 103.41"/><polygon points="280.13 112.1 265.58 115.74 262.77 104.21 277.36 100.73 280.13 112.1"/><polygon points="246.18 120.53 231.66 124.18 228.73 112.55 243.32 108.94 246.18 120.53"/><polygon points="212.34 129.11 197.9 132.94 194.77 121.51 209.31 117.58 212.34 129.11"/><polygon points="178.71 138.23 164.39 142.4 161.04 131.5 175.46 127.08 178.71 138.23"/><polygon points="145.41 148.27 131.27 152.95 127.7 142.9 141.93 137.82 145.41 148.27"/><polygon points="112.58 159.62 98.72 164.94 94.97 156.16 108.9 150.18 112.58 159.62"/><polygon points="80.65 172.85 67.54 179.59 63.42 172.5 76.71 165 80.65 172.85"/><path d="M50.84,189.84c-4,2.78-7.94,5.75-11.68,8.9L34.94,194c3.73-3.5,7.64-6.8,11.68-9.93Z"/><path d="M25.11,212.35A121.3,121.3,0,0,0,16,223.92l-3.42-2.2A124.93,124.93,0,0,1,21.2,209.1Z"/><path d="M6.23,241a99.79,99.79,0,0,0-5.11,14L0,254.71a88.49,88.49,0,0,1,3.92-14.63Z"/></g></g></svg>
                
                
            </div>
            <div className="d-flex flex-row flex-wrap justify-content-center align-items-center section">
                <div className="col-lg-4 col-md-5 col-8 text-center text-md-left order-2 order-md-1 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
                        <h2 className="text-green font-lg roboto-black text-uppercase">By mid-2015</h2>
                        < h4 className= " roboto-regular font-xl-l aboutFont" >Orders scaled from <strong>3,000 to 100,000 </strong>a day. GO-JEK was becoming indispensable. By end of 2015 - systems were crashing because of a major spike in volumes</h4>
                </div>
                <div className="col-lg-4 col-md-5 col-8 order-1 order-md-2 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
                    <img className="img-fluid" src="../images/about/scaled-order.png" />
                </div>

            </div>

            <div style = {{height:"150px"}} className = "position-relative" >
                <img className ="img-fluid circle-width position-absolute"   src = "../images/about/ellipse-1-copy-2.png" />

                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 495.5 315.87" className=" position-absolute about-path-test path-left zero-dashOffset path-one"><title>Asset 4</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M6.27,0A107.11,107.11,0,0,0,3.44,14.68L2.1,14.46A94.57,94.57,0,0,1,6.27,0Z"/><path d="M2.93,34.46A119.84,119.84,0,0,0,4.86,49.11l-4,.63A112,112,0,0,1,0,34.54Z"/><path d="M10.1,68a146.36,146.36,0,0,0,5.72,13.54l-5.59,2.51A137.19,137.19,0,0,1,5.12,69.66Z"/><path d="M25.4,98.63q4,6.16,8.54,11.93l-6.27,4.68c-3-4.17-5.74-8.48-8.32-12.89Z"/><path d="M46.81,125.22q5.13,5.22,10.68,10L51.43,142q-5.68-5.21-10.88-10.89Z"/><path d="M73,146.92c4,2.73,8.2,5.33,12.41,7.81l-5.33,8.81q-6.53-4-12.73-8.55Z"/><polygon points="102.69 163.93 116.09 170 111.67 180.17 97.87 173.59 102.69 163.93"/><polygon points="134.42 177.11 148.43 181.84 144.85 192.89 130.49 187.86 134.42 177.11"/><polygon points="167.39 187.45 181.76 191.28 178.78 202.81 164.18 198.84 167.39 187.45"/><polygon points="201.07 196.02 215.63 199.41 212.96 211.08 198.3 207.67 201.07 196.02"/><polygon points="235.12 203.88 249.73 207.25 247.12 218.76 232.48 215.48 235.12 203.88"/><polygon points="269.21 211.78 283.82 215.2 281.3 226.31 266.65 223.08 269.21 211.78"/><polygon points="303.28 219.81 317.87 223.28 315.5 233.73 300.84 230.56 303.28 219.81"/><polygon points="337.32 227.96 351.89 231.52 349.74 241 335.06 237.92 337.32 227.96"/><polygon points="371.37 236.46 385.92 240.52 383.67 248.72 369.2 245.22 371.37 236.46"/><polygon points="405.15 246.73 419.33 252.15 416.86 258.6 402.77 253.99 405.15 246.73"/><path d="M437.75,260.62c4.5,2.36,8.91,4.87,13.21,7.59l-2.53,4.29q-6.49-3.56-13.26-6.56Z"/><path d="M467.37,280.14a125.28,125.28,0,0,1,11,10.53l-1.85,1.83a122.38,122.38,0,0,0-11.42-9.43Z"/><path d="M490.51,306.73a95.22,95.22,0,0,1,5,9.14q-2.72-4.44-5.8-8.6Z"/></g></g></svg>


            </div>
            <div className="d-flex flex-row flex-wrap justify-content-center align-items-center section">
                <div className="col-lg-4 col-md-5 col-8 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
                    <img className="img-fluid" src="../images/about/niranjan-paranjape.png" />
                </div>
                <div className="col-lg-4 col-md-5 col-8 text-center text-md-left wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
                        <h2 className="text-green font-lg roboto-black text-uppercase">End of 2015</h2>
                        < h4 className= " roboto-regular font-xl-l aboutFont" >Niranjan Paranjape  rewrote a key piece of technology in golang in under 3 days. </h4>
                        <a href="https://blog.gojekengineering.com/how-go-jek-manages-1-million-drivers-with-12-engineers-part-1-978af9ccfd32" target="_blank"><button className="btn btn-success btn-sm text-uppercase px-5">read his story here</button></a>
                </div>
            </div>

            <div style = {{height:"150px"}} className = "position-relative" >

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 604.68 247.6" className=" position-absolute about-path-test path-left zero-dashOffset path-one"><title>Asset 5</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M604.68,0A100.81,100.81,0,0,1,600,14.31l-1.13-.51A110.72,110.72,0,0,0,604.68,0Z"/><path d="M590.78,32.21A140.55,140.55,0,0,1,582,44.57l-2.8-2.38a136.14,136.14,0,0,0,9.39-11.48Z"/><path d="M568.32,59.53q-5.45,5.3-11.31,10.16l-3.49-4.43q6-4.41,11.55-9.27Z"/><polygon points="540.82 81.88 534.46 86.04 531.28 88.12 528.06 90.11 524.43 83.85 527.66 82.04 530.84 80.15 537.21 76.37 540.82 81.88"/><polygon points="510.47 100.11 496.89 106.87 493.34 99.03 506.83 92.87 510.47 100.11"/><polygon points="478.37 115.01 464.23 120.51 461.01 111.35 475 106.42 478.37 115.01"/><polygon points="445.1 127.05 430.57 131.37 427.81 121.2 442.12 117.24 445.1 127.05"/><polygon points="411.05 136.5 396.31 139.92 394.01 128.97 408.56 125.88 411.05 136.5"/><polygon points="376.57 143.96 361.7 146.61 359.81 135.09 374.5 132.62 376.57 143.96"/><polygon points="341.83 149.76 326.9 151.84 325.35 140.03 340.14 138.02 341.83 149.76"/><polygon points="306.99 154.36 292.05 156.1 290.7 144.2 305.57 142.47 306.99 154.36"/><polygon points="272.15 158.28 257.24 159.88 255.94 148.09 270.85 146.44 272.15 158.28"/><polygon points="237.37 161.99 222.5 163.65 221.13 152.21 236.05 150.4 237.37 161.99"/><polygon points="202.69 165.95 187.88 167.84 186.33 157.07 201.24 154.88 202.69 165.95"/><polygon points="168.19 170.67 153.47 173.06 151.64 163 166.49 160.3 168.19 170.67"/><polygon points="133.92 176.6 119.34 179.61 117.23 170.67 131.93 167.16 133.92 176.6"/><path d="M100,184.19c-2.39.64-4.82,1.22-7.18,1.91l-7.13,2-2.43-7.64,7.23-2.33c2.42-.79,4.84-1.46,7.25-2.19Z"/><path d="M67.05,194.38q-6.9,2.64-13.58,5.76l-2.89-5.81q6.77-3.56,13.77-6.57Z"/><path d="M36.24,209.51a118.39,118.39,0,0,0-12,8.54l-3.06-3.54a125,125,0,0,1,12-9.58Z"/><path d="M10.43,231.84a78.71,78.71,0,0,0-8.2,12.21L0,242.94a81.77,81.77,0,0,1,7.64-13.22Z"/><polygon points="1.9 246.96 9.94 237.87 2.68 247.6 1.9 246.96"/></g></g></svg>
                
            </div>

            <div className="d-flex flex-row flex-wrap justify-content-center align-items-center section">
                <div className="col-lg-4 col-md-5 col-8 text-center text-md-left order-2 order-md-1 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
                        <h2 className="text-green font-lg roboto-black text-uppercase">By early 2016, </h2>
                        < h4 className= " roboto-regular font-xl-l aboutFont" >By early 2016, it was smooth sailing but orders climbed to 300,000+ a day..</h4>
                </div>
                <div className="col-lg-4 col-md-5 col-8 order-1 order-md-2 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
                        <img className="img-fluid" src="../images/about/300000-orders.png" />
                </div>
            </div>

            <div style = {{height:"150px"}} className = "position-relative" >
                <img className ="img-fluid circle-width position-absolute" style={{right:'0'}}   src = "../images/about/ellipse-1-right-bike.png" />

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 588.35 255.53" className=" position-absolute about-path-test path-left zero-dashOffset path-one"><title>Asset 6</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M0,0A106.23,106.23,0,0,0,3,14.64l-1.25.3A97.94,97.94,0,0,1,0,0Z"/><path d="M10.07,33.16A122.62,122.62,0,0,0,17.3,46.08L14,48A125.65,125.65,0,0,1,7.54,34.27Z"/><path d="M29,61.89q4.8,5.6,10.14,10.69L35,76.66A149.87,149.87,0,0,1,25.17,65Z"/><path d="M54.08,85.3l6,4.24c1,.71,2,1.42,3,2.06l3.09,2-4.08,6.21L59,97.6c-1-.72-2.06-1.51-3.06-2.3l-6-4.7Z"/><polygon points="83.33 103.17 96.68 109.41 93.07 117.42 79.46 110.52 83.33 103.17"/><polygon points="115.03 116.54 129.1 121.16 126.03 130.6 111.75 125.4 115.03 116.54"/><polygon points="148.12 126.63 162.54 130.32 159.88 140.69 145.32 136.64 148.12 126.63"/><polygon points="181.91 134.88 196.48 138.06 194.02 149.18 179.36 145.67 181.91 134.88"/><polygon points="215.97 142.07 230.63 144.87 228.43 156.45 213.66 153.47 215.97 142.07"/><polygon points="250.22 148.36 264.94 150.8 263.05 162.6 248.19 160.09 250.22 148.36"/><polygon points="284.63 153.79 299.41 155.88 297.83 167.7 282.9 165.65 284.63 153.79"/><polygon points="319.17 158.41 334 160.19 332.73 171.83 317.76 170.19 319.17 158.41"/><path d="M353.82,162.32l14.88,1.5-1,11.19c-5-.39-10-.78-15-1.23Z"/><polygon points="388.6 165.73 403.57 167.23 402.57 177.73 387.66 176.53 388.6 165.73"/><polygon points="423.56 169.54 438.52 171.72 437.15 181.3 422.37 179.62 423.56 169.54"/><polygon points="458.42 175.36 473.22 178.76 471.26 187.06 456.72 184.22 458.42 175.36"/><path d="M492.7,184.46q7.21,2.43,14.28,5.31l-2.53,6.6q-7-2.48-14.06-4.51Z"/><path d="M525.4,198.3c4.51,2.33,8.9,4.89,13.2,7.58l-2.71,4.6c-4.32-2.39-8.74-4.57-13.21-6.66Z"/><path d="M555.14,217.6a146.58,146.58,0,0,1,11.37,10.05L564.35,230q-5.67-4.8-11.73-9.08Z"/><path d="M579.92,242.72a130.84,130.84,0,0,1,8.43,12.5l-.48.31a128.19,128.19,0,0,0-9.33-11.67Z"/></g></g></svg>
            </div>

            <div className="d-flex flex-row flex-wrap justify-content-center align-items-center section">
                <div className="col-lg-4 col-md-5 col-8 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
                    <img className="img-fluid" src="../images/about/driver-partners.png" />
                </div>
                <div className="col-lg-4 col-md-5 col-8 text-center text-md-left wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
                        <h2 className="text-green font-lg roboto-black text-uppercase">Happy Driver Partners</h2>
                        < h4 className= " roboto-regular font-xl-l aboutFont" >Driver incomes increased by 150% making GO-JEK a reliable partner  </h4>
                </div>

            </div>

            <div style = {{height:"150px"}} className = "position-relative" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 604.68 247.6" className=" position-absolute about-path-test path-left zero-dashOffset path-one"><title>Asset 5</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M604.68,0A100.81,100.81,0,0,1,600,14.31l-1.13-.51A110.72,110.72,0,0,0,604.68,0Z"/><path d="M590.78,32.21A140.55,140.55,0,0,1,582,44.57l-2.8-2.38a136.14,136.14,0,0,0,9.39-11.48Z"/><path d="M568.32,59.53q-5.45,5.3-11.31,10.16l-3.49-4.43q6-4.41,11.55-9.27Z"/><polygon points="540.82 81.88 534.46 86.04 531.28 88.12 528.06 90.11 524.43 83.85 527.66 82.04 530.84 80.15 537.21 76.37 540.82 81.88"/><polygon points="510.47 100.11 496.89 106.87 493.34 99.03 506.83 92.87 510.47 100.11"/><polygon points="478.37 115.01 464.23 120.51 461.01 111.35 475 106.42 478.37 115.01"/><polygon points="445.1 127.05 430.57 131.37 427.81 121.2 442.12 117.24 445.1 127.05"/><polygon points="411.05 136.5 396.31 139.92 394.01 128.97 408.56 125.88 411.05 136.5"/><polygon points="376.57 143.96 361.7 146.61 359.81 135.09 374.5 132.62 376.57 143.96"/><polygon points="341.83 149.76 326.9 151.84 325.35 140.03 340.14 138.02 341.83 149.76"/><polygon points="306.99 154.36 292.05 156.1 290.7 144.2 305.57 142.47 306.99 154.36"/><polygon points="272.15 158.28 257.24 159.88 255.94 148.09 270.85 146.44 272.15 158.28"/><polygon points="237.37 161.99 222.5 163.65 221.13 152.21 236.05 150.4 237.37 161.99"/><polygon points="202.69 165.95 187.88 167.84 186.33 157.07 201.24 154.88 202.69 165.95"/><polygon points="168.19 170.67 153.47 173.06 151.64 163 166.49 160.3 168.19 170.67"/><polygon points="133.92 176.6 119.34 179.61 117.23 170.67 131.93 167.16 133.92 176.6"/><path d="M100,184.19c-2.39.64-4.82,1.22-7.18,1.91l-7.13,2-2.43-7.64,7.23-2.33c2.42-.79,4.84-1.46,7.25-2.19Z"/><path d="M67.05,194.38q-6.9,2.64-13.58,5.76l-2.89-5.81q6.77-3.56,13.77-6.57Z"/><path d="M36.24,209.51a118.39,118.39,0,0,0-12,8.54l-3.06-3.54a125,125,0,0,1,12-9.58Z"/><path d="M10.43,231.84a78.71,78.71,0,0,0-8.2,12.21L0,242.94a81.77,81.77,0,0,1,7.64-13.22Z"/><polygon points="1.9 246.96 9.94 237.87 2.68 247.6 1.9 246.96"/></g></g></svg>
            </div>


            <div className="d-flex flex-row flex-wrap justify-content-center align-items-center section">
                <div className="col-lg-4 col-md-5 col-8 text-center text-md-left order-2 order-md-1 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
                        <h2 className="text-green font-lg roboto-black text-uppercase">In mid-2016</h2>
                        < h4 className= " roboto-regular font-xl-l aboutFont" >In mid-2016, downtimes were a routine affair. Leaky faucets needed to be fixed.</h4>
                </div>
                <div className="col-lg-4 col-md-5 col-8 order-1 order-md-2 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
                    <img className="img-fluid" src="../images/about/issue.png" />
                </div>
            </div>

            <div style = {{height:"150px"}} className = "position-relative" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 532.96 232.76" className=" position-absolute about-path-test path-left zero-dashOffset path-one"><title>Asset 8</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M0,0C4.34,2.52,8.63,5.08,12.93,7.61l-.78,1.24C8.09,5.9,4,3,0,0Z"/><path d="M30.51,17.05c4.49,2.17,9,4.34,13.43,6.54L42,27.36q-6.56-3.75-13-7.58Z"/><polygon points="62.14 31.63 69.07 34.38 75.98 37.18 73.5 43.12 66.66 39.92 59.84 36.69 62.14 31.63"/><polygon points="94.64 44.01 108.79 48.71 106.09 56.49 92.02 51.01 94.64 44.01"/><polygon points="127.78 54.59 142.12 58.66 139.43 67.83 125.08 63.16 127.78 54.59"/><polygon points="161.37 63.74 175.85 67.36 173.19 77.67 158.68 73.63 161.37 63.74"/><polygon points="195.24 71.99 209.82 75.34 207.2 86.42 192.61 82.77 195.24 71.99"/><polygon points="229.3 79.73 243.93 82.98 241.3 94.51 226.69 91.08 229.3 79.73"/><polygon points="263.45 87.37 278.09 90.72 275.38 102.39 260.79 99 263.45 87.37"/><polygon points="297.6 95.35 312.21 98.97 309.32 110.49 294.8 106.96 297.6 95.35"/><polygon points="331.64 104.08 346.16 108.15 343.04 119.23 328.63 115.37 331.64 104.08"/><polygon points="365.42 114 379.78 118.72 376.39 129.02 362.15 124.66 365.42 114"/><path d="M398.74,125.56c4.71,1.83,9.4,3.7,14.08,5.57l-3.59,9.14q-7-2.49-14-5Z"/><polygon points="431.32 139.21 444.97 145.75 441.32 153.42 427.68 147.51 431.32 139.21"/><polygon points="462.79 155.24 475.82 163.04 472.33 168.86 459.23 161.92 462.79 155.24"/><path d="M492.42,174.73a152.31,152.31,0,0,1,11.49,10l-3.13,3.45q-5.64-4.77-11.73-8.94Z"/><path d="M517.28,200.07c1.44,2.1,2.93,4.15,4.24,6.32s2.59,4.35,3.76,6.59l-1.76,1c-1.31-2.1-2.71-4.14-4.17-6.13s-3.07-3.88-4.61-5.79Z"/><polygon points="532.66 231.68 532.96 232.76 532.55 231.72 532.66 231.68"/></g></g></svg>
            </div>

            <div className="d-flex flex-row flex-wrap justify-content-center align-items-center section">
                <div className="col-lg-4 col-md-5 col-8 text-center text-md-left order-2 order-md-2 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
                        <h2 className="text-green font-lg roboto-black text-uppercase">The big rewrite began in 2016</h2>
                        < h4 className= "roboto-regular font-xl-l aboutFont" >“No project has a budget and impact as big as this in GO-JEK’s history” - From Nadiem’s internal mail..</h4>
                        <a href="https://blog.gojekengineering.com/how-go-jek-manages-1-million-drivers-with-12-engineers-part-2-35f6a27a0faf" target="_blank"><button className="btn btn-success btn-sm text-uppercase px-5">read the story here</button></a>
                </div>
                <div className="col-lg-4 col-md-5 col-8 order-1 order-md-1 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
                    <img className="img-fluid" src="../images/about/big-rewrite.png" />
                </div>
            </div>

            <div style = {{height:"150px"}} className = "position-relative" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 432.71 230.66" className=" position-absolute about-path-test path-left zero-dashOffset path-one"><title>Asset 9</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M432.71,0a62.47,62.47,0,0,1-7.52,13.08L423.86,12A65.79,65.79,0,0,0,432.71,0Z"/><path d="M411.09,27.66c-1.95,1.63-4,3.16-6,4.64s-4.17,2.91-6.31,4.28l-2.46-4.17c2.17-1.16,4.32-2.38,6.42-3.65s4.17-2.62,6.21-4Z"/><polygon points="381.14 46.62 367.54 53.26 364.69 46.6 378.43 40.91 381.14 46.62"/><polygon points="349.03 61.31 334.93 66.78 331.95 58.13 346.07 53.44 349.03 61.31"/><polygon points="315.9 73.42 301.51 78 298.6 67.94 312.95 63.9 315.9 73.42"/><polygon points="282.25 83.7 267.76 87.74 264.86 76.74 279.35 73.04 282.25 83.7"/><polygon points="248.42 92.94 233.94 96.8 230.94 85.31 245.49 81.62 248.42 92.94"/><polygon points="214.67 101.95 200.28 105.94 197.02 94.43 211.54 90.41 214.67 101.95"/><path d="M181.22,111.53c-2.37.74-4.75,1.43-7.11,2.2L167,116l-3.72-11.09,7.19-2.4c2.4-.81,4.8-1.55,7.21-2.31Z"/><polygon points="148.37 122.48 134.54 127.8 130.28 117.61 144.33 111.83 148.37 122.48"/><polygon points="116.39 135.57 103.04 141.95 98.4 133.13 111.89 126.11 116.39 135.57"/><polygon points="85.66 151.26 73 158.91 68.3 151.93 80.93 143.44 85.66 151.26"/><polygon points="56.73 170.04 45.1 179.19 40.9 174.5 52.25 164.36 56.73 170.04"/><path d="M30.47,192.46c-3.52,3.48-6.9,7.11-10.18,10.83L17.49,201c3-4.08,6.16-8,9.46-11.85Z"/><path d="M7.91,218.84c-2.78,3.83-5.39,7.79-7.91,11.82,2-4.33,4.18-8.55,6.52-12.71Z"/></g></g></svg>
            </div>

            <div className="d-flex flex-row flex-wrap justify-content-center align-items-center section">
                <div className="col-lg-4 col-md-5 col-8 text-center text-md-left order-2 order-md-1 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
                        <h2 className="text-green font-lg roboto-black text-uppercase">Employment opportunities.</h2>
                        < h4 className= " roboto-regular font-xl-l aboutFont" >GO-JEK employs more than 30,000 people with disabilities.</h4>
                        <a href="https://www.youtube.com/watch?v=tu-5s8KhzvQ&feature=youtu.be" target="_blank"><button className="btn btn-success btn-sm text-uppercase px-5">watch the video</button></a>
                </div>
                <div className="col-lg-4 col-md-5 col-8 order-1 order-md-2 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                    <img className="img-fluid" src="../images/about/employees.png" />
                </div>
            </div>
            <div style = {{height:"150px"}} className = "position-relative" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 532.96 232.76" className=" position-absolute about-path-test path-left zero-dashOffset path-one"><title>Asset 8</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M0,0C4.34,2.52,8.63,5.08,12.93,7.61l-.78,1.24C8.09,5.9,4,3,0,0Z"/><path d="M30.51,17.05c4.49,2.17,9,4.34,13.43,6.54L42,27.36q-6.56-3.75-13-7.58Z"/><polygon points="62.14 31.63 69.07 34.38 75.98 37.18 73.5 43.12 66.66 39.92 59.84 36.69 62.14 31.63"/><polygon points="94.64 44.01 108.79 48.71 106.09 56.49 92.02 51.01 94.64 44.01"/><polygon points="127.78 54.59 142.12 58.66 139.43 67.83 125.08 63.16 127.78 54.59"/><polygon points="161.37 63.74 175.85 67.36 173.19 77.67 158.68 73.63 161.37 63.74"/><polygon points="195.24 71.99 209.82 75.34 207.2 86.42 192.61 82.77 195.24 71.99"/><polygon points="229.3 79.73 243.93 82.98 241.3 94.51 226.69 91.08 229.3 79.73"/><polygon points="263.45 87.37 278.09 90.72 275.38 102.39 260.79 99 263.45 87.37"/><polygon points="297.6 95.35 312.21 98.97 309.32 110.49 294.8 106.96 297.6 95.35"/><polygon points="331.64 104.08 346.16 108.15 343.04 119.23 328.63 115.37 331.64 104.08"/><polygon points="365.42 114 379.78 118.72 376.39 129.02 362.15 124.66 365.42 114"/><path d="M398.74,125.56c4.71,1.83,9.4,3.7,14.08,5.57l-3.59,9.14q-7-2.49-14-5Z"/><polygon points="431.32 139.21 444.97 145.75 441.32 153.42 427.68 147.51 431.32 139.21"/><polygon points="462.79 155.24 475.82 163.04 472.33 168.86 459.23 161.92 462.79 155.24"/><path d="M492.42,174.73a152.31,152.31,0,0,1,11.49,10l-3.13,3.45q-5.64-4.77-11.73-8.94Z"/><path d="M517.28,200.07c1.44,2.1,2.93,4.15,4.24,6.32s2.59,4.35,3.76,6.59l-1.76,1c-1.31-2.1-2.71-4.14-4.17-6.13s-3.07-3.88-4.61-5.79Z"/><polygon points="532.66 231.68 532.96 232.76 532.55 231.72 532.66 231.68"/></g></g></svg>
            </div>

            <div className="d-flex flex-row flex-wrap justify-content-center align-items-center section pb-5">
                <div className="col-lg-4 col-md-5 col-8 text-center text-md-left order-2 order-md-2 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
                        <h2 className="text-green font-lg roboto-black text-uppercase">As of 2018</h2>
                        < h4 className= " roboto-regular font-xl-l aboutFont" >GO-JEK does 100+ million orders across 18+ products Total order volume growth - 6600x </h4>
                </div>
                <div className="col-lg-4 col-md-5 col-8 order-1 order-md-1 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
                    <img className="img-fluid" src="../images/about/10-million-orders.png" />
                </div>
            </div>
        </div>
        );
    }
}

export default About; 