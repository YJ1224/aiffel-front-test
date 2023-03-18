import React from 'react';
import styled from 'styled-components';
import PaginationLib from 'react-js-pagination'; //pagination 라이브러리 사용

const Div = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  &.pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }

  ul {
    display: flex;
    list-style: none;
    padding: 0;
  }

  ul.pagination li {
    display: inline-block;
    width: 40px;
    height: 40px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    border-radius: 20px;
    margin-left: 10px;
  }

  ul.pagination li:first-child {
    border-radius: 20px;
  }

  ul.pagination li:last-child {
    border-radius: 20px;
  }

  ul.pagination li a {
    text-decoration: none;
    color: #337ab7;
    font-size: 1rem;
  }

  ul.pagination li.active a {
    color: white;
  }

  ul.pagination li.active {
    background-color: #337ab7;
  }

  ul.pagination li a:hover,
  ul.pagination li a.active {
    color: blue;
  }

  &.page-selection {
    width: 48px;
    height: 30px;
    color: #337ab7;
  }
`;
const Pageination = (props) => {
  const { totalCount, limit, page, setPage } = props;
  return (
    <>
      {totalCount > 0 && (
        <Div>
          <PaginationLib
            activePage={page}
            itemsCountPerPage={limit}
            totalItemsCount={totalCount}
            pageRangeDisplayed={5}
            prevPageText={'‹'}
            nextPageText={'›'}
            onChange={setPage}
          ></PaginationLib>
        </Div>
      )}
    </>
  );
};

export default Pageination;
