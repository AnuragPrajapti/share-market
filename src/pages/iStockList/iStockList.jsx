import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import Chart from 'react-apexcharts'
import { BsList, BsAspectRatio, BsAt, BsBank2 } from "react-icons/bs";
import './iStockList.scss'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const IStockList = () => {

  const [getStockData, setGetStockData] = useState();
  const [chartData, setChartDAta] = useState({
    options: {
      colors : [ "#1ac3de" , "#bd8a0e" ],
      labels: ['Mutual Funds' , 'ETFs'],
      dataLabels: {
        enabled: true,
        enabledOnSeries: undefined,
        formatter: function () {
            return ''
        },
      }
    },
    series: [26, 19],
  })

  useEffect(() => {
    axios.get(`http://localhost:4000/productDetails`,)
      .then((res) => {
        setGetStockData(res.data)
        return res.data
      }).catch((err) => {
        console.log(222, err)
        return err
      })
  }, [])



  return (
    <div className='stock-wrapper-container' >
      <Container>
        <Row>
          <Col lg={10} className="stock-item-list" >
            {
              getStockData ? getStockData.map((value, index) => {
                return (
                  <div className='stock-list' key={index} >
                    <Row>
                      <Col className='script-title' >
                        <BsList className='list-icon' />
                        <p>{value?.scrip}</p>
                        <span>{value?.scriptValue}</span>
                      </Col>

                      <Col className='company-name' >
                        <div className="title-name">
                          <b>iShares <br /><span>is it Protifolio</span></b>
                        </div>
                        <div className='share-name' >
                          <p>{value?.shareName}</p>
                          <span>{value?.share}</span>
                        </div>
                      </Col>

                      <Col className='share-value-rate' >
                        <ul>
                          <li>
                            <p>
                              <BsAspectRatio />
                              Quantity <b>{value?.Quantity}</b></p>
                          </li>
                          <li>
                            <p>
                              <BsAt />
                              {" "}Avg.Cost<b>{value?.AvgCost}</b>
                            </p>
                          </li>
                          <li>
                            <p>
                              <BsBank2 />
                              {" "}Invested Amount <b style={{ marginLeft: "4px" }} >{value?.InvestedAmount}</b>
                            </p>
                          </li>
                        </ul>
                      </Col>

                      <Col className='market-value' >
                        <ul>
                          <li>
                            <p>Market Value  <span>{value?.marketValue}</span></p>
                          </li>
                          <li>
                            <p style={{ fontWeight: "100" }} >% of Portfolio Value <span>{value?.PortfolioValue}</span></p>
                          </li>
                          <li>
                            <Slider 
                              min={0}
                              trackStyle={{ backgroundColor: "#15a215", height: 10 }}
                              railStyle={{
                                backgroundColor: "rgba(25, 25, 25, 0.12)",
                                height: 10,
                              }}
                              dotStyle={{ display: "none" }}
                              handleStyle={{
                                boxShadow:
                                  "0 2px 4px 1px rgba(67, 103, 178, 0.4), 0 1px 1px 0 rgba(25, 25, 25, 0.12)",
                                width: "22px",
                                height: "22px",
                                border: " solid 0.3px rgba(0, 0, 0, 0.5)",
                                opacity: "0",
                              }}
                              defaultValue={value?.defaultValue}
                              max={100}
                            />
                          </li>
                        </ul>
                      </Col>

                      <Col className='profit-loss' >
                        <ul>
                          <li>
                            <p>Unrealized P&L <span>{value?.Unrealized}</span></p>
                          </li>
                          <li>
                            <p style={{ fontWeight : '100' }} >% Return <span>{value?.Return}</span></p>
                          </li>
                          <li>
                          <Slider 
                              min={0}
                              trackStyle={{ backgroundColor: "red", height: 10 }}
                              railStyle={{
                                backgroundColor: "rgba(25, 25, 25, 0.12)",
                                height: 10,
                              }}
                              dotStyle={{ display: "none" }}
                              handleStyle={{
                                boxShadow:
                                  "0 2px 4px 1px rgba(67, 103, 178, 0.4), 0 1px 1px 0 rgba(25, 25, 25, 0.12)",
                                width: "22px",
                                height: "22px",
                                border: " solid 0.3px rgba(0, 0, 0, 0.5)",
                                opacity: "0",
                              }}
                              defaultValue={value?.defaultValue}
                              max={100}
                            />
                          </li>
                        </ul>
                      </Col>
                      <Col className='button-section' >
                        <Button>BUY</Button>
                        <Button>SELL</Button>
                      </Col>
                    </Row>
                  </div>
                )
              }) : null
            }
          </Col>
          <Col lg={2} className="char-wrapper" >
            <div>
              <h3>Portifolio</h3>
              <Chart
                options={chartData.options}
                series={chartData.series}
                type="donut"
                width="300"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default IStockList;