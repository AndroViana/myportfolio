import Socials from "../components/social";

const Home = () => {
  return (
    <div>
      <Socials />
      <div class="bg-red-500 p-5 mx-2 sm:mx-10 md:mx-14 mt-10 sm:mt-20 lg:mt-28">
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-8xl mb-6 sm:mb-8">JOHN ANDRO VIANA</h1>
        <div class="">
          <p class="text-lg sm:text-xl md:text-2xl lg:text-2xl mb-6 sm:mb-10">
            Passionate full-stack web developer, skilled in crafting captivating
            interfaces and seamless functionality. Curious problem solver. Let's
            create innovative online experiences together!
          </p>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3 mb-3 sm:mr-5 sm:mb-0">
            Hello
          </button>
          <button class="text-white font-bold py-2 px-4 rounded">
            Hello
          </button>
        </div>
      </div>

    </div>
  );
};

export default Home;
