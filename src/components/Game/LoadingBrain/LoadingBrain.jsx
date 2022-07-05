import React from 'react';
import { ReactComponent as BrainSVG } from '../../../assets/loading-brain.svg';
import { LoadingBrainWrapper } from '../../styles/LoadingBrain.styled';

const LoadingBrain = () => {
    return (
        <LoadingBrainWrapper>
            <BrainSVG />
        </LoadingBrainWrapper>
    );
};

export default LoadingBrain;
