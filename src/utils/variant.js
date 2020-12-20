const getValue = (props, variant) => (variant === 'function' ? variant(props) : variant);

export default (prop, values) => props => {
  const variant = props[prop] && values[props[prop]];
  return variant && getValue(props, variant);
};
