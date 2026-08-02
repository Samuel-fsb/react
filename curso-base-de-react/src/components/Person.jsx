export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">My name is {person.name}</h2>
    <p className="Person__age">I am {person.age}</p>
    <p className="Person__parter">{person.parterName} is my wife</p>
  </section>
);
