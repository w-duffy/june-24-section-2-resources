import { Outlet } from "react-router-dom";
function Stocks() {
  return (
    <div className='comp orange'>
      <h1>Stocks Component</h1>
      <Outlet />
    </div>
  );
}

export default Stocks;
