import {
  faCalendarCheck,
  faEdit,
  faMoneyBillAlt,
  faPencil,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Form, Button, Card, DropdownButton, Dropdown, Container } from "react-bootstrap";
import TransactionDataService from "../services/transaction";
import LoadingSpinner from "./LoadingSpinner";
import CompanyDataService from "../services/company";
import { useEffect } from "react";

const AddTransaction = (props: any) => {
  const [associated_company_id, setACI] = useState("");
  const [amount, setAmount] = useState("");
  const [type_of_contribution, setTOC] = useState("");
  const [associated_user_id, setAUI] = useState("");
  const logcheck = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  const [isLoading, setIsLoading] = React.useState(false);

  const [companies, setCompanies] = useState([]);

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

  const catagories = ["HW", "MI"];

  const onChangeACI = (e: { target: { value: any } }) => {
    const associated_company_id = e.target.value;
    setACI(associated_company_id);
  };
  const onChangeAmount = (e: { target: { value: any } }) => {
    const amount = e.target.value;
    setAmount(amount);
  };
  // const onChangeTOC = (e) => {
  //  // const type_of_contribution = e.target.value;
  //   setTOC(type_of_contribution);
  // };
  const onChangeAUI = (e: { target: { value: any } }) => {
    const associated_user_id = e.target.value;
    setAUI(associated_user_id);
  };
  const addtransaction = () => {
    if (associated_company_id === "") {
      alert("Please specify the Company!");
      return;
    } else if (type_of_contribution === "") {
      alert("Please specify the type of contribution!");
      return;
    } else {
      setIsLoading(true);
      var data = JSON.stringify({
        data: {
          type: "Transaction",
          attributes: {
            associated_company: associated_company_id,
            amount: amount,
            type_of_contribution: type_of_contribution,
            associated_user: logcheck,
          },
        },
      });

      TransactionDataService.createTransaction(data, token)
        .then((response) => {
          console.log(response);
          setIsLoading(false);
          alert("Success! Transaction created.");
          return;
        })
        .catch((e) => {
          console.log(data, token);
          console.log(e);
          setIsLoading(false);
          alert("Sorry, something went wrong");
          return;
        });
    }
  };

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <Card bg="dark" border="secondary" text="light" body className="mb-3 text-center" >
            <Form  onSubmit={addtransaction}>
              <h1 className='text-center'>
                <FontAwesomeIcon icon={faPencil} /> Add a Transaction
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

              <Form.Group className="mb-3" controlId="formBasicACI">
                <Form.Label>
                  <FontAwesomeIcon icon={faSchool} /> Company Name
                </Form.Label>
                <DropdownButton title="Company" onSelect={setACI} style={{minWidth: "22em"}}>
                  {companies.map((company) => {
                    return (
                      <Dropdown.Item 
                      key={company.id}
                      eventKey={company.company_name}>
                        {company.company_name}
                      </Dropdown.Item>
                    );
                  })}
                </DropdownButton>
                <p>You selected: {associated_company_id}</p>
                {/* <Form.Control
                  type="text"
                  placeholder="Enter company name"
                  value={associated_company_id}
                  onChange={onChangeACI}
                  required
                /> */}
                <Form.Text className="text-muted">
                  Please enter company name.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicTOC">
                <Form.Label>
                  <FontAwesomeIcon icon={faEdit} /> Type of Contribution
                </Form.Label>

                <DropdownButton
                  title="Type of contribution"
                  onSelect={setTOC}
                  id="required"
                  style={{minWidth: "22em"}}
                  // value={type_of_contribution}
                >
                  <Dropdown.Item eventKey="HW">Hours Worked</Dropdown.Item>
                  <Dropdown.Item eventKey="MI">Money Invested</Dropdown.Item>
                </DropdownButton>
                <p>You selected: {type_of_contribution}</p>
                {/* <Form.Control
                  type="text"
                  placeholder="HW = Hours works, MI = Money invested"
                  value={type_of_contribution}
                  onChange={onChangeTOC}
                  required
                  title="HW = Hours works, MI = Money invested"
                /> */}

                <Form.Text className="text-muted">
                  Please enter the type of contribution
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicAmount">
                <Form.Label>
                  <FontAwesomeIcon icon={faMoneyBillAlt} /> Amount
                </Form.Label>

                <Form.Control
                  type="number"
                  placeholder="Can be a number like 1.5 or whole number like 250000"
                  value={amount}
                  onChange={onChangeAmount}
                  required
                  style={{textAlign: "center"}}
                />
                <Form.Text className="text-muted">
                  Please enter the amount
                </Form.Text>
              </Form.Group>
              <Container className="align-center text-center">
              <Button variant="primary" type="submit" style={{minWidth: "22em"}}>
                <FontAwesomeIcon icon={faCalendarCheck} /> Submit
              </Button></Container>
            </Form>
          </Card>
        </div>
      )}
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
      
    </div>
  );
};

export default AddTransaction;
