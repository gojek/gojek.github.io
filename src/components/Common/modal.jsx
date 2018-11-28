import React, { Component } from 'react';

class Modal extends Component {
    render() {
        return (
          <div className="modal fade" id={this.props.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"
          >
            <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-body embed-responsive embed-responsive-21by9">
                        <iframe id="iframeYoutube" className="embed-responsive-item" src="https://www.youtube.com/embed/bdHfntRaAoo?rel=0&amp;showinfo=0"
                            allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Modal;