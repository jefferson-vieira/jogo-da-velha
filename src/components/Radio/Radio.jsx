import React, { memo } from 'react';
import classnames from 'classnames';

const Radio = ({ id, label, title, ...others }) => (
  <label
    htmlFor={id}
    className={classnames('radio', { 'radio--active': others.checked })}
    title={title}
  >
    <input type="radio" id={id} {...others} /> {label}
  </label>
);

export default memo(Radio);
