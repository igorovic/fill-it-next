import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { Header } from "semantic-ui-react";
import { Container } from "semantic-ui-react";
import { Input } from "semantic-ui-react";
import { Button, Form } from "semantic-ui-react";
import { Segment } from "semantic-ui-react";

interface State {
  url: string;
  webhook: string;
}

export default function Home() {
  const [state, setState] = useState<Partial<State>>({
    url: "",
  });

  const handleChange = (e: any, { name, value }: any) =>
    setState({ ...state, [name]: value });

  const handleSubmit = () => {
    const { url } = state;
    console.debug("state", state);
    //setState({ submittedName: name, submittedEmail: email });
  };

  return (
    <Container>
      <Header as="h2">Fill up your PDF form with API</Header>
      <p>Transform any pdf to a simple api to fill it up.</p>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          label="url to the pdf"
          placeholder="url"
          name="url"
          onChange={handleChange}
        />
        <Form.Input
          label="webhook"
          placeholder="webhook"
          name="webhook"
          onChange={handleChange}
        />
        <Button>Submit</Button>
      </Form>
      <Segment>https://1drv.ms/b/s!Aggsi-h1aneimCI5EzxMfsRG_QGM</Segment>
    </Container>
  );
}
