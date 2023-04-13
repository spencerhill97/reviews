import { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex + 1) % people.length;
      return newIndex;
    });
  };
  const prevPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex - 1 + people.length) % people.length;
      return newIndex;
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);

    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    const newIndex = randomNumber % people.length;
    setIndex(newIndex);
  };

  return (
    <main>
      <article className="review">
        <figure className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </figure>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="prev-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          surprise me
        </button>
      </article>
    </main>
  );
};

export default App;

// This is my code and functionality. Above is the more optimal solution.

// import { useEffect, useState } from "react";
// import Person from "./components/Person";
// import reviews from "./data";
// import { FaBeer } from "react-icons/fa";

// const App = () => {
//   const [people, setPeople] = useState(reviews);
//   const [person, setPerson] = useState("");

//   useEffect(() => {
//     return setPerson(people[0]);
//   }, []);

//   const nextPerson = (id) => {
//     // the id is always one more than the index of "reviews"
//     const newIndex = person.id;
//     if (newIndex === people.length) {
//       // if the person is the last of the array then will return first person
//       return setPerson(people[0]);
//     }

//     return setPerson(people[newIndex]);
//   };

//   const previousPerson = (id) => {
//     const newIndex = person.id - 2;
//     // if the person is the first of the array then will return last person
//     if (newIndex === -1) {
//       return setPerson(people[3]);
//     }
//     return setPerson(people[newIndex]);
//   };

//   const randomPerson = () => {
//     const randomNumber = Math.floor(Math.random() * people.length);
//     return setPerson(people[randomNumber]);
//   };

//   return (
//     <main style={{}}>
//       <Person
//         key={person.id}
//         {...person}
//         nextPerson={nextPerson}
//         previousPerson={previousPerson}
//         randomPerson={randomPerson}
//       />
//     </main>
//   );
// };

// export default App;
