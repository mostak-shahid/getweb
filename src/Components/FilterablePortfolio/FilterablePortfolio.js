import React from 'react';
import './FilterablePortfolio.scss';

const FilterablePortfolio = ({ id, title, active, setSelected }) => {
    return (
        <li
      className={active ? "portfolioMenu active" : "portfolioMenu"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
    );
};

export default FilterablePortfolio;