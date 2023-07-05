import "bootstrap/dist/css/bootstrap.min.css";
import { currentdate, currentTime } from "../../utilities/date";
export default function TransactionTable() {
  return (
    <>
      <div className="md:max-w-full lg:ml-0.5 md:ml-2 text-base">
        <div className="overflow-x-scroll ml-2 md:ml-4 pb-10 lg:overflow-x-hidden">
          <table className="border-collapse border-spacing-0 w-full border">
            <thead>
              <tr className="capitalize  ">
                <th className="">invoice ID</th>
                <th>transaction type</th>
                <th>date/Time</th>
                <th>Amount</th>
                <th>status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rp1012345</td>
                <td>Nepa bill</td>
                <td className="flex flex-col ">
                  <p className="-mb-2">{currentdate}</p>
                  <p>{currentTime}</p>
                </td>
                <td className="">30,000</td>
                <td className="text-[green] font-semi">Successful</td>
              </tr>
              <tr>
                <td>Rp1012345</td>
                <td>cable TV</td>
                <td className="flex flex-col ">
                  <p className="-mb-2">{currentdate}</p>
                  <p>{currentTime}</p>
                </td>
                <td className="">30,000</td>
                <td className="text-[green] font-semi">Successful</td>
              </tr>
              <tr>
                <td>Rp1012345</td>
                <td>Airtime topup</td>
                <td className="flex flex-col ">
                  <p className="-mb-2">{currentdate}</p>
                  <p>{currentTime}</p>
                </td>
                <td className="">30,000</td>
                <td className="text-[green] font-semi">Successful</td>
              </tr>
              <tr>
                <td>Rp1012345</td>
                <td>Nepa bill</td>
                <td className="flex flex-col ">
                  <p className="-mb-2">{currentdate}</p>
                  <p>{currentTime}</p>
                </td>
                <td className="">30,000</td>
                <td className="text-[green] font-semi">Successful</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
