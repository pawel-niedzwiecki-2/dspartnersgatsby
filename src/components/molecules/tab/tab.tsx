// Import plugin
import React, { useState, useEffect } from "react";

// import settings style
import settings from "layout/settings";

// Import compinent
import { Container, Row, Col, Section } from "components/molecules/flexboxgrid/flexboxgrid/flexboxgrid";

// Import style
import { Box, Title, Cell, Loading } from "./style/style";

// TypeScript for Props
interface Props {
  data: {}[];
}

// create new component
const TabComponent = ({ data }: Props) => {
  const [advice, setAdvice] = useState([]);

  useEffect(() => {
    const url = "http://localhost:4000/api/v1/orders/?per_page=10&current_page=1";

    (async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setTimeout(() => {
          setAdvice(json.response.data);
        }, 500);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  return (
    <>
      <Section>
        <Box theme={settings}>
          <Container>
            <Row>
              <Col xs={2}>
                <Title theme={settings}>WO ID</Title>
              </Col>
              <Col xs={2}>
                <Title theme={settings}>Description</Title>
              </Col>
              <Col xs={2}>
                <Title theme={settings}>Received date</Title>
              </Col>
              <Col xs={2}>
                <Title theme={settings}>Assigned to</Title>
              </Col>
              <Col xs={2}>
                <Title theme={settings}>Status</Title>
              </Col>
              <Col xs={2}>
                <Title theme={settings}>Priority</Title>
              </Col>
              {advice.length === 0 ? (
                <>
                  <Col xs={12}>
                    <Loading theme={settings}>Loading...</Loading>
                  </Col>
                </>
              ) : (
                advice.map(
                  (item: {
                    work_order_id: string;
                    description: string;
                    received_date: string;
                    assigned_to: [];
                    status: string;
                    priority: string;
                  }) => {
                    return (
                      <>
                        <Col xs={2}>
                          <Cell theme={settings}>{item.work_order_id}</Cell>
                        </Col>
                        <Col xs={2}>
                          <Cell theme={settings}>{item.description}</Cell>
                        </Col>
                        <Col xs={2}>
                          <Cell theme={settings}>{item.received_date}</Cell>
                        </Col>

                        <Col xs={2}>
                          <Cell theme={settings}>
                            {item.assigned_to.length === 0
                              ? "lack data"
                              : item.assigned_to.map((to: any) => {
                                  return (
                                    <>
                                      <p>
                                        <b>person_name: </b>
                                        <br />
                                        {to.person_name}
                                      </p>
                                      <p>
                                        <b>status: </b>
                                        <br />
                                        {to.status}
                                      </p>
                                    </>
                                  );
                                })}
                          </Cell>
                        </Col>
                        <Col xs={2}>
                          <Cell theme={settings}>{item.status}</Cell>
                        </Col>
                        <Col xs={2}>
                          <Cell theme={settings}>{item.priority}</Cell>
                        </Col>
                      </>
                    );
                  }
                )
              )}
            </Row>
          </Container>
        </Box>
      </Section>
    </>
  );
};

// export new component
export default TabComponent;
