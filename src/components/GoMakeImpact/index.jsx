import React, { Component } from 'react';
import data from './data.json';
import $ from 'jquery';

class Card extends Component {

    componentDidMount() {
        $("#testModal").on("hidden.bs.modal", function () {
            $("#iframe-src").attr("src", "");
            $("#employee-image, #employee-name, #heading, #description, #blog-link").html("");
        })
    }

    handleClick(data) {
        var employeeImg = document.getElementById("employee-image");
        employeeImg.src = data.image;
        $('#employee-name').html(data.name + "'s Story");
        $('#heading').html(data.heading);
        $('#description').html(data.desc);
        $('#blog-link').html("Read "
            + data.name + "'s Blog");
        $('#blog-link').attr("href", data.blog)
        var iframe = document.getElementById("iframe-src");
        iframe.src = data.video;
        $("#testModal").modal("show");
    }

    render() {
        return (
            <section id="goTroops">
                <h1 className="raleway-bold text-center h3 py-lg-5 py-md-3 pt-4 pb-3 text-dark" >
                    Learn more about the people who are driving impact at scale
                </h1>
                <div className="row no-gutters">
                    {data.map((employee, key) =>
                        <div key={key} className="col test scroll" onClick={() => this.handleClick(employee)}>
                            <img className="img-fluid fade-in" src={employee.image} alt={employee.name + "'s story"} />
                        </div>

                    )}
                </div>
                <div className="modal fade bd-example-modal-lg" id="testModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"
                >
                    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-body px-0 py-2 p-md-0 pr-lg-2">
                                <button type="button" className="close p-1" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <div className="row mx-0">
                                    <div className="col-lg-3 p-0 d-none d-lg-block">
                                        <img src="" alt="" className="img-fluid" id="employee-image" />
                                    </div>
                                    <div className="col-lg-6 py-md-3">
                                        <h1 id="employee-name" className="raleway-bold pb-3 mb-0"></h1>
                                        <div className="embed-responsive embed-responsive-4by3">
                                            <iframe id="iframe-src" className="embed-responsive-item" src="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 pt-md-4 pb-3 text-center">
                                        <h3 className="pt-lg-5 pt-0 raleway-bold text-dark text-left" id="heading">
                                        </h3>
                                        <hr className="" />
                                        <p id="description" className="roboto-regular  text-left">  </p>
                                        <a
                                            href="#"
                                            className="btn custom-btn text-center raleway-bold text-uppercase font-md btn-success w-100" id="blog-link" target="_blank">

                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Card;