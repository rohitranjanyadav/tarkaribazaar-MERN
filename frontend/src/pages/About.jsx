import { assets } from "../assets/assets";
import Brands from "../components/Brands";
const About = () => {
  return (
    <div className="py-12">
      <h1 className="text-3xl font-bold text-center">About TarkaariBazaar</h1>
      <p className="text-lg mt-4 text-center max-w-4xl mx-auto">
        Welcome to TarkaariBazaar — Nepal’s own online vegetable marketplace
        built to bridge the gap between local farmers and everyday consumers.
        <br />
        <br />
        We started TarkaariBazaar with a simple idea: fresh, local produce
        should be accessible, affordable, and sustainable. Our platform empowers
        farmers to list and sell their vegetables directly to customers —
        reducing middlemen, ensuring fair prices, and delivering farm-fresh
        goodness right to your doorstep.
        <br />
        At TarkaariBazaar, we're committed to:
        <br />
        🥦 Freshness Guaranteed: We partner directly with local growers to
        deliver vegetables harvested within hours. - 🌱 Supporting Farmers:
        Helping small and medium farmers earn fair value for their hard work.
        <br />
        <br />
        🧺 Convenience: Browse, order, and receive your tarkaari without leaving
        home.
        <br />
        <br />
        ♻️ Sustainability: Promoting local farming and eco-friendly
        distribution. Together, we’re building a smarter, greener way to shop
        for vegetables in Nepal — one basket at a time.
        <br />
        <br />
        TarkaariBazaar — Taja Tarkaari, TarkaariBazaar bata.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center mt-12 bg-black text-white">
        <div>
          <img src={assets.about_hero} alt="" className="w-full md:w-1/2" />
        </div>
        <div className="flex flex-col gap-3 p-3">
          <h1 className="text-3xl font-bold">Deal of the Day</h1>
          <p>
            {" "}
            Della semper accumsan magna et ultrices. Aenean at varius purus.
            Nulla egestas semper tellus.
          </p>
          <button className="bg-secondary text-white px-4 py-2">Shop</button>
        </div>
      </div>
      <Brands />
    </div>
  );
};
export default About;
