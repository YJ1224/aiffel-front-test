import React from 'react';
import styled from 'styled-components';
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;
const Nav = styled.nav`
  display: flex;
  width: 70vw;
  height: auto;
  justify-content: center;
`;

const Button = styled.button`
  width: 50px;
  border: none;
  border-radius: 20px;
  padding: 8px;
  margin: 0 10px; 0 10px;
  background: black;
  color: white;
  font-size: 1rem;

  &:hover {
    background: tomato;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: deeppink;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;
const Pageination = (props) => {
  const { totalCount, limit, page, setPage } = props;
  const pageNumber = Math.ceil(totalCount / limit);
  return (
    <>
      {totalCount > 0 && (
        <Div>
          <Nav>
            <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
              &lt;
            </Button>
            {pageNumber &&
              Array(pageNumber)
                .fill()
                .map((_, i) => (
                  <Button
                    key={i + 1}
                    onClick={() => setPage(i + 1)}
                    aria-current={page === i + 1 ? 'page' : null}
                  >
                    {i + 1}
                  </Button>
                ))}
            <Button
              onClick={() => setPage(page + 1)}
              disabled={page === pageNumber}
            >
              &gt;
            </Button>
          </Nav>
        </Div>
      )}
    </>
  );
};

export default Pageination;
