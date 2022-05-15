import {on} from 'events';
import React, {useEffect, useState} from 'react';
import {VictoryPie, VictoryTheme} from 'victory';
import TransactionDataService from '../services/transaction';
import CompanyDataService from '../services/company';
import LoadingSpinner from './LoadingSpinner';
import {DropdownButton, Dropdown} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChartPie} from '@fortawesome/free-solid-svg-icons';

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
    setTimeout(() => {
      setEndAngle(360);
    }, 100);
  }, [sumResult]);
  useEffect(() => {
    retrievePieData();
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

        setIsLoading(false);
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

        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
      });
  };

  /*useEffect(() => {
    prepareData();
  }, [retrievePieData]);*/

  useEffect(() => {
    const prepareData = () => {
      var sums = [];
      for (var i = 0; i < transactions.length; i++) {
        var obj = transactions[i];
        if (!sums[obj.associated_user]) {
          sums[obj.associated_user] = {
            user: obj.associated_user,
            amount: 0,
          };
          sums.push(sums[obj.associated_user]);
        }
        if (obj.type_of_contribution === 'HW') {
          sums[obj.associated_user].amount += obj.amount * 30;
        } else {
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
      setEndAngle(0);
    };

    prepareData();
  }, [transactions]);
  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <h1 className="text-center">
            <FontAwesomeIcon icon={faChartPie} /> Chart - Company Ownership
          </h1>{' '}
          <p className="text-center">Select a company to view ownership</p>
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
                  <p className="text-right">
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
                  <VictoryPie
                    style={{
                      data: {
                        fillOpacity: 0.9,
                        stroke: '#03dac5',
                        strokeWidth: 2,
                      },
                      labels: {
                        fontSize: 10.5,
                        fill: '#03dac5',
                      },
                    }}
                    data={sumResult}
                    x="user"
                    y="amount"
                    theme={VictoryTheme.material}
                    colorScale="blue"
                    height={250}
                    width={450}
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
                                  return text === `${datum.user} ${Math.round((datum.amount / totals) * 100)}%`
                                    ? null
                                    : {text: `${datum.user} ${Math.round((datum.amount / totals) * 100)}%`};
                                },
                              },
                            ];
                          },
                        },
                      },
                    ]}
                  />
                )}
                <br style={{marginBottom: '16em'}} />
              </>
            )}
          </>
        </>
      )}
    </>
  );
}
