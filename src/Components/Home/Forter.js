import React from "react";
import Img from "../img/Screenshot 2024-04-02 161320.png";
import Look from "../img/Screenshot 2024-04-02 161419.png";

const Forter = () => {
  return (
    <footer>
      <div className="plus">
        <div className="container">
          <div className="row">
            <div className="col-md-4 pt-3">
              <img src={Img} alt="" />
            </div>
            <div className="col-md-8">
              <div className="Twitter">
                <div className="SlixaPublic">
                  {" "}
                  <span className="FAQ PublicSiteContact">Public Site</span>
                  <span className="FAQ PublicSiteContact">Contact</span>
                  <span className="FAQ PublicSiteContact">FAQ</span>
                  <span className="PublicSiteContact">Slixa on Twitter</span>
                </div>
                <div className="SlixaPublics">
                  {" "}
                  <span className="FAQ PublicSiteContact">
                    Please read our Terms & Conditions
                  </span>
                  <span className="FAQ PublicSiteContact">
                    Advertiser Agreement
                  </span>
                  <span className="PublicSiteContact">
                    Advertiser Publishing Standards
                  </span>
                </div>
                <div className="Publics">
                  {" "}
                  <span className="FAQ PublicSiteContact">Privacy Policy</span>
                  <span className="FAQ PublicSiteContact">DMCA Statement</span>
                  <span className="PublicSiteContact">
                    18 U.S.C. 2257 Record-Keeping Requirements Compliance
                    Statement
                  </span>
                </div>
                <div className="Reserved">
                  <span>© 2012-2024 Slixa®. All Rights Reserved.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Human">
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 pt-3">
              <div className="flex-container">
                <div>
                  <img src={Look} alt="" />
                </div>
                <div className="abhorrent">
                  <p className="pt-4 ps-4">
                    Human trafficking is abhorrent and Slixa works tirelessly to
                    ensure our platform is not used by traffickers or any who
                    would limit the freedoms of others.{" "}
                  </p>
                  <p className="ps-4">
                    {" "}
                    If you or someone you know is in need of help, please visit
                    trafficking.help to find organizations in your country that
                    can help.
                  </p>
                </div>
                <div>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Forter;
