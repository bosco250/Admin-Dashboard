import React, { useState } from "react";
import DashboardBox from "./Components/DashboardBox";
import { FaEye, FaPencilAlt, FaUserCircle } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { MdDelete, MdShoppingBag } from "react-icons/md";
import { GiStarsStack } from "react-icons/gi";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { HiDotsVertical } from "react-icons/hi";
import { IoTimerOutline } from "react-icons/io5";
import Chart from "react-google-charts";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from "@mui/material";
import Image from '../../assets/userImg.jpg'
import Pagination from '@mui/material/Pagination';

function Dashboard() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showBy, setShowBy] = React.useState('');  
  const [category, setCatBy] = React.useState('');

  


  const data = [
    ["Year", "Sales", "Expenses"],
    ["2013", 1000, 400],
    ["2014", 1170, 460],
    ["2015", 660, 1120],
    ["2016", 1030, 540],
  ];
  const options = {
    hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
    vAxis: { minValue: 0 },
    chartArea: { width: "100%", height: "80%" },
    backgroundColor: 'transparent'
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div className="right-content w-100">
        <div className="row dashboardBoxWrapperRow">
          <div className="col-md-8">
            <div className="dashboardBoxWrapper d-flex">
              <DashboardBox
                color={["#1da256", "#48d483"]}
                icon={<FaUserCircle />}
                grow={true}
              />
              <DashboardBox
                color={["#c012e2", "#eb64fe"]}
                icon={<IoMdCart />}
              />
              <DashboardBox
                color={["#2c78e5", "#60aff5"]}
                icon={<MdShoppingBag />}
              />
              <DashboardBox
                color={["#e1950e", "#f3cd29"]}
                icon={<GiStarsStack />}
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className="box">
              <div className="d-flex w-100 align-items-center bottomEle justify-content-space-between">
                <h6 className="text-white mb-0 mt-0"> Total Sales </h6>
                <div className="ml-auto">
                  <span className="ml-auto toggleIcon" onClick={handleClick}>
                    {" "}
                    <HiDotsVertical />{" "}
                  </span>
                  <Menu
                    id="long-menu"
                    MenuListProps={{
                      "aria-labelledby": "long-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    slotProps={{
                      paper: {
                        style: {
                          // maxHeight: ITEM_HEIGHT * 4.5,
                          width: "20ch",
                        },
                      },
                    }}
                  >
                    <MenuItem onClick={handleClose}>
                      <span
                        className="menu-icon"
                        style={{ marginRight: "5px" }}
                      >
                        <IoTimerOutline />{" "}
                      </span>
                      Last Day
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <span
                        className="menu-icon"
                        style={{ marginRight: "5px" }}
                      >
                        <IoTimerOutline />{" "}
                      </span>
                      Last Week
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <span
                        className="menu-icon"
                        style={{ marginRight: "5px" }}
                      >
                        <IoTimerOutline />{" "}
                      </span>
                      Last Month
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <span
                        className="menu-icon"
                        style={{ marginRight: "5px" }}
                      >
                        <IoTimerOutline />{" "}
                      </span>
                      Last Year
                    </MenuItem>
                  </Menu>
                </div>
              </div>
              <h3 className="text-white font-weight-bold margin-top-5">$3,787,681.00</h3>
              <p>$3,578.90 in last month </p>

              <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"170px"}
              />
            </div>
          </div>
        </div>
        <div className="card shadow border-0 p-3">
          <h3 className="hd">Best Selling Products</h3>

          <div className="row cardFilters mt-3">
            <div className="col-md-3">
              <h4>SHOW BY</h4>
              <FormControl className="w-100"  size="small">
              <Select
                value={showBy}
                onChange={(e)=>setShowBy(e.target.value)}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                className="w-100"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              </FormControl>
            </div>
            <div className="col-md-3">
              <h4>CATEGORY BY</h4>
              <FormControl className="w-100"  size="small">
              <Select
                value={category}
                onChange={(e)=>setCatBy(e.target.value)}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                className="w-100"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              </FormControl>
            </div>
          </div>

          <div className="table-responsive mt-3">
            <table className="table table-bordered v-align">
              <thead className="thead-dark" >
                <tr>
                  <th>UID</th>
                  <th>PRODUCTS</th>
                  <th>CATEGORY</th>
                  <th>BRAND</th>
                  <th>PRICE</th>
                  <th>STOCK</th>
                  <th>RATING</th>
                  <th>ORDER</th>
                  <th>SALES</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center  productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100" alt="Product"  />
                        </div>
                      </div>
                      <div className="info">
                        <h6>Tops and skirt set for Female...</h6>
                        <p>Women's executive summer Tops and shirt set for female Top and skit set</p>
                      </div>
                    </div>
                   </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <div className="" style={{width:'70px'}}>
                      <span className="old">$21.00</span>
                      <span className="new text-danger">$19.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary"> <FaEye/> </Button>
                      <Button className="success" color="success" > <FaPencilAlt/> </Button>
                      <Button className="error" color="error"> <MdDelete/> </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center  productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100" alt="Product"  />
                        </div>
                      </div>
                      <div className="info">
                        <h6>Tops and skirt set for Female...</h6>
                        <p>Women's executive summer Tops and shirt set for female Top and skit set</p>
                      </div>
                    </div>
                   </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <div className="" style={{width:'70px'}}>
                      <span className="old">$21.00</span>
                      <span className="new text-danger">$19.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary"> <FaEye/> </Button>
                      <Button className="success" color="success" > <FaPencilAlt/> </Button>
                      <Button className="error" color="error"> <MdDelete/> </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center  productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100" alt="Product"  />
                        </div>
                      </div>
                      <div className="info">
                        <h6>Tops and skirt set for Female...</h6>
                        <p>Women's executive summer Tops and shirt set for female Top and skit set</p>
                      </div>
                    </div>
                   </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <div className="" style={{width:'70px'}}>
                      <span className="old">$21.00</span>
                      <span className="new text-danger">$19.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary"> <FaEye/> </Button>
                      <Button className="success" color="success" > <FaPencilAlt/> </Button>
                      <Button className="error" color="error"> <MdDelete/> </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center  productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100" alt="Product"  />
                        </div>
                      </div>
                      <div className="info">
                        <h6>Tops and skirt set for Female...</h6>
                        <p>Women's executive summer Tops and shirt set for female Top and skit set</p>
                      </div>
                    </div>
                   </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <div className="" style={{width:'70px'}}>
                      <span className="old">$21.00</span>
                      <span className="new text-danger">$19.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary"> <FaEye/> </Button>
                      <Button className="success" color="success" > <FaPencilAlt/> </Button>
                      <Button className="error" color="error"> <MdDelete/> </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center  productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100" alt="Product"  />
                        </div>
                      </div>
                      <div className="info">
                        <h6>Tops and skirt set for Female...</h6>
                        <p>Women's executive summer Tops and shirt set for female Top and skit set</p>
                      </div>
                    </div>
                   </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <div className="" style={{width:'70px'}}>
                      <span className="old">$21.00</span>
                      <span className="new text-danger">$19.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary"> <FaEye/> </Button>
                      <Button className="success" color="success" > <FaPencilAlt/> </Button>
                      <Button className="error" color="error"> <MdDelete/> </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center  productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100" alt="Product"  />
                        </div>
                      </div>
                      <div className="info">
                        <h6>Tops and skirt set for Female...</h6>
                        <p>Women's executive summer Tops and shirt set for female Top and skit set</p>
                      </div>
                    </div>
                   </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <div className="" style={{width:'70px'}}>
                      <span className="old">$21.00</span>
                      <span className="new text-danger">$19.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary"> <FaEye/> </Button>
                      <Button className="success" color="success" > <FaPencilAlt/> </Button>
                      <Button className="error" color="error"> <MdDelete/> </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center  productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100" alt="Product"  />
                        </div>
                      </div>
                      <div className="info">
                        <h6>Tops and skirt set for Female...</h6>
                        <p>Women's executive summer Tops and shirt set for female Top and skit set</p>
                      </div>
                    </div>
                   </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <div className="" style={{width:'70px'}}>
                      <span className="old">$21.00</span>
                      <span className="new text-danger">$19.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary"> <FaEye/> </Button>
                      <Button className="success" color="success" > <FaPencilAlt/> </Button>
                      <Button className="error" color="error"> <MdDelete/> </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center  productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100" alt="Product"  />
                        </div>
                      </div>
                      <div className="info">
                        <h6>Tops and skirt set for Female...</h6>
                        <p>Women's executive summer Tops and shirt set for female Top and skit set</p>
                      </div>
                    </div>
                   </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <div className="" style={{width:'70px'}}>
                      <span className="old">$21.00</span>
                      <span className="new text-danger">$19.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary"> <FaEye/> </Button>
                      <Button className="success" color="success" > <FaPencilAlt/> </Button>
                      <Button className="error" color="error"> <MdDelete/> </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center  productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100" alt="Product"  />
                        </div>
                      </div>
                      <div className="info">
                        <h6>Tops and skirt set for Female...</h6>
                        <p>Women's executive summer Tops and shirt set for female Top and skit set</p>
                      </div>
                    </div>
                   </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <div className="" style={{width:'70px'}}>
                      <span className="old">$21.00</span>
                      <span className="new text-danger">$19.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary"> <FaEye/> </Button>
                      <Button className="success" color="success" > <FaPencilAlt/> </Button>
                      <Button className="error" color="error"> <MdDelete/> </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center  productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100" alt="Product"  />
                        </div>
                      </div>
                      <div className="info">
                        <h6>Tops and skirt set for Female...</h6>
                        <p>Women's executive summer Tops and shirt set for female Top and skit set</p>
                      </div>
                    </div>
                   </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <div className="" style={{width:'70px'}}>
                      <span className="old">$21.00</span>
                      <span className="new text-danger">$19.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary"> <FaEye/> </Button>
                      <Button className="success" color="success" > <FaPencilAlt/> </Button>
                      <Button className="error" color="error"> <MdDelete/> </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center  productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100" alt="Product"  />
                        </div>
                      </div>
                      <div className="info">
                        <h6>Tops and skirt set for Female...</h6>
                        <p>Women's executive summer Tops and shirt set for female Top and skit set</p>
                      </div>
                    </div>
                   </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <div className="" style={{width:'70px'}}>
                      <span className="old">$21.00</span>
                      <span className="new text-danger">$19.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary"> <FaEye/> </Button>
                      <Button className="success" color="success" > <FaPencilAlt/> </Button>
                      <Button className="error" color="error"> <MdDelete/> </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center  productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100" alt="Product"  />
                        </div>
                      </div>
                      <div className="info">
                        <h6>Tops and skirt set for Female...</h6>
                        <p>Women's executive summer Tops and shirt set for female Top and skit set</p>
                      </div>
                    </div>
                   </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <div className="" style={{width:'70px'}}>
                      <span className="old">$21.00</span>
                      <span className="new text-danger">$19.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary"> <FaEye/> </Button>
                      <Button className="success" color="success" > <FaPencilAlt/> </Button>
                      <Button className="error" color="error"> <MdDelete/> </Button>
                    </div>
                  </td>
                </tr>

              </tbody>
            </table>
            <div className="d-flex tableFooter">
            <Pagination count={10} color="primary" showFirstButton showLastButton className="pagination"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
