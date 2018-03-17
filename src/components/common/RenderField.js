import React from 'react';

const RenderField = ({ input, label, type, meta: { touched, error } }) => {
    return (
      <p>        
        <input {...input} placeholder={label} type={type} />
          {touched &&
            ((error && <span className="required">{error}</span>)) }
      </p>
  );
}

export default RenderField;
