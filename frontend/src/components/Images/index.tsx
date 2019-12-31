import styled from 'sc';

import plantFull from './plant-2.svg';
import plant from './plant.svg';
import redBlob from './redblob.svg';
import star from './star.svg';

export const Star = styled.div`
  width: 300px;
  background-image: url(${star});
`;

export const Plant = styled.div`
  background-image: url(${plant});
`;

export const PlantFull = styled.div`
  background-image: url(${plantFull});
`;

export const RedBlob = styled.div`
  background-image: url(${redBlob});
`;
