import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import Collapsible from '../Collapsible/Collapsible';

const Filters = ({ filters, onFilter }) => {
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    onFilter(selected);
  }, [selected]);

  const toggleFilter = (filter) => {
    if (selected.includes(filter)) {
      setSelected(selected.filter((s) => s !== filter));
    } else {
      setSelected([...selected, filter]);
    }
  };
  return (
    <Collapsible open={false} title="Filter by technology">
      <div className="filters">
        {filters.map((filter) => (
          <button
            type="button"
            onClick={() => toggleFilter(filter)}
            className={`btn filter cta-btn cta-btn--filter ${
              selected.includes(filter) ? 'selected' : ''
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </Collapsible>
  );
};

Filters.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string),
  onFilter: PropTypes.func,
};

export default Filters;
