import css from './Section.module.css';
export default function Title({ title, children }) {
  return (
    <section >
      <h1 className={css.title}> {title}</h1>
      {children}
    </section>
  );
}