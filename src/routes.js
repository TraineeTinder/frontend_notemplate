import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Main from './pages/Main';
import CadastroTrainer from './pages/CadastroTrainer';
import CadastroCliente from './pages/CadastroClinte';

const Routes = createAppContainer(
    createSwitchNavigator({
        CadastroTrainer,
        CadastroCliente,
        Main//pagina de likes de clientes
    })
);

export default Routes;