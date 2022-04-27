import {
  faPen,
  faPencilAlt,
  faSchool,
  faSchoolCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import CompanyDataService from "../services/company";
import LoadingSpinner from "./LoadingSpinner";

const AddCompany = (props: any) => {
  const [company_name, setCompanyName] = useState("");
  const [company_slogan, setCompanySlogan] = useState("");
  const logcheck = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  const [isLoading, setIsLoading] = React.useState(false);
  const onChangeCompanyName = (e: { target: { value: any } }) => {
    const company_name = e.target.value;
    setCompanyName(company_name);
  };
  const onChangeCompanySlogan = (e: { target: { value: any } }) => {
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
        setIsLoading(true);
        var data = JSON.stringify({
          data: {
            type: "Company",
            attributes: {
              company_name: company_name,
              company_slogan: company_slogan,
            },
          },
        });

        CompanyDataService.createCompany(data, token)

          .then((response) => {
            console.log(response);
            setIsLoading(false);
            alert("Success! Company created.");
            return;
          })
          .catch((e) => {
            console.log(company_name, company_slogan);
            console.log(data, token);
            console.log(e);
            setIsLoading(false);
            alert("Sorry, something went wrong");
            return;
          });
      }
    }
  };

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <Card bg="dark" border="secondary" text="light" body className="mb-3 text-center">
            <Form  onSubmit={addcompany}>
              <h1 className='text-center'>
                <FontAwesomeIcon icon={faPencilAlt} /> Add a Company
              </h1>
              <br></br>
              {logcheck === "" || logcheck === null ? (
                <>
                  <aside>
                    This is just for show, please <a href="/login">login</a> or{" "}
                    <a href="/register">sign up</a> to use this feature.
                  </aside>
                  <br/>
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
                  pattern=".{3,55}"
                  title="Three or more characters"
                  style={{textAlign: "center"}}
                  required
                />
                <Form.Text className="text-muted">
                  Please enter company name.
                </Form.Text>
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
                  title="Five or more characters"
                  style={{textAlign: "center"}}
                />
                <Form.Text className="text-muted">
                  Please enter your company's slogan
                </Form.Text>
              </Form.Group>
              <Container className="align-center text-center">
              <Button variant="primary" type="submit" style={{minWidth: "22em"}}>
                <FontAwesomeIcon icon={faPen} /> Submit
              </Button></Container>
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
