import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
import AccountOperations from "./features/account/AccountOperations";
import BalanceDisplay from "./features/account/BalanceDisplay";
import { useSelector } from "react-redux";

function App() {
 const fullName = useSelector((state) => state.customer.fullName)
  return (
    <div>
      <h1>Bank</h1>
      {fullName === "" ? (<CreateCustomer />) :
(
<>
<Customer />
<AccountOperations />
<BalanceDisplay />
</>
)
    }
    </div>
  );
}

export default App;
