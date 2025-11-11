import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { Statistic } from "./components/Statistic";
import LiveMarket from "./components/LiveMarket";
import CardContent1 from "./components/CardContent1";
import CardContent2 from "./components/CardContent2";
import CardContent3 from "./components/CardContent3";
import CardContent4 from "./components/CardContent4";
import { Transaction } from "./components/Transaction";

function App() {
  return (
    <div className="flex h-screen overflow-hidden bg-white">
      {/* {/* Sidebar - Fixed *- add responsiveness/} */}
      <aside className=" hidden md:flex md:w-64 lg:w-[263px] flex-shrink-0 bg-white border-r border-gray-200 md:static fixed inset-y-0 z-50">
        <Sidebar />
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* Header - Fixed at top */}
        <header className=" flex-shrink-0 px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6border-b border-gray-200
            bg-white sticky top-0 z-40">
          <Header />
        </header>

 C       {/* Scrollable Content */}
        <main className="flex-1 px-4 sm:px-6 md:px-8 py-6 sm:py-8 overflow-x-hidden overflow-y-auto">

          {/* Top Section - Crypto Cards and Chart */}
          <div className="grid gap-6 mb-6
              grid-cols-1
              lg:grid-cols-2
              items-start">
            {/* Left: 2x2 Grid of Crypto Cards */}
            <div className="  grid gap-6
                grid-cols-1 sm:grid-cols-2
                lg:col-span-1
                auto-rows-fr">
              <CardContent4 />
              <CardContent3 />
              <CardContent2/>
              <CardContent1/>
            </div>

            {/* Right: BTC Prices Chart */}
            <div className="h-full lg:col-span-1">
              <Statistic />
            </div>
          </div>

          {/* Bottom Section - Live Market and Transactions */}
          <div className="grid gap-6
              grid-cols-1
              lg:grid-cols-3
              items-start
            ">
            {/* Live Market - Takes 2 columns */}
            <div className="h-full lg:col-span-2">
              <LiveMarket />
            </div>

            {/* Transaction - Takes 1 column */}
            <div className="h-full lg:col-span-1">
              <Transaction />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
