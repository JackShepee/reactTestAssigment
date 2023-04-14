import Header from "../molecules/Header";
import Banner from "../molecules/Banner";
import MainSlider from "../molecules/MainSlider";
import { useQuery, gql } from "@apollo/client";

const GET_ROCKETS = gql(`
query GetRockets {
  rockets {
    id
    description
    name
  }
 }
`);

const Home = () => {
  const { data, loading, error } = useQuery(GET_ROCKETS);

  let slider;

  if (loading) slider = <div>"Loading...."</div>;
  if (error) slider = <div>`Error! ${error.message}`</div>;
  if (data?.rockets)
    slider = <MainSlider title="POPULAR TOURS" items={data.rockets} />;

  return (
    <>
      <Header />
      <Banner />
      {slider}
    </>
  );
};

export default Home;
