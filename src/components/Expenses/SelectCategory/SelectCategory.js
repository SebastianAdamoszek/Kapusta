import React, { useState } from 'react';
import PropTypes from 'prop-types';
import arrow from './arrow-bottom.svg';
import {
  CategoryElement,
  Wrapper,
  SelectBody,
  Category,
} from './SelectCategory.styled';

export default function SelectCategory({
  elementCategory,
  setElementCategory,
  categoryArray,
}) {
  const [selectCategory, setSelectCategory] = useState(false);

  const onSelect = () => {
    setSelectCategory(!selectCategory);
  };

  const getElementCategory = event => {
    setSelectCategory(!selectCategory);
    setElementCategory(event.target.innerText);
  };

  return (
    <Category>
      <Wrapper onClick={onSelect}>
        <span>{elementCategory}</span>
        <img src={arrow} alt="vector" />
      </Wrapper>
      {selectCategory && (
        <SelectBody>
          {categoryArray.map(element => (
            <CategoryElement key={element} onClick={getElementCategory}>
              {element}
            </CategoryElement>
          ))}
        </SelectBody>
      )}
    </Category>
  );
}

SelectCategory.propTypes = {
  elementCategory: PropTypes.string.isRequired,
  setElementCategory: PropTypes.func.isRequired,
  categoryArray: PropTypes.array.isRequired,
};
