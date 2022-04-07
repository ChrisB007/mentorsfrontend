import axios from 'axios';
const Tech = ({ data }) => {
  const { categories } = data;
  const { subcategories } = categories[3];

  return (
    <>
      <h1 className="flex justify-center items-center m-auto mt-10">
        Find a mentor in Technology
      </h1>
      <div className="flex flex-wrap w-3/4 justify-center items-center m-auto mt-10">
        {subcategories.map((categoryItem) => {
          return (
            <div key={categoryItem.id} className="mt-3 mx-3 m-auto max-w-6xl">
              <div className="flex flex-col justify-center items-center w-80 h-36 border m-auto">
                <p>{`${categoryItem.name}`}</p>
              </div>
              <div></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Tech;

export async function getServerSideProps() {
  const categoryUrl = `https://www.mentorsparlor.com/api/categories`;
  //  const localUrl = `http://localhost:3000/api/categories`;
  const { data } = await axios.get(categoryUrl);

  return {
    props: { data },
  };
}
