import LiveMarkets from "../ui/LiveMarkets";
import ChartVisual from "../ui/ChartVisual";
import TransactionalTable from "../ui/TransactionalTable";
import CardContent from "../ui/CardContent";

function MainContent() {
  return (
    <div className="flex flex-col gap-6 p-4 md:p-6 lg:p-8 overflow-auto">
      {/* Cardcontent */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <CardContent />
      </div>

      {/* Chartvisuals */}
      <div>
        <ChartVisual />
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* LiveMarkets */}
        <div className="lg:w-2/3 w-full">
          <LiveMarkets />
        </div>

        {/*TransactionalTable */}
        <div className="lg:w-1/3 w-full">
          <div className="overflow-auto max-h-[500px]">
            <TransactionalTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
