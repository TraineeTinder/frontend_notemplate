import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Main from './pages/Main';
const Routes = createAppContainer(
    createSwitchNavigator({
        Main//pagina de likes de clientes
    })
);

export default Routes;