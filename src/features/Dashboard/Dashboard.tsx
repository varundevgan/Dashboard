import Cards from '../../components/Cards/Cards';
import styles from './Dashboard.module.scss'
import { cardsList } from '../../components/Cards/cardsList';
import { GoArrowUpRight } from 'react-icons/go';
import { FaCalendarAlt } from 'react-icons/fa';
import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import CustomCharts from './charts/LineChart';
import BarCharts from './charts/BarChart'
import { BsGraphUpArrow } from "react-icons/bs";
import { FaStopwatch } from "react-icons/fa6";
import CustomLineChart from './charts/LineGraph';



const Dashboard = () => {

  const yearsArray = [
   '2025', '2024', '2023', '2022', '2021', '2020', '2019', '2018'
  ]

  const [year, setYear] = useState('2025')
  const [click, setClicked] = useState(false)

  const showYears = () =>{
    setClicked(prev => !prev)
  }


  const changeDropdown = (year : any) =>{
    setYear(year)
    setClicked(prev => !prev)
  }

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <h2>Welcome back, John</h2>
        <p>Measure your advertising ROI and report website traffic.</p>
      </div>
        <div className={styles.cards}>
          {cardsList.map((card) =>
            <Cards key={card.header} card =  {card} />
          )}
        </div>
      <div className={styles.dashboardContent}>
        <div className={styles.waves}>
          <div className={styles.data}>
            <div className={styles.totalRevenue}>
              <div className={styles.revenue}>
                <p>Total Revenue</p>
              </div>
              <div className={styles.totalMoney}>
                <h2>$240.8K</h2>
                  <div className={styles.profitOrLoss}>
                    <p>24.6%</p>
                    <GoArrowUpRight />
                  </div>
              </div>
            </div>
            <div className={styles.expenses}>
              <div className={styles.revenueExpense}>
              <div className={styles.circlePink}></div><p>Revenue</p>
              </div>
              <div className={styles.revenueExpense}>
              <div className={styles.circleBlue}></div><p>Expenses</p>
              </div>
              <div  className={styles.calendar}>
                  <div onClick={showYears} className={styles.date}>
                    <div className={styles.year}>
                      <FaCalendarAlt />
                      <span>Jan {year} - Dec {year}</span>
                    </div>
                    <div className={styles.dropdown}>
                      <IoIosArrowDown /> 
                    </div>
                  </div>
                    {click && (
                      <div className={styles.dropdownMade}>
                        <div className={styles.scrolldropdown}>
                          {yearsArray.map((years)=>{
                            return(
                              <div key={years} className={styles.mainYearSpan}>
                                <span  onClick={()=>changeDropdown(years)} className={`${styles.yearSpan} ${years === year ? styles.selectedYear : '' }`}>Jan {years} - Dec {years}
                                  {year === years && <span className={styles.tick} >✓</span>}
                                </span>
                              </div>
                              
                            )
                          })}                    
                        </div>
                      </div>
                    )}
              </div>
            </div>
          </div>
          <div className={styles.chart}>
            <CustomCharts />
          </div>
        </div>
        <div className={styles.graph}>
          <div className={styles.upperGraph}>
            <div className={styles.totalProfit}>
                <div className={styles.head}>
                  <BsGraphUpArrow/>
                  <p>Total Profit</p>
                </div>
                <div className={styles.totalMoney}>
                  <div className={styles.money}>
                    <h2>$144.6K</h2>
                  </div>
                  <div className={styles.profit}>
                    <p>28.5%</p>
                    <GoArrowUpRight />
                  </div>
                </div>
            </div>
            <div className={styles.bargraph}>
              <BarCharts />
            </div>
            <div className={styles.lastSeen}>
              <p>Last 12 months</p>
            </div>
          </div>
          <div className={styles.lowerGraph}>
            <div className={styles.totalProfit}>
                <div className={styles.head}>
                  <FaStopwatch/>
                  <p>Total Sessions</p>
                </div>
                <div className={styles.totalMoney}>
                  <div className={styles.money}>
                    <h2>400</h2>
                  </div>
                  <div className={styles.profit}>
                    <p>16.5%</p>
                    <GoArrowUpRight />
                  </div>
                </div>
            </div>
            <div className={styles.bargraph}>
              <CustomLineChart />
            </div>
            <div className={styles.lastSeen}>
              <div className={styles.visitors}>
                <p>Live</p>
                <span>10k visitors</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
