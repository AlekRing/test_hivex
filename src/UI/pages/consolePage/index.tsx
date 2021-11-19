import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header";
import RequestResponseFields from "../../components/requestRespondFields";
import RequestsLine from "../../components/requestsLine";

function Console() {
  return (
    <>
      <Header /> <RequestsLine /> <RequestResponseFields /> <Footer />
    </>
  );
}

export default Console;
