import { createAppContainer, createSwitchNavigator } from "react-navigation";
import InicioClientes from './pages/clients/InicioClientes';
import CadastroTrainer from './pages/trainees/CadastroTrainer';
import CadastroCliente from './pages/clients/CadastroClinte';
import MatchsCLient from "./pages/clients/MatchsClientes";
import ProfileCLient from "./pages/clients/PerfilClientes";
import NavBar from "./pages/clients/NavBar";

const Routes = createAppContainer(
    createSwitchNavigator({
        NavBar,
        InicioClientes,
        CadastroCliente,       
        CadastroTrainer,
        MatchsCLient,
        ProfileCLient 
    })
);

export default Routes;