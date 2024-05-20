const Image = ({ data }) => (
  <img
    key={data.altText}
    src={data.src}
    alt={data.altText}
    className={data.style}
  />
);

export default Image;
