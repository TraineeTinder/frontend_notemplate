import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Main from './pages/MainC';
import CadastroTrainer from './pages/CadastroTrainer';
import CadastroCliente from './pages/CadastroClinte';

const Routes = createAppContainer(
    createSwitchNavigator({
        Main,//pagina de likes de clientes
        CadastroCliente,
        CadastroTrainer,
    })
);

export default Routes;