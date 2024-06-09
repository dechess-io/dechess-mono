import { Provider } from "react-redux"
import { store } from "../../app/store"
import Router from "../Router/Router"
import Toast from "../Toast/Toast"
import {WalletKitProvider} from "@mysten/wallet-kit";

const App = () => {
  return (
  <WalletKitProvider>
    <Provider store={store}>
      <Toast />
      <Router />
    </Provider>
  </WalletKitProvider>
  )
}

export default App
