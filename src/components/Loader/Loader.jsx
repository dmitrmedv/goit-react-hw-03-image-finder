import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.Loader}>
      <ThreeDots color="#EB5381" />
    </div>
  );
}
