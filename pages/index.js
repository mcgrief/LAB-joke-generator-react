import GetJoke from '../components/GetJoke';

function Home() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Baby got a joke itch?</h1>
      <p><GetJoke /></p>
    </div>
  );
}

export default Home;
