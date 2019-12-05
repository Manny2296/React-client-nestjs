import Layout from '../component/layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = props => (
  <Layout>
    <h1>API Products</h1>
    <ul>
      {props.products.map(product => (
        <li key={product.id}>
          <Link href="/p/[id]" as={`/p/${product.id}`}>
            <a>{product.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function(){
  const res = await fetch('http://127.0.0.2:3001/products/');
  const data = await res.json();

  //console.log(`Show data fetched. Count: ${data.length}`  );
  console.log('data : '+  JSON.stringify(data))

  return {
    products: data
  };
};

export default Index;