import {Navbar,Welcome,Loader,Footer,Services,Transaction} from './components';
import {TransactionProvider} from './context/TransactionContext';
const App =() =>{
  return (
  <TransactionProvider>
   <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />


    </div>
    <Services />
    <Transaction />
    <Footer />

   </div>
   </TransactionProvider>
    
  
  );
}

export default App
