import Navbar from "../Components/Filter/sidebar";
import DashboardTop from "../Components/Header/Dashboard_Top";
import Subjects from "../Components/Cards/Subjects";

export default function Home() {
  return (
    <div className="flex">
      {/* Side Bar */}
      <DashboardTop />
      <div className="flex">
        <div className="md:z-10 md:basis-1/5">
          <Navbar />
        </div>
        <div className="md:basis-4/5">
          {/* Main Dashboard */}
          <Subjects />
        </div>
      </div>
    </div>
  );
}
