import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import { Children } from 'react';
import { Outlet } from 'react-router-dom';
function RootLayout({children}) {
  return (
    <>
      <Header></Header>
      <div style={{minHeight:'100vh'}}>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  )
}
export default RootLayout;