import React, {useState, useEffect} from 'react';
import CompanyDataService from '../services/company';
import {Card, Button, ListGroupItem, Alert} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import moment from 'moment';
import LoadingSpinner from './LoadingSpinner';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faCalendarCheck,
  faListAlt,
  faQuestionCircle,
  faSchool,
  faSchoolCircleCheck,
} from '@fortawesome/free-solid-svg-icons';

const CompanyList = (props: {token: string}) => {
  const [companies, setCompanies] = useState([]);
  const token = localStorage.getItem('token');
  const [isLoading, setIsLoading] = React.useState(false);
  const logcheck = localStorage.getItem('user');
  useEffect(() => {
    retrieveCompanies();
  }, [props.token]);

  const retrieveCompanies = () => {
    setIsLoading(true);
    CompanyDataService.getAll(token)
      .then((response) => {
        //console.table(response.data)
        setCompanies(response.data);
        console.table(companies);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
      });
  };
  return (
    <><aside><a href = "/help"><FontAwesomeIcon icon={faQuestionCircle}/></a></aside>
      <h1 className="text-center">
        <FontAwesomeIcon icon={faListAlt} /> All Companies
      </h1>
      <br />
      {logcheck == null || logcheck === '' ? (
        <>
          <Alert variant="warning">
            You are not logged in. Please <Link to={'/login'}>login</Link> to see this page.
          </Alert>
          <br style={{marginBottom: '40em'}} />
        </>
      ) : (
        <>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <div>
              {companies.map((company) => {
                return (
                  <Card className="text-center mb-3" key={company.id} bg="dark" border="secondary" text="light">
                    <Card.Header className="ThreeBlindMice" style={{backgroundColor: 'ThreeDDarkShadow'}}></Card.Header>
                    <Card.Body>
                      <div>
                        <Card.Header>
                          <Card.Title>
                            <FontAwesomeIcon icon={faSchool} /> <b>Company:</b> {company.company_name}
                          </Card.Title>
                        </Card.Header>
                        <br />
                        <ListGroupItem>
                          <Card.Text>
                            <FontAwesomeIcon icon={faSchoolCircleCheck} /> <b>Slogan:</b> {company.company_slogan}
                          </Card.Text>
                        </ListGroupItem>
                        <ListGroupItem>
                          <Card.Text>
                            <FontAwesomeIcon icon={faCalendarAlt} /> <b>Date updated:</b>{' '}
                            {moment(company.last_updated_date).format('Do MMMM YYYY')}
                          </Card.Text>
                        </ListGroupItem>
                        <ListGroupItem>
                          <Card.Text>
                            <FontAwesomeIcon icon={faCalendarCheck} /> <b> Date created:</b>{' '}
                            {moment(company.created_date).format('Do MMMM YYYY')}
                          </Card.Text>
                        </ListGroupItem>
                      </div>
                      <Link
                        to={{
                          pathname: '/companies/' + company.id,
                          //   state: {
                          //       currentCompany: company
                          //   }
                        }}>
                        <br />
                        <Button variant="outline-info" className="me-2">
                          Edit
                        </Button>
                      </Link>
                      <Button variant="outline-danger">Delete</Button>
                    </Card.Body>
                  </Card>
                );
              })}
              <br />
              <br />
              <br />
            </div>
          )}{' '}
        </>
      )}
    </>
  );
};

export default CompanyList;
