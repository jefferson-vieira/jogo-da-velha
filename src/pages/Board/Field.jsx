import React, { memo } from 'react';

const Field = ({ type, ...props }) => (
  <div className="field" {...props}>
    {type && <span className={type} />}
  </div>
);

export default memo(Field);
