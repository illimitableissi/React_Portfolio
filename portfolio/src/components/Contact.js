import React from 'react';

const Contact = () => {
    return (
        <div>
    <div className="container">
    <div className="row" data-aos="fadeInUp">
        <form className="col s12 form-info">
          <div className="row">
            <div className="input-field col s6">
              <input id="first_name" type="text" className="validate"></input>
              <label for="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="last_name" type="text" className="validate"></input>
              <label for="last_name">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate"></input>
              <label for="email">Email</label>
            </div>
          </div>
          <div className="row">
                <div className="input-field col s12">
                    <textarea id="textarea" className="materialize-textarea"></textarea>
                    <label for="textarea">Comment</label>
                </div>
          </div>
        </form>
        <button id="submit-button" className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
      </div>
</div>                  
        </div>
    );
};

export default Contact;