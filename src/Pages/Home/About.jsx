/** @format */
import parson from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const About = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className='lg:w-1/2 relative'>
        <img
          src={parson}
          className="w-3/4 rounded-lg shadow-2xl"
        />
        <img
          src={parts}
          className="w-1/2 absolute top-1/2 left-1/2 border-8 border-white rounded-lg shadow-2xl"
        />
        </div>
        <div className='lg:w-1/2 ml-4'>
          <h1 className="text-xl mb-4 text-[#FF3811] font-bold">About</h1>
          <h3 className='text-4xl font-semibold'>We are qualified & of experience <br /> in this field</h3>
          <p className="py-6">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <p className="py-6">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which
          </p>
          <button className="btn bg-[#FF3811] hover:bg-[#dd3412] text-white font-semibold">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
