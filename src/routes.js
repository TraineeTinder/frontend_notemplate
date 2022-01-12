import { createAppContainer, createSwitchNavigator } from "react-navigation";
import InicioClientes from './pages/clients/InicioClientes';
import CadastroTrainer from './pages/trainees/CadastroTrainer';
import CadastroCliente from './pages/clients/CadastroClinte';

const Routes = createAppContainer(
    createSwitchNavigator({
        InicioClientes,
        CadastroCliente,       
        CadastroTrainer, 
    })
);

export default Routes;