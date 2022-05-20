import {faPen, faPencilAlt, faQuestionCircle, faSchool, faSchoolCircleCheck} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';
import {Form, Button, Card, Alert, Container} from 'react-bootstrap';
import CompanyDataService from '../services/company';
import LoadingSpinner from './LoadingSpinner';

// Here we define the AddCompany component that will let us register a new company

const AddCompany = () => {
  const [company_name, setCompanyName] = useState('');
  const [company_slogan, setCompanySlogan] = useState('');
  const logcheck = localStorage.getItem('user'); // Check if theres a user
  const token = localStorage.getItem('token'); // grab the token if there is one
  const [isLoading, setIsLoading] = React.useState(false);
  const onChangeCompanyName = (e: {target: {value: any}}) => {
    const company_name = e.target.value;
    setCompanyName(company_name);
  };
  const onChangeCompanySlogan = (e: {target: {value: any}}) => {
    const company_slogan = e.target.value;
    setCompanySlogan(company_slogan);
  };

  const addcompany = () => {
    if (company_name.length > 55) {
      return;
    } else if (company_name.length < 3) {
      return;
    } else {
      if (company_slogan.length > 255) {
        return;
      } else if (company_slogan.length < 5) {
        return;
      } else {
        if (logcheck === "" || logcheck === null) {
          alert("You must be signed in to use this form")
          return;
        } else {
        setIsLoading(true);
        var data = JSON.stringify({
          data: {
            type: 'Company',
            attributes: {
              company_name: company_name,
              company_slogan: company_slogan,
            },
          },
        });

        CompanyDataService.createCompany(data, token) // This gets called upon a successfully validated form post

          .then((response) => {
            console.log(response);
            setIsLoading(false);
            alert('Success! Company created.');
            return;
          })
          .catch((e) => {
            console.log(company_name, company_slogan);
            console.log(data, token);
            console.log(e);
            setIsLoading(false);
            alert('Sorry, something went wrong');
            return;
          });
      }
    }}
  };

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />  // Loading spinner renders if theres a fetch going on
      ) : (
        <div>
          <Card bg="dark" border="secondary" text="light" body className="mb-3 text-center">
            <Form onSubmit={addcompany}><aside><a href = "/help"><FontAwesomeIcon icon={faQuestionCircle}/></a></aside>
              <h1 className="text-center">
                <FontAwesomeIcon icon={faPencilAlt} /> Create Company
              </h1>
              <br></br>
              {logcheck === '' || logcheck === null ? (
                <>
                  <aside>
                    This is just for show, please <a href="/login">login</a> or <a href="/register">sign up</a> to use
                    this feature.
                  </aside>
                  <br />
                </>
              ) : (
                <></>
              )}
              <Form.Group className="mb-3" controlId="formBasicCompanyName">
                <Form.Label>
                  <FontAwesomeIcon icon={faSchool} /> Company Name
                </Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Enter company name"
                  value={company_name}
                  onChange={onChangeCompanyName}
                  pattern="^[a-zA-Z][a-zA-Z0-9-_.]{3,55}$"
                  title="3 or more alphanumeric characters and less than 55"
                  style={{textAlign: 'center'}}
                  required
                />
                <Form.Text className="text-muted">Please enter company name.</Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCompanySlogan">
                <Form.Label>
                  <FontAwesomeIcon icon={faSchoolCircleCheck} /> Company Slogan
                </Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Enter company slogan"
                  value={company_slogan}
                  onChange={onChangeCompanySlogan}
                  required
                  pattern=".{5,255}"
                  title="Five or more alphanumeric and/or special characters and less than 255"
                  style={{textAlign: 'center'}}
                />
                <Form.Text className="text-muted">Please enter your company's slogan</Form.Text>
              </Form.Group>
              <Container className="align-center text-center">
                <Button variant="primary" type="submit" style={{minWidth: "15em"}}>
                  <FontAwesomeIcon icon={faPen} /> Submit
                </Button>
                
              </Container>
            </Form>
          </Card>
        </div>
      )}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default AddCompany;
