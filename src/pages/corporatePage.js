import React from "react";
import "./corporatePage.scss";
import NavbarCorporate from "../components/navbarCorporate";
import CorporateTitle from "../components/corporateTitle";
import CorporateProfile from "../components/corporateProfile";
import ExpertiseCorporate from "../components/expertiseCorporate";
import MyJourneyCorporate from "../components/myJourneyCorporate";
import ExperienceCorporate from "../components/experienceCorporate";
import EducationCorporate from "../components/educationCorporate";

export default function CorporatePage() {
  return (
    <div className="CorporatePage">
      <NavbarCorporate></NavbarCorporate>
      <CorporateTitle></CorporateTitle>
      <CorporateProfile></CorporateProfile>
      <ExpertiseCorporate></ExpertiseCorporate>
      <MyJourneyCorporate></MyJourneyCorporate>
      <ExperienceCorporate></ExperienceCorporate>
      <EducationCorporate></EducationCorporate>
    </div>
  );
}
