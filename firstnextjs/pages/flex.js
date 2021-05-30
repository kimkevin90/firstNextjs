import styled from "styled-components";

const flex = () => {
  return (
    <Container>
      <div className="item">
        <h1> helloflex11d</h1>
      </div>
      <div className="item">abc</div>
      <div className="item">helloflex22</div>
    </Container>
  );
};

export default flex;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  /* width: 250px; */
  /* height: 250px; */
  /* align-content: space-between; */

  h1 {
    margin: 0;
  }
  .item {
    flex: 1 1 40%;
  }
`;
