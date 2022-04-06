import axios from 'axios';

const Craft = ({ data }) => {
  const { categories } = data;
  const { subCategories } = categories[1];
  return (
    <>
      <h1 className="flex justify-center items-center m-auto mt-10">
        Find a mentor in Craft
      </h1>
      <div className="flex flex-wrap w-3/4 justify-center items-center m-auto mt-10">
        {subCategories.map((categoryItem) => {
          return (
            <div className="mt-3 mx-3 m-auto max-w-6xl">
              <div className="flex justify-center items-center w-80 h-36 border m-auto">
                <p>{categoryItem.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Craft;

export async function getServerSideProps() {
  const categoryUrl = `https://www.mentorsparlor.com/api/categories`;
  const { data } = await axios.get(categoryUrl);

  return {
    props: { data },
  };
}
