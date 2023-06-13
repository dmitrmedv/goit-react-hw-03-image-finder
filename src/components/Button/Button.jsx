import css from './Button.module.css';

export default function Button({ LoadMore }) {
  return (
    <button type="click" className={css.Button} onClick={LoadMore}>
      Load More
    </button>
  );
}
