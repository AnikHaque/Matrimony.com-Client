import React from "react";
import '../../layout/DashBoardLayout.css';
const DashBoard = () => {
  return <div>
    <div class="main-content6">
        
        <header>
            <div class="header-content6">
                <label for="menu-toggle6">
                    <span class="las la-bars"></span>
                </label>
                
                <div class="header-menu6">
                    <label for="">
                        <span class="las la-search"></span>
                    </label>
                    
                    <div class="notify-icon6">
                        <span class="las la-envelope"></span>
                        <span class="notify6">4</span>
                    </div>
                    
                    <div class="notify-icon6">
                        <span class="las la-bell"></span>
                        <span class="notify6">3</span>
                    </div>
                    
                    <div class="user6">
                        <div class="bg-img6"></div>
                        
                        <span class="las la-power-off"></span>
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        </header>
        
        
        <main>
            
            <div class="page-header6">
                <h1>Dashboard</h1>
                <small>Home / Dashboard</small>
            </div>
            
            <div class="page-content6">
            
                <div class="analytics6">
        
                    <div class="card6">
                        <div class="card-head6">
                            <h2>107,200</h2>
                            <span class="las la-user-friends"></span>
                        </div>
                        <div class="card-progress6">
                            <small>User activity this month</small>
                            <div class="card-indicator6">
                                <div class="indicator one6"></div>
                            </div>
                        </div>
                    </div>
        
                    <div class="card6">
                        <div class="card-head6">
                            <h2>340,230</h2>
                            <span class="las la-eye"></span>
                        </div>
                        <div class="card-progress6">
                            <small>Page views</small>
                            <div class="card-indicator6">
                                <div class="indicator6 two"></div>
                            </div>
                        </div>
                    </div>
        
                    <div class="card6">
                        <div class="card-head6">
                            <h2>$653,200</h2>
                            <span class="las la-shopping-cart"></span>
                        </div>
                        <div class="card-progress6">
                            <small>Monthly revenue growth</small>
                            <div class="card-indicator6">
                                <div class="indicator6 three"></div>
                            </div>
                        </div>
                    </div>
        
                    <div class="card6">
                        <div class="card-head6">
                            <h2>47,500</h2>
                            <span class="las la-envelope"></span>
                        </div>
                        <div class="card-progress6">
                            <small>New E-mails received</small>
                            <div class="card-indicator6">
                                <div class="indicator6 four"></div>
                            </div>
                        </div>
                    </div>
        
                </div>
        
        
                <div class="records6 table-responsive6">
        
                    <div class="record-header6">
                        <div class="add6">
                            <span>Entries</span>
                            <select name="" id="">
                                <option value="">ID</option>
                            </select>
                            <button>Add record</button>
                        </div>
        
                        <div class="browse6">
                           <input type="search" placeholder="Search" class="record-search6" />
                            <select name="" id="">
                                <option value="">Status</option>
                            </select>
                        </div>
                    </div>
        
                    <div>
                        <table width="100%">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th><span class="las la-sort"></span> CLIENT</th>
                                    <th><span class="las la-sort"></span> TOTAL</th>
                                    <th><span class="las la-sort"></span> ISSUED DATE</th>
                                    <th><span class="las la-sort"></span> BALANCE</th>
                                    <th><span class="las la-sort"></span> ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>#5033</td>
                                    <td>
                                        <div class="client6">
                                           <div class="client-img6 bg-img6"></div>
                                            <div class="client-info6">
                                                <h4>Andrew Bruno</h4>
                                                <small>bruno@crossover.org</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        $3171
                                    </td>
                                    <td>
                                        19 April, 2022
                                    </td>
                                    <td>
                                        -$205
                                    </td>
                                    <td>
                                        <div class="actions6">
                                            <span class="lab la-telegram-plane"></span>
                                            <span class="las la-eye"></span>
                                            <span class="las la-ellipsis-v"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#5033</td>
                                    <td>
                                        <div class="client6">
                                           <div class="client-img6 bg-img6"></div>
                                            <div class="client-info6">
                                                <h4>Exty Bruno</h4>
                                                <small>exty@crossover.org</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        $3171
                                    </td>
                                    <td>
                                        19 April, 2022
                                    </td>
                                    <td>
                                        -$205
                                    </td>
                                    <td>
                                        <div class="actions6">
                                            <span class="lab la-telegram-plane"></span>
                                            <span class="las la-eye"></span>
                                            <span class="las la-ellipsis-v"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#5033</td>
                                    <td>
                                        <div class="client6">
                                           <div class="client-img6 bg-img6"></div>
                                            <div class="client-info6">
                                                <h4>Exty Bruno</h4>
                                                <small>exty@crossover.org</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        $2171
                                    </td>
                                    <td>
                                        19 April, 2022
                                    </td>
                                    <td>
                                        <span class="paid6">Paid</span>
                                    </td>
                                    <td>
                                        <div class="actions6">
                                            <span class="lab la-telegram-plane"></span>
                                            <span class="las la-eye"></span>
                                            <span class="las la-ellipsis-v"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#5033</td>
                                    <td>
                                        <div class="client6">
                                           <div class="client-img6 bg-img6"></div>
                                            <div class="client-info6">
                                                <h4>Andrew Bruno</h4>
                                                <small>bruno@crossover.org</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        $3171
                                    </td>
                                    <td>
                                        19 April, 2022
                                    </td>
                                    <td>
                                        -$205
                                    </td>
                                    <td>
                                        <div class="actions6">
                                            <span class="lab la-telegram-plane"></span>
                                            <span class="las la-eye"></span>
                                            <span class="las la-ellipsis-v"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#5033</td>
                                    <td>
                                        <div class="client6">
                                           <div class="client-img6 bg-img6"></div>
                                            <div class="client-info6">
                                                <h4>Exty Bruno</h4>
                                                <small>exty@crossover.org</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        $3171
                                    </td>
                                    <td>
                                        19 April, 2022
                                    </td>
                                    <td>
                                        <span class="paid6">Paid</span>
                                    </td>
                                    <td>
                                        <div class="actions6">
                                            <span class="lab la-telegram-plane"></span>
                                            <span class="las la-eye"></span>
                                            <span class="las la-ellipsis-v"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#5033</td>
                                    <td>
                                        <div class="client6">
                                           <div class="client-img6 bg-img6"></div>
                                            <div class="client-info">
                                                <h4>Exty Bruno</h4>
                                                <small>exty@crossover.org</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        $2171
                                    </td>
                                    <td>
                                        19 April, 2022
                                    </td>
                                    <td>
                                        <span class="paid6">Paid</span>
                                    </td>
                                    <td>
                                        <div class="actions6">
                                            <span class="lab la-telegram-plane"></span>
                                            <span class="las la-eye"></span>
                                            <span class="las la-ellipsis-v"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#5033</td>
                                    <td>
                                        <div class="client6">
                                           <div class="client-img6 bg-img6"></div>
                                            <div class="client-info6">
                                                <h4>Andrew Bruno</h4>
                                                <small>bruno@crossover.org</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        $3171
                                    </td>
                                    <td>
                                        19 April, 2022
                                    </td>
                                    <td>
                                        -$205
                                    </td>
                                    <td>
                                        <div class="action6">
                                            <span class="lab la-telegram-plane"></span>
                                            <span class="las la-eye"></span>
                                            <span class="las la-ellipsis-v"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#5033</td>
                                    <td>
                                        <div class="client6">
                                           <div class="client-img6 bg-img6"></div>
                                            <div class="client-info6">
                                                <h4>Exty Bruno</h4>
                                                <small>exty@crossover.org</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        $3171
                                    </td>
                                    <td>
                                        19 April, 2022
                                    </td>
                                    <td>
                                        -$205
                                    </td>
                                    <td>
                                        <div class="actions6">
                                            <span class="lab la-telegram-plane"></span>
                                            <span class="las la-eye"></span>
                                            <span class="las la-ellipsis-v"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#5033</td>
                                    <td>
                                        <div class="client6">
                                           <div class="client-img6 bg-img6"></div>
                                            <div class="client-info6">
                                                <h4>Exty Bruno</h4>
                                                <small>exty@crossover.org</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        $2171
                                    </td>
                                    <td>
                                        19 April, 2022
                                    </td>
                                    <td>
                                        <span class="paid6">Paid</span>
                                    </td>
                                    <td>
                                        <div class="actions6">
                                            <span class="lab la-telegram-plane"></span>
                                            <span class="las la-eye"></span>
                                            <span class="las la-ellipsis-v"></span>
                                        </div>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
        
                </div>
            
            </div>
            
        </main>
        
        </div>
  </div>;
};

export default DashBoard;
