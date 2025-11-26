const CategoryCard = ({ icon, title }) => {
  return (
    <div
      className="
        bg-white 
        hover:shadow-lg 
        transition-all 
        duration-300 
        rounded-xl 
        p-4 
        flex 
        flex-col 
        items-center 
        justify-center 
        w-[150px] 
        h-[150px] 
        cursor-pointer 
        border 
        border-gray-200
        hover:scale-105 

      "
    >
      {/* ICON IMAGE */}
      <img
        src={icon}
        alt={title}
        className="w-12 h-12 object-contain mb-3"
      />

      {/* TITLE */}
      <p className="text-center text-[13px] font-semibold text-emas-dark leading-tight">
        {title}
      </p>
    </div>
  );
};

export default CategoryCard;
