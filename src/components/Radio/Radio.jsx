import React, { memo } from 'react';
import classnames from 'classnames';

const Radio = ({ id, label, title, ...props }) => (
  <label
    htmlFor={id}
    className={classnames('radio', { 'radio--active': props.checked })}
    title={title}
  >
    <input type="radio" id={id} {...props} /> {label}
  </label>
);

export default memo(Radio);
