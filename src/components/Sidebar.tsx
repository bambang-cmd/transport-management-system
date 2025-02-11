
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  FileText,
  CreditCard,
  CalendarDays,
  Map,
  DollarSign,
  Truck,
  Car,
  UserCircle,
  Menu,
} from "lucide-react";

const adminMenuItems = [
  { path: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { path: "/users", icon: Users, label: "Users" },
  { path: "/reports", icon: FileText, label: "Reports" },
  { path: "/invoices", icon: CreditCard, label: "Invoices" },
  { path: "/orders", icon: FileText, label: "Orders" },
  { path: "/schedule", icon: CalendarDays, label: "Schedule" },
  { path: "/routes", icon: Map, label: "Routes" },
  { path: "/tariffs", icon: DollarSign, label: "Tariffs" },
  { path: "/drivers", icon: UserCircle, label: "Drivers" },
  { path: "/fleet", icon: Truck, label: "Fleet" },
  { path: "/customers", icon: Users, label: "Customers" },
];

const customerMenuItems = [
  { path: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { path: "/invoices", icon: CreditCard, label: "Invoices" },
  { path: "/orders", icon: FileText, label: "Orders" },
  { path: "/schedule", icon: CalendarDays, label: "Schedule" },
];

const driverMenuItems = [
  { path: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { path: "/orders", icon: FileText, label: "Orders" },
  { path: "/schedule", icon: CalendarDays, label: "Schedule" },
  { path: "/fleet", icon: Truck, label: "Fleet" },
];

interface SidebarProps {
  role?: "admin" | "customer" | "driver";
}

const Sidebar = ({ role = "admin" }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const menuItems = role === "admin" 
    ? adminMenuItems 
    : role === "customer" 
    ? customerMenuItems 
    : driverMenuItems;

  return (
    <div
      className={`glass-panel min-h-screen transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="p-4 flex justify-between items-center">
          {!isCollapsed && (
            <h1 className="text-xl font-semibold">TMS</h1>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Menu size={20} />
          </button>
        </div>
        
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-secondary"
                    }`
                  }
                >
                  <item.icon size={20} />
                  {!isCollapsed && <span>{item.label}</span>}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
