import styled from "styled-components";

export const CardContainer = styled.div`
  margin-top: 1rem;
`;

export const Card = styled.div`
  margin-right: 0.5rem !important;
  margin-left: 0.5rem !important;
  max-width: 19rem !important;
  min-width: 19rem !important;
  margin-bottom: 2.6rem;
  padding: 0;
  
  @media only screen and (max-device-width: 767px) {
    margin-right: 0 !important;
    margin-left: 0 !important;
    max-width: 100% !important;
    min-width: 100% !important;
  }
`;
export const ItemImg = styled.img`
  min-width: 100% !important;
  max-width: 100% !important;
  min-height: 18rem !important;
  max-height: 18rem !important;
  object-fit: cover !important;
`;
export const CardBody = styled.div``;
export const CardTitle = styled.h5`
  color: red;
`;

export const CardText = styled.p`
  font-size: 0.8rem;
`;

export const CardFooter = styled.div``;
