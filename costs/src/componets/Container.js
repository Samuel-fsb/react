import Home from "./pages/Home";
import NewProject from "./pages/NewProject";
import Contats from "./pages/Contats";
import Company from "./pages/Company";

function Container(){
    return(
        <div>
            <Home></Home>
            <Company></Company>
            <Contats></Contats>
            <NewProject></NewProject>
        </div>
    );
};

export default Container;