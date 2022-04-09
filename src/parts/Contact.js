import React, { useState } from "react";

export default function Contact(props) {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    setFullName(`${fullname}`);
    setEmail(`${email}`);
    setMessage(`${message}`);
  };
  return (
    <div
      className="section-contact"
      style={{ marginTop: 100 }}
      ref={props.refContact}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 class="text-center">Setting</h2>
          </div>

          <div className="col">
            <form action="">
              <div className="col-md-12">
                <div className="card mt-4">
                  <div className="card-body">
                    <form onSubmit={submitHandler}>
                      <div className="mb-3">
                        <label htmlFor="fullname">Username</label>
                        <input
                          type="text"
                          name="fullname"
                          id="fullname"
                          value={fullname}
                          onChange={(e) => setFullName(e.target.value)}
                          className="form-control"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="form-control"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="message">Message</label>
                        <textarea
                          type="text"
                          name="message"
                          id="message"
                          rows="4"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          cols="50"
                          className="form-control"
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-success btn-block"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
