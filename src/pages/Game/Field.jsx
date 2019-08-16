import React, { memo } from 'react';
import classnames from 'classnames';

const areEqual = (prevProps, nextProps) => {
  const { type: pType, end: pEnd, win: pWin } = prevProps;
  const { type: nType, end: nEnd, win: nWin } = nextProps;

  return pType === nType && pEnd === nEnd && pWin === nWin;
};

const Field = ({ type, end, win, ...props }) => (
  <div className={classnames('field', { end, win })} {...props}>
    {type && <span className={type} />}
  </div>
);

export default memo(Field, areEqual);
