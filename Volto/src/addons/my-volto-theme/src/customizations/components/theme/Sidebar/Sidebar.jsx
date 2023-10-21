function Sidebar() {
  return (
    <div className="left-sidebar">
      <div className="navigation-header">
        <p>Navigation</p>
      </div>
      <div className="navigation-content">
        <div className="navigation-item">
          <div className="nav-item-img">
            <img src="resources/fraud_prevention.png" alt="Fraud Prevention" />
          </div>
          <div className="nav-item-text">
            <p>Money Laundering and Fraud Prevention</p>
          </div>
        </div>
        <div className="navigation-item">
          <div className="nav-item-img">
            <img src="resources/it_security.png" alt="It Security" />
          </div>
          <div className="nav-item-text">
            <p>IT security and information security</p>
          </div>
        </div>
        <div className="navigation-item">
          <div className="nav-item-img">
            <img src="resources/data_protection.png" alt="Data Protection" />
          </div>
          <div className="nav-item-text">
            <p>Data Protection</p>
          </div>
        </div>
        <div className="navigation-item">
          <div className="nav-item-img">
            <img src="resources/wphg.png" alt="WpHG" />
          </div>
          <div className="nav-item-text">
            <p>WpHG-Compliance</p>
          </div>
        </div>
      </div>

      <div className="contact-header">
        <p>Contact</p>
      </div>
      <div className="contact-content">
        <div className="contact-item">
          <p className="c-type">Technical support</p>
          <p>John Doe</p>
          <a href="mailto: it@example.com">it@example.com</a>
        </div>
        <div className="contact-item">
          <p className="c-type">Content-didactic topics</p>
          <p>Jane Roe</p>
          <a href="mailto: content@example.com">content@example.com</a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
