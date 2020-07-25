import React from "react";
import { Link } from "react-router-dom";
import Image from "../../../images/destinations/details/ampara.jpg";

function Bandarawela() {
  return (
    <div className="container-md" id="mtn">
      <div className="card mb-3">
        <h5 className="card-title">
          <h1>
            <b>Bandarawela</b>
          </h1>
          <Link to="/destinations">
            <button className="btn btn-secondary">Back</button>
          </Link>
        </h5>
        <img
          className="card-img-top"
          src={Image}
          alt="Card image cap"
          style={{}}
        />
        <div className="card-body">
          <p className="card-text">
            <h3>
              Bandarawela town, tinted with a colonial past resting among lush
              forestation has found its niche among its visitors as a base for
              eco – tourism. During the period of British colonial era, the town
              occurred rapid development of the infrastructures and human
              resources due to tea plantation and migration of the British and
              local people to the area. A lot of past evidence belongs to that
              period buildings remaining built in the British colonial period
              with British architectural influences such as the Bandarawela
              hotel, the Cargill’s building, the tennis club etc..
              {/* <br/><br/>
              <b>Top attractions in Ampara : </b> */}
            </h3>

            <h3 className="card-title">
              <b>Historical Places In Bandarawela : </b>
              <h4>
                Ancient Dhowa Buddhist rock temple is one of the well-known
                heritage sites in this region and it was founded by King
                Walagamba in the first century BC and is located beside Baddulla
                - Bandarawella high way 6Km away from Bandarawella city. It has
                38ft (12Km) Buddha image sculptured from a rock and some
                paintings belonging to the Kandyan era.
              </h4>
              <h4>
                The Roman Catholic Church -St Anthony’s Church and Methodist
                church are some other historic places to visit.
              </h4>
            </h3>
          </p>
          {/* <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default Bandarawela;
