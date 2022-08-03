import React, { useContext } from 'react';
// import BusinessNameContext from './BusinessNameContext';
import useBusinessNameContext from './useBusinessNameContext';
import Footer from './Footer';
import Title from './Title';
import '../../App.css';

const Homepage = () => {
  // const {businessName, setBusinessName} = useContext(BusinessNameContext);
  const {businessName, setBusinessName} = useBusinessNameContext();
  
  const handleChange = (e) => {
    setBusinessName(e.target.value);
  }

  return (
    <>
      <div className="business-container">
        <Title />

        <div className="inner-container">
          <div className="fieldset">
            <label>Business name: </label>
            <input value={businessName} onChange={handleChange} />
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, consequuntur! Modi dicta aspernatur, perspiciatis ipsum recusandae nihil cum impedit voluptatum aliquid, neque ut hic officia minus maiores laborum voluptatem maxime.
            Deserunt obcaecati maxime aspernatur ex soluta, a debitis sint vel aperiam! Aut blanditiis nesciunt ex id, voluptatibus asperiores et non inventore molestias provident commodi fuga veritatis quasi nihil rerum ipsa.
            Non ipsam minima cumque voluptatum pariatur fugit dolor eum adipisci assumenda nihil commodi excepturi repudiandae, est impedit blanditiis saepe? Expedita esse eos minima dolores voluptatum eum perspiciatis, natus enim dolore.
            Voluptatum eligendi ratione velit! Ducimus deserunt totam ab dicta ratione officia autem, et reprehenderit quo quae numquam animi aspernatur accusamus fugiat sunt, eum fugit iusto atque commodi? Rerum, explicabo nesciunt?
            Expedita eos qui veniam repellendus vero alias, consequuntur architecto quisquam beatae sequi facilis obcaecati quis at nesciunt illum exercitationem quod sit corporis, excepturi minus ipsam sint. Soluta totam tempore beatae!
          </p>

        </div>

        <Footer />
      </div>
    </>

  )
}

export default Homepage;