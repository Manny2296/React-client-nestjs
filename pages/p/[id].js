
import Layout from '../../component/layout';
import fetch from 'isomorphic-unfetch';
const Post = props => (
  <Layout>
    {props.data.map(prod => (
    <h1 key={prod.id} > {prod.name}</h1>
    ))}
    
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`http://localhost:3001/products/${id}`);
  const product = await res.json()
  try {
    console.log("produict" + product.name)
  console.log(`Fetched show: ${product.name}`);
  console.log('Fetched product:' + JSON.stringify(product));
  } catch (error) {
    console.log(error)
  }


  return { data: product };
};

export default Post;