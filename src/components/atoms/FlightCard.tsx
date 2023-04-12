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

const RocketsData = () => {
  const { data, loading, error } = useQuery(GET_ROCKETS);

  if (loading) return <div>"Loading...."</div>;
  if (error) return <div>`Error! ${error.message}`</div>;

  return (
    <div>
      {data.rockets.map(
        (rocket: { id: number; description: string; name: string }) => (
          <div key={rocket.id}>
            <h1>{rocket.name}</h1>
            <p>{rocket.description}</p>
          </div>
        )
      )}
    </div>
  );
};

export default RocketsData;
