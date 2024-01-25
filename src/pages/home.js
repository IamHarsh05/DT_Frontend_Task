import Navbar from "../Components/Filter/sidebar";
import DashboardTop from "../Components/Header/Dashboard_Top";
import Subjects from "../Components/Cards/Subjects";
import {
  CalendarDaysIcon,
  QuestionMarkCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";

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
          <div className="flex flex-col fixed bottom-10 right-10 ">
            <QuestionMarkCircleIcon className="h-10 w-10 text-blue-500" />
            <UserGroupIcon className="h-10 w-10 text-blue-500" />
            <CalendarDaysIcon className="h-10 w-10 text-blue-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
