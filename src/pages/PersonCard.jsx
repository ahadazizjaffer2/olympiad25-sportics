// import "./Card2.css";

export const PersonCard = ({
  image,
  name,
  position,
}) => (
  <div className=" text-center hover:scale-105 transition-transform shadow-lg rounded-xl p-4 duration-300">
    <img className="w-48 h-48 rounded-full border-4 border-gray-600 mr-8 ml-8" src={image} />
    <div>
      <h2 className="mt-4 text-gray-600 text-lg font-semibold">{name}</h2>
      <h3 className="text-[#00A8FF]">{position}</h3>
    </div>
  </div>
);

  