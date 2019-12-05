import Header from "../component/header";

const layoutStyle =  {
  margin : 20,
  padding: 20,
  border: '1px solid #DDD'
}
/* Method 1   Layout as a Higher Order Component 
const withLayout = Page => {
    return () => (
      <div style={layoutStyle}>
        <Header />
        <Page />
      </div>
    );
  };
  */
 // Method 2   Page content as a prop 
 const Layout = props => (
     <div style={layoutStyle}>
         <Header/>
         {props.content}
     </div>
 )
  export default Layout;

