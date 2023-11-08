import { Header } from './Header';
import { useAccommodationsData } from '../../hooks/useAccommodationsData.ts';
import { AccommodationCard } from './AccommodationCard';

const Home = () => {
  const { data, isLoading } = useAccommodationsData();

  return (
    <>
      <Header />
      <div className="flex flex-wrap justify-center gap-4">
        {!isLoading &&
          data?.map((props) => {
            return <AccommodationCard key={props._id} {...props} />;
          })}
      </div>
    </>
  );
};

export default Home;
