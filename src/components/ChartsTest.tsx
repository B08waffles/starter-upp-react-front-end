import {faChartBar, faChartSimple} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {useEffect, useState} from 'react';
import {Container} from 'react-bootstrap';
import {VictoryAxis, VictoryBar, VictoryChart, VictoryStack, VictoryTheme} from 'victory';
import TransactionDataService from '../services/transaction';
import LoadingSpinner from './LoadingSpinner';

export default function ChartsTest() {
  const [transactions, setTransactions] = useState([]);

  const [transactions3, setTransactions3] = useState([]);

  const [transactions4, setTransactions4] = useState([]);

  const user = localStorage.getItem('user');

  const token = localStorage.getItem('token');
  const [isLoading, setIsLoading] = React.useState(false);
  const [lightMode, setLightMode] = React.useState(false);

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
    retrieveTransactions();
  }, [token]);
  useEffect(() => {
    retrieveTransactions2();
  }, [token]);

  const retrieveTransactions = () => {
    setIsLoading(true);

    TransactionDataService.getMyTransactionsMI(token, user)
      .then((response) => {
        //console.table(response.data)
        setTransactions(response.data);
        setTransactions3(response.data);

        console.table(transactions);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
      });
  };

  const retrieveTransactions2 = () => {
    setIsLoading(true);

    TransactionDataService.getMyTransactionsHW(token, user)
      .then((response) => {
        setTransactions4(response.data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
      });
  };

  const resultMI = [];
  transactions3.reduce(function (res, value) {
    if (!res[value.associated_company]) {
      res[value.associated_company] = {
        associated_company: value.associated_company,
        amount: 0,
      };
      resultMI.push(res[value.associated_company]);
    }
    res[value.associated_company].amount += value.amount;
    return res;
  }, {});

  const resultHW = [];
  transactions4.reduce(function (res, value) {
    if (!res[value.associated_company]) {
      res[value.associated_company] = {
        associated_company: value.associated_company,
        amount: 0,
      };
      resultHW.push(res[value.associated_company]); // pushing data to the existing array
    }
    res[value.associated_company].amount += value.amount;
    return res;
  }, {});

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {lightMode ? (
            <h2 className="text-center">
              Sorry, this feature doesn't work with the alternative theme selected, please switch to the default theme
              to view this page. Our developers are working around the clock to fix this issue.
            </h2>
          ) : (
            <Container className="chartsmate">
              <h1 className="text-center">
                {' '}
                <FontAwesomeIcon icon={faChartBar} /> My Transactions Chart
              </h1>
              <h4 className="text-center">Based on Money Invested</h4>
              <VictoryChart domainPadding={{x: 30}} theme={VictoryTheme.material} width={450} height={300}>
                <VictoryBar
                  data={resultMI}
                  x="associated_company"
                  y="amount"
                  animate={{
                    duration: 2000,
                    onLoad: {duration: 1000}
                    
                  }}
                  style={{
                    data: {
                      fill: '#c43a31',
                      width: 25,
                    },
                  }}
                  labels={({datum}) => `$${datum.amount}`}
                />

                <VictoryAxis label="Companies" style={{axisLabel: {padding: 0}}} />
                <VictoryAxis
                  dependentAxis
                  label="Money Invested"
                  style={{axisLabel: {padding: 0}}}
                  tickFormat={(x) => `$${x / 1000}k`}
                />
                <VictoryStack colorScale={'warm'} />
              </VictoryChart>

              <br />

              <h1 className="text-center">
                <FontAwesomeIcon icon={faChartSimple} /> My Transactions Chart
              </h1>
              <h4 className="text-center">Based on Hours Worked</h4>
              <VictoryChart domainPadding={{x: 30}} theme={VictoryTheme.material} width={450} height={300}>
                <VictoryBar
                  data={resultHW}
                  x="associated_company"
                  y="amount"
                  animate={{
                    duration: 2000,
                    onLoad: {duration: 1000},
                  }}
                  style={{
                    data: {
                      fill: '#c43a31',
                      width: 25,
                    },
                  }}
                  labels={({datum}) => `${datum.amount} Hours`}
                />

                <VictoryAxis label="Companies" style={{axisLabel: {padding: 0}}} />
                <VictoryAxis
                  dependentAxis
                  label="Hours worked"
                  style={{axisLabel: {padding: 0}}}
                  tickFormat={(x) => `${x} H`}
                />
                <VictoryStack colorScale={'warm'} />
              </VictoryChart>
            </Container>
          )}
        </>
      )}
    </>
  );
}
