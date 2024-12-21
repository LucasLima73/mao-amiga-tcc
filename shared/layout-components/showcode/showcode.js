import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

const ShowCode = ({
  title,
  code,
  customCardClass,
  customCardHeaderClass,
  customCardBodyClass,
  customCardFooterClass,
  children,
}) => {
  const [showCode, setShowCode] = useState(false);

  const toggleCode = () => {
    setShowCode(!showCode);
  };

  return (
    <Card className={`custom-card ${customCardClass}`}>
      <Card.Header className={`justify-content-between ${customCardHeaderClass}`}>
        <Card.Title className="" dangerouslySetInnerHTML={{ __html: title }}></Card.Title>
        <div className="prism-toggle">
          <button className="btn btn-sm btn-primary-light" onClick={toggleCode}>
            {showCode ? 'Hide Code' : 'Show Code'}
            <i className={`${showCode ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 align-middle inline-block`}></i>
          </button>
        </div>
      </Card.Header>
      {showCode ? (
        <Card.Footer className={`border-top-0 ${customCardFooterClass}`}>
          <pre className="language-html">
            <code className="language-html">{code}</code>
          </pre>
        </Card.Footer>
      ) : (
        <Card.Body className={`${customCardBodyClass}`}>
          {children}
        </Card.Body>
      )}
    </Card>
  );
};

export default ShowCode;
