import React from 'react';
import './PhotoGridFilter.css';

const filterOptions = [
  { id: 1, label: 'ALL', filterValue: 'all' },
  { id: 2, label: 'BlockChain/NFT', filterValue: 'blockchain' },
  { id: 3, label: 'PHP', filterValue: 'php' },
  { id: 4, label: 'JavaScript', filterValue: 'javascript' },
  { id: 5, label: 'Mobile', filterValue: 'mobile' },
];

function FilterOption({ id, label, filterValue, selected, handleClick }) {
  let classString = 'filter-option';
  if (selected === true) {
    classString = 'filter-option selected';
  }

  return (
    <a
      key={id}
      id={id}
      className={classString}
      onClick={() => {
        handleClick(filterValue);
      }}
    >
      {label}
    </a>
  );
}

class PhotoGridFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all'
    };
    this.handleFilterClick = this.handleFilterClick.bind(this);
  }

  handleFilterClick(filterValue) {
    this.shuffle = window.projectShuffleContainer;
    this.shuffle.filter(filterValue);
    this.setState({
      selected: filterValue
    });
  }
  render() {
    return (
      <div className="photo-filter-container">
        {filterOptions.map(option => {
          let selected = option.filterValue === this.state.selected;
          return (
            <FilterOption
              id={option.id}
              label={option.label}
              filterValue={option.filterValue}
              selected={selected}
              handleClick={this.handleFilterClick}
            />
          );
        })}
      </div>
    );
  }
}

export default PhotoGridFilter;
