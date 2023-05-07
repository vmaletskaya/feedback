import PropTypes from 'prop-types';
import css from './Section.module.css';
export default function Title({ title, children }) {
  return (
    <section >
      <h1 className={css.title}> {title}</h1>
      {children}
    </section>
  );
}
Title.propTypes = {
  title: PropTypes.string,
};