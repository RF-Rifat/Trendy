// eslint-disable-next-line react/prop-types
const Brand = ({ element }) => {
  const { name, category, description, imageSrc } = element || {};
  console.log(category);

  return (
    <>
      <div className="flex flex-col items-center p-4">
        <img
          className="w-32 h-12 dark:text-violet-400"
          src={imageSrc}
          alt="Brand-logo"
        />
        <h3 className="my-3 text-3xl font-semibold">{name}</h3>
        <div className="space-y-1 leading-tight">
          <p className="text-gray-600">{category}</p>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Brand;
