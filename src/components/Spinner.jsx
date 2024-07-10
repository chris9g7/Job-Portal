import { ClipLoader } from "react-spinners";

const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color= '#0284c7'
      loading={loading}
      cssOverride={{
       
        margin: "100px auto",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
      }}
      size={200}
    />
  );
};

export default Spinner;
