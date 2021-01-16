import React from 'react';
import Flex from './flex';

const transformLabel = ({ label, confidence }) => `${label} (Confidence: ${confidence})`;

const Prediction = ({ p }) => (
  <Flex flexDirection="column" alignItems="center" className="container" flex={1} container>
    <p>{transformLabel(p)}</p>
  </Flex>
);

export default Prediction;
