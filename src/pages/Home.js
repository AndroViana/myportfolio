import Socials from "../components/social";
import MyImage from "../logo.svg";

const Home = () => {
  return (
    <div>
      <Socials />
      <div className="flex flex-wrap mx-14 my-10">
        {/* Make the first div take 2/3 (8/12) of the width on larger screens */}
        <div className="bg-red-500 p-5 w-full sm:w-2/3 md:w-2/3 lg:w-2/3">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl mb-6 sm:mb-8">JOHN ANDRO VIANA</h1>
          <div className="">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl mb-6 sm:mb-10">
              Passionate full-stack web developer, skilled in crafting captivating
              interfaces and seamless functionality. Curious problem solver. Let's
              create innovative online experiences together!
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3 mb-3 sm:mr-5 sm:mb-0">
              Hello
            </button>
            <button className="text-white font-bold py-2 px-4 rounded">
              Hello
            </button>
          </div>
        </div>

        {/* Make the second div take 1/3 (4/12) of the width on larger screens */}
        <div className="bg-blue-500 p-5 w-full sm:w-1/3 md:w-1/3 lg:w-1/3">
          <img src={MyImage} alt="Logo" className="h-50 w-50" />
        </div>
      </div>
    </div>
  );
};

export default Home;
