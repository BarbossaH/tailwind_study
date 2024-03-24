import { arrowRight } from '../assets/icons';
import Button from '../components/Button';
import { statistics } from '../constants';

const Hero = () => {
  return (
    <section
      id="home"
      className=" w-full border-2 border-red-500 p-2 flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container "
    >
      <div className="border-2 relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p>Our Summer Collection</p>
        <h1>
          <span>The New Arrival</span>
          <br />
          <span>Nike </span>Shoes
        </h1>
        <p>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label={'Shop Now'} iconURL={arrowRight} />
        <div className="border-2 flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p>{stat.value}</p>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Hero;
