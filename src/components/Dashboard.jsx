import LeftPart from "./LeftPart";
import RightPart from "./RightPart";
const Dashboard = () => {
  return (
    <>

    {/* Responsive Dashboard */}
    <div className="bg-[#EBF5FF] -mt-10 pt-5">
        <div className="xl:flex xl:justify-between">
            <div className="xl:w-1/4 hidden xl:block mt-5">
                <LeftPart />
            </div>
            <div className="xl:w-3/4">
                <div>
                <RightPart />
                </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
