<ul className="menu p-4 w-80 bg-base-100 text-base-content">
{isBuyer && (
  <>
    <li>
      <Link to="/dashboard/myorders">My Orders</Link>
    </li>
  </>
)}

{isSeller && (
  <>
    <li>
      <Link to="/dashboard/addproduct">Add a profile</Link>
    </li>
    <li>
      <Link to="/dashboard/addkazi">Add a Kazi</Link>
    </li>
    <li>
      <Link to="/dashboard/addagent">Add an agent</Link>
    </li>
    <li>
      <Link to="/dashboard/addlawyer">Add a Lawyer</Link>
    </li>
    <li>
      <Link to="/dashboard/additem">Add an Item</Link>
    </li>
    <li>
      <Link to="/dashboard/myproduct">My Product</Link>
    </li>
    <li>
      <Link to="/dashboard/allsellers">All Sellers</Link>
    </li>
    <li>
      <Link to="/dashboard/allbuyers">All Buyers</Link>
    </li>
  </>
)}

{/* {isAdmin && (
  <>
    {" "}
    <li>
      <Link to="/dashboard/allsellers">All Sellers</Link>
    </li>
    <li>
      <Link to="/dashboard/allbuyers">All Buyers</Link>
    </li>
  </>
)} */}
</ul>