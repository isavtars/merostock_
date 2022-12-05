import LeftPart from "./LeftPart";
import RightPart from "./RightPart";
const Dashboard = () => {
  return (
    <>

    {/* Responsive for large Devices */}
      <div className="hidden xl:block bg-[#EBF5FF]">
        <div className="xl:flex xl:justify-between">
            <div className="lg:w-1/4">
                <LeftPart />
            </div>
            <div className="lg:w-3/4">
                <div>
                <RightPart />
                </div>
          </div>
        </div>
      </div>

      {/* Responsive for small devices */}
      <div className="block xl:hidden bg-[#EBF5FF] -mt-10 pt-5">
      <RightPart />
        </div>
    </>
  );
};

export default Dashboard;
