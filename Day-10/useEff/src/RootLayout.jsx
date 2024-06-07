import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import { Children } from 'react';
function RootLayout({children}) {
  return (
    <>
      <Header></Header>
      <div style={{minHeight:'100vh'}}>
        {children}
        {/* <Outlet></Outlet> */}
        
      </div>
      {/* Dynamic Content */}
      <Footer></Footer>
    </>
  )
}
export default RootLayout;