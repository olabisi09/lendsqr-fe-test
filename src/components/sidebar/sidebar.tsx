import {
  ArrowIcon,
  AuditIcon,
  DecisionIcon,
  FeesAndPricingIcon,
  FeesIcon,
  GuarantorsIcon,
  HomeIcon,
  KarmaIcon,
  LoanIcon,
  LoanRequestIcon,
  PreferenceIcon,
  ReportIcon,
  SavingsIcon,
  SavingsProductIcon,
  ServiceAccountIcon,
  ServiceIcon,
  SettlementIcon,
  SuitcaseIcon,
  TransactionIcon,
  UsersIcon,
  WhitelistIcon,
} from "../../icons";
import "./sidebar.scss";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

interface NavItem {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const navSections: NavSection[] = [
    {
      title: "",
      items: [{ label: "Dashboard", icon: <HomeIcon /> }],
    },
    {
      title: "CUSTOMERS",
      items: [
        { label: "Users", icon: <UsersIcon /> },
        { label: "Guarantors", icon: <GuarantorsIcon /> },
        { label: "Loans", icon: <LoanIcon /> },
        { label: "Decision Models", icon: <DecisionIcon /> },
        { label: "Savings", icon: <SavingsIcon /> },
        { label: "Loan Requests", icon: <LoanRequestIcon /> },
        { label: "Whitelist", icon: <WhitelistIcon /> },
        { label: "Karma", icon: <KarmaIcon /> },
      ],
    },
    {
      title: "BUSINESSES",
      items: [
        { label: "Organization", icon: <SuitcaseIcon /> },
        { label: "Loan Products", icon: <LoanRequestIcon /> },
        { label: "Savings Products", icon: <SavingsProductIcon /> },
        { label: "Fees and Charges", icon: <FeesIcon /> },
        { label: "Transactions", icon: <TransactionIcon /> },
        { label: "Services", icon: <ServiceIcon /> },
        { label: "Service Account", icon: <ServiceAccountIcon /> },
        { label: "Settlements", icon: <SettlementIcon /> },
        { label: "Reports", icon: <ReportIcon /> },
      ],
    },
    {
      title: "SETTINGS",
      items: [
        { label: "Preferences", icon: <PreferenceIcon /> },
        { label: "Fees and Pricing", icon: <FeesAndPricingIcon /> },
        { label: "Audit Logs", icon: <AuditIcon /> },
      ],
    },
  ];
  return (
    // <aside className={styles.sidebar}>
    //   <p>switch organization</p>
    //   <label>CUSTOMERS</label>
    //   <div className={styles.menuList}>
    //     {customerIcons.map((item) => (
    //       <MenuItem key={item.label} label={item.label} icon={item.icon} />
    //     ))}
    //   </div>
    // </aside>
    <>
      <div
        className={`sidebar-overlay ${isOpen ? "active" : ""}`}
        onClick={toggleSidebar}
      ></div>
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <div className="org-switcher">
            <SuitcaseIcon />
            <span>Switch Organization</span>
            <ArrowIcon />
          </div>
        </div>

        <nav className="sidebar-nav">
          {navSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="nav-section">
              {section.title && (
                <h3 className="section-title">{section.title}</h3>
              )}
              <ul className="nav-items">
                {section.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className={`nav-item ${item.active ? "active" : ""}`}
                  >
                    <a href="#" className="nav-link">
                      <span className="icon">{item.icon}</span>
                      <span className="label">{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
