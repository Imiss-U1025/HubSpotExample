import SendSchedule from "./SendSchedule";
import MenuBar from "../components/MenuBar";
import Header from "../components/Header";

const SendSchedulePage = () => {
  return (
    <>
      <Header />
      <div className="w-full  ">
        <MenuBar />
        <div className="">
          {/* {activeTab === "Automation" && <div>Content for Automation</div>} */}
          <SendSchedule />
          {/* {activeTab === "Edit" && <div>Content for Edit</div>}
        {activeTab === "Settings" && <div>Content for Settings</div>} */}
        </div>
      </div>
    </>
  );
};

export default SendSchedulePage;
