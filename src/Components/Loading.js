import { ClipLoader } from 'react-spinners';
const Loading = () => {
    return ( 
        <ClipLoader color={"black"} 
                css={{display: "block", margin: "0 auto"}} 
                size={150} />
     );
}
 
export default Loading;