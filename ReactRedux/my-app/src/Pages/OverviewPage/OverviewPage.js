import Breadcrumb from "../../Components/Breadcrumb/Breadcrump";
import ContentArea from "../../Components/ContentArea/ContentArea";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./overviewpage.css"

export default function OverviewPage() {
  return (
    <>
      <Navbar/>
      <div className="container">
          <Breadcrumb/>
          <div className="content">
              <Sidebar/>
              <ContentArea/>
          </div>
      </div>
    </>
  );
}