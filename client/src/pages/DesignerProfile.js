import React from "react";
import "../App.css";
import axios from 'axios';
import DesignerDetails from '../components/designer-components/DesignerDetails'

const DesignerProfile = () => {
  // Will compose of the following components
  // Designer Name, Brand Name
  return(
    <div className="container">
      {/* <DesignerDetails/> Name of designer, brand name, address, city, state, country, design inpiration, favoriteFabrics
      <Modal> All given details can be editable
      <DesignerPortfolio/> Past work, image gallery. Can be like a carousel
      <FabricRequirements /> Currently looking for [pick fabric], [pick quantity]
      <NewsletterHandler /> Notify me when manufacturers post excess fabric
       */}
    <DesignerDetails />
    </div>
  );
}

// brand / city / email

export default DesignerProfile;