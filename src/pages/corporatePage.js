import React from "react";
import "./corporatePage.scss";
import NavbarCorporate from "../components/navbarCorporate";
import CorporateTitle from "../components/corporateTitle";
import CorporateProfile from "../components/corporateProfile";

export default function CorporatePage() {
  return (
    <div className="CorporatePage">
      <NavbarCorporate></NavbarCorporate>
      <CorporateTitle></CorporateTitle>
      <CorporateProfile></CorporateProfile>
    </div>
  );
}
