import React from "react";

export default function Featured(props) {
  return (
    <div
      class="featured pt-4"
      style={{ marginTop: 60 }}
      ref={props.refFeatured}
    >
      <div className="container">
        <div className=" section-featured row">
          <div className="col-12 text-center">
            <h2>Fitur Unggulan</h2>
            <p>Fitur-fitur unggulan yang ada diaplikasi Simpul</p>
          </div>

          {props.data.map((item, index) => {
            return (
              <div className="col-6 col-md-3 col-lg-2 mt-4" key={index}>
                <div className="card card-featured">
                  <div className="featured">
                    <img src={item.imageUrl} alt="Icon Syariah" />
                    <h3 className="mb-4">{item.name}</h3>
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
