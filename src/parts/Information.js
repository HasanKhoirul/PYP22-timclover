import React from "react";

export default function Information(props) {
  return (
    <div
      class="information pt-4"
      style={{ marginTop: 100 }}
      ref={props.refInformation}
    >
      <div className="container">
        <div className=" section-information row">
          <div className="col-12 text-center">
            <h2>
              Kenapa harus menggunakan aplikasi{" "}
              <span style={{ color: "#1757ed" }}>Simpul ?</span>
            </h2>
            <p>Beberapa keunggulan yang ditawarkan oleh aplikasi Simpul</p>
          </div>

          {props.data.map((item, index) => {
            return (
              <div className="col-sm-6 col-md-6 col-lg-4 mt-4" key={index}>
                <div className="card card-information">
                  <div className="information">
                    <img src={item.imageUrl} alt="Icon Syariah" />
                    <h3 className="mb-4">{item.title}</h3>
                    <div className="text-information">{item.desc}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
