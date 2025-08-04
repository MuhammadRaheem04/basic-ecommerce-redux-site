import CatagoryPage from "./catagoryPage";

interface Params {
  params: Promise<{
    catagory: string;
  }>;
}

const Category = ({ params }: Params) => {
  return (
    <div className="mt-[50px] mb-[100px]">
      {/* Pass params as a promise for React.use() */}
      <CatagoryPage params={params} />
    </div>
  );
};

export default Category;





