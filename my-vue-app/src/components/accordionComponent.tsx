// Accordion component with first accordion opened by default

import React, { useState } from "react";

function AccordionComponent() {
  const [clickedSection, setClickedSection] = useState(1);
  const accordionData = [
    { id: 1, name: "Section 1", content: "Content for section 1" },
    { id: 2, name: "Section 2", content: "Content for section 2" },
    { id: 3, name: "Section 3", content: "Content for section 3" },
  ];
  return (
    <div style={{ width: '400px', margin: 'auto', marginTop: '50px' }}>
      {accordionData.map((i) => (
        <div>
          <div
            onClick={() => setClickedSection(i.id)}
            // style={{ backgroundColor: "lightgrey" }}
             style={{
              background: '#f1f1f1',
              padding: '10px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
            key={i.id}
          >
            {i.name}
          </div>
          {i.id === clickedSection && (
            <div style={{ padding: '10px', background: '#fff' }} >{i.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default AccordionComponent;
