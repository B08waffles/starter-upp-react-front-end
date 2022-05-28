import {on} from 'events';
import React, {useEffect, useState} from 'react';
import {VictoryContainer, VictoryPie, VictoryTheme, VictoryZoomContainer} from 'victory';
import TransactionDataService from '../services/transaction';
import CompanyDataService from '../services/company';
import LoadingSpinner from './LoadingSpinner';
import {DropdownButton, Dropdown, Container, Table} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChartPie, faQuestionCircle, faRotateLeft} from '@fortawesome/free-solid-svg-icons';
import PayrateDataService from '../services/payrate';
import next from 'next';

export default function EndTimes() {
  const token = localStorage.getItem('token');
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [sumResult, setSums] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [associated_company_id, setACI] = useState('Mitsubishi');
  const [endAngle, setEndAngle] = useState(0);
  const [lightMode, setLightMode] = React.useState(false);
  const [totals, setTotals] = React.useState(0);
  const [payrates, setPayrates] = React.useState([]);
  React.useEffect(() => {
    const json = localStorage.getItem('site-light-mode');
    const currentMode = JSON.parse(json);
    if (currentMode) {
      setLightMode(true);
    } else {
      setLightMode(false);
    }
  }, []);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setEndAngle(360);
    }, 10);
    setIsLoading(false);
  }, [sumResult]);
  useEffect(() => {
    retrievePieData();
    retrievePayrates();
  }, [token, associated_company_id]);

  useEffect(() => {
    retrieveCompanies();
  }, [token]);

  const retrieveCompanies = () => {
    setIsLoading(true);
    CompanyDataService.getAll(token)
      .then((response) => {
        //console.table(response.data)
        setCompanies(response.data);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
      });
  };

  const retrievePieData = () => {
    setIsLoading(true);
    TransactionDataService.getAllForCompany(token, associated_company_id)
      .then((response) => {
        //console.table(response.data)
        setTransactions(response.data);
        //        console.table(transactions);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
      });
  };

  const retrievePayrates = () => {
    setTimeout(function pooper() {
      PayrateDataService.getAllForCompany(token, associated_company_id)
        .then((response) => {
          if (response.data.length === 0 || response.data === null) {
            setPayrates([]);
          } else {
            setPayrates(response.data);

            console.log(payrates);
          }
        })
        .catch((e) => {
          console.log(e);
          setIsLoading(false);
        });
    }, 500);
  };
  // useEffect(() => {
  //   prepareData();
  // }, [retrievePieData]);

  useEffect(() => {
    const prepareData = () => {
      setIsLoading(true);
      setSums([]);
      
      var sums = [];
      var potato = 1;
      for (var i = 0; i < transactions.length; i++) {
        var obj = transactions[i];
        if (!sums[obj.associated_user]) {
          sums[obj.associated_user] = {
            index: potato++,
            user: obj.associated_user,
            amount: 0,
            payrate: 25,
          };
          sums.push(sums[obj.associated_user]);
        }
        if (obj.type_of_contribution === 'HW') {
          if (payrates.length === 0 || payrates === null) {
            var rate: any = 25;
            sums[obj.associated_user].amount += obj.amount * rate;
          } else {
            for (var p = 0; p < payrates.length; p++) {
              var pays = payrates[p];
              if (obj.associated_user === pays.associated_user) {
                var rate: any = pays.pay_rate;
                sums[obj.associated_user].payrate = rate;
                break;
              }
            }
            sums[obj.associated_user].amount += obj.amount * rate;
          }
        } else {
          var rate: any = 25
          sums[obj.associated_user].payrate = rate;
          sums[obj.associated_user].amount += obj.amount;
        }
      }
      let potals = 0;
      for (var j = 0; j < sums.length; j++) {
        var treb = sums[j];
        potals += treb.amount;
      }
      setTotals(potals);
      setSums(sums);
      setIsLoading(false);
      setEndAngle(0);
    };
    prepareData();
  }, [payrates]);
  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <aside>
            <a href="/help">
              <FontAwesomeIcon icon={faQuestionCircle} />
            </a>
          </aside>
          <h1 className="text-center">
            <FontAwesomeIcon icon={faChartPie} /> Chart - Company Ownership
          </h1>{' '}
          {/* <p className="text-center">Select a company to view ownership</p> */}
          <>
            {lightMode ? (
              <h2 className="text-center">
                Sorry, this feature doesn't work with the alternative theme selected, please switch to the default theme
                to view this page. Our developers are working around the clock to fix this issue.
              </h2>
            ) : (
              <>
                <DropdownButton
                  title="Select a company"
                  defaultValue="Mitsubishi"
                  onSelect={setACI}
                  className="text-center"
                  style={{minWidth: '22em'}}>
                  {companies.map((company) => {
                    return (
                      <Dropdown.Item defaultValue="Mitsubishi" key={company.id} eventKey={company.company_name}>
                        {company.company_name}
                      </Dropdown.Item>
                    );
                  })}
                </DropdownButton>
                <>
                  <p className="text-center">
                    Total worth of <b>{associated_company_id}</b> is <b>$ {totals}</b>
                  </p>
                </>

                {sumResult.length === 0 ? (
                  <>
                    <h2 className="text-center">Sorry, it appears that the company selected has no transaction data</h2>
                    <p className="text-center">
                      If you would like to see company ownership of this company, please create a transaction for the
                      company
                    </p>
                    <br style={{marginBottom: '35em'}} />{' '}
                  </>
                ) : (
                  <Container fluid id="pieface">
                    <VictoryPie
                      style={{
                        data: {
                          fillOpacity: 0.9,
                          stroke: '#f8f8f8',
                          strokeWidth: 2,
                        },
                        labels: {
                          fill: '#f8f8f8',
                        },
                      }}
                      data={sumResult}
                      x="index"
                      y="amount"
                      theme={VictoryTheme.material}
                      colorScale="cool"
                      // height={250}
                      // width={650}
                      animate={{
                        duration: 2000,
                        easing: 'exp',
                      }}
                      endAngle={endAngle}
                      events={[
                        {
                          target: 'data',
                          eventHandlers: {
                            onClick: () => {
                              return [
                                {
                                  target: 'data',
                                  mutation: ({style}) => {
                                    return style.fill === '#c43a31' ? null : {style: {fill: '#c43a31'}};
                                  },
                                },
                                {
                                  target: 'labels',
                                  mutation: ({datum, text}) => {
                                    return text === `${datum.index}. ${Math.round((datum.amount / totals) * 100)}%`
                                      ? null
                                      : {text: `${datum.index}. ${Math.round((datum.amount / totals) * 100)}%`};
                                  },
                                },
                              ];
                            },
                          },
                        },
                      ]}
                    />
                  </Container>
                )}<small>* if a user has no associated hourly pay rate, $25 per hour is the default</small>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Stakeholder</th>
                      <th>Worth</th>
                      <th>Pay rate</th>
                    </tr>
                  </thead>
                  {sumResult.map((stakeholders) => {
                  
                    return (
                      <>
                        <tbody>
                          <tr>
                            <td>{stakeholders.index}</td>
                            <td>{stakeholders.user}</td>
                            <td>$ {stakeholders.amount}</td>
                            <td>{stakeholders.payrate}</td>
                          </tr>
                        </tbody>
                      </>
                    );
                  })}
                </Table>
              </>
            )}
          </>
        </>
      )}
    </>
  );
}
