import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Rating = ({ stars, className }) => {
  const starCount = 5;
  const fullStars = Math.floor(stars);
  const hasHalfStar = stars - fullStars >= 0.5;

  const renderStar = (index) => {
    if (index < fullStars) {
      return <FaStar key={index} className="text-yellow-500" />;
    } else if (index === fullStars && hasHalfStar) {
      const gradientId = `star-gradient-${index}`;
      return <FaStarHalfAlt key={index} className="text-yellow-500" />;
    } else {
      return <FaStar key={index} className="text-gray-300" />;
    }
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      {Array.from({ length: starCount }, (_, index) => renderStar(index))}
    </div>
  );
};

export default Rating;
