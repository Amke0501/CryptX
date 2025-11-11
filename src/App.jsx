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
      {/* Sidebar - Fixed */}
      <aside className="w-[263px] flex-shrink-0">
        <Sidebar />
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* Header - Fixed at top */}
        <header className="flex-shrink-0 px-8 py-6 border-b border-gray-200">
          <Header />
        </header>

 C       {/* Scrollable Content */}
        <main className="flex-1 px-8 py-8 overflow-x-hidden overflow-y-auto">
          {/* Top Section - Crypto Cards and Chart */}
          <div className="grid items-start grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
            {/* Left: 2x2 Grid of Crypto Cards */}
            <div className="grid grid-cols-1 gap-6 lg:col-span-1 md:grid-cols-2 auto-rows-fr">
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
          <div className="grid items-start grid-cols-1 gap-6 lg:grid-cols-3">
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
