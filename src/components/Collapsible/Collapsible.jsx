import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Collapsible = ({ open, children, title }) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="collapsible">
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn d-flex align-items-center"
            onClick={handleFilterOpening}
          >
            <h4 className="font-weight-bold mr-2 mb-0">{title}</h4>
            <i
              className={`fa ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="">
          <div>{isOpen && <div className="p-3">{children}</div>}</div>
        </div>
      </div>
    </>
  );
};

Collapsible.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Collapsible;
